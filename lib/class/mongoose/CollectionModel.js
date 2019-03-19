'use strict';

const MongooseHelper = require('./index');
const util = require('../../utilities');

class CollectionModel {
    constructor(modelName, config) {
        this.modelName = modelName;
        if (typeof config === 'object') {
            this.config = config;
            this.mongooseHelper = new MongooseHelper(config);
            this.mongooseHelperSeq = new MongooseHelper(config);
        } else {
            this.Model = MongooseHelper.getGlobalModel(this.modelName);
            this.ModelSequence = MongooseHelper.getGlobalModel('sequence');
            if (!this.Model) {
                throw new Error(`Model ${this.modelName} not found`);
            }
            if (!this.ModelSequence) {
                throw new Error(`Model sequence not found`);
            }
        }
        this.searchFields = ['id'];
        this.document = {};
        this.documentList = {};
        this.dataObject = {};
        this.dataObjectList = [];
    }

    async connect() {
        this.Model = await this.mongooseHelper.connectModel(this.modelName);
        this.ModelSequence = await this.mongooseHelperSeq.connectModel('sequence');
    }

    async close() {
        await this.mongooseHelper.close(this.modelName);
        await this.mongooseHelperSeq.close('sequence');
    }

    async dropCollection(confirm = false, iAmSure) {
        if (confirm && iAmSure === 'yes-i-am-sure') {
            await this.Model.collection.drop();
        }
    }

    get(key) {
        return this.dataObject[key];
    }

    set(key, value) {
        if (value) {
            this.dataObject[key] = value;
            this.document[key] = value;
            return true;
        }
        return false;
    }

    del(key) {
        delete this.dataObject[key];
        delete this.document[key];
    }

    getObject() {
        return this.dataObject;
    }

    getObjects() {
        return this.dataObjects;
    }

    async count(query) {
        try {
            const total = await this.Model.count(query);
            return total;
        } catch(error) {
            console.error(`${this.modelName}.find: ${JSON.stringify(query, null, 4)}: ${error}`);
        }
    }

    async find(query, fields, options = {}) {
        try {
            const documents = await this.Model.find(query, fields, options)
                .sort(options.sort || '-published')
                .limit(options.limit || 100);

            this.documentList = documents;
            for (let i = 0, l = documents.length; i < l; i += 1) {
                const document = documents[i];
                if (document !== null) {
                    const dataObject = document.toObject();
                    delete dataObject._id;
                    this.dataObjectList.push(dataObject);
                }
            }
            return this.dataObjectList;
        } catch(error) {
            console.error(`${this.modelName}.find: ${JSON.stringify(query, null, 4)}: ${error}`);
        }
    }

    async findOne(query, fields, options) {
        try {
            const document = await this.Model.findOne(util.cleanObject(query), fields, options);
            if (document === null) {
                return null;
            }
            this.document = document;
            this.dataObject = document.toObject();
            delete this.dataObject._id;
            return this.dataObject;
        } catch(error) {
            console.error(`${this.modelName}.findOne(${JSON.stringify(query, null, 4)}).error: ${error}`);
        }
    }

    async search(searchTerm, fields, options) {
        return await this.find(util.makeSearchObject(searchTerm, this.searchFields), fields, options);
    }

    async save(dataObject) {
        // If no data input is given, assume we are going to save this.document
        if (typeof dataObject === 'undefined') {
            dataObject = this.document;
        }
        // If we are saving the native mongoose object we can just call save()
        if (dataObject instanceof this.Model) {
            return dataObject.save();
        }
        // If dataObject is still empty, bail out
        if (typeof dataObject === 'undefined') {
            return Promise.reject('No data to save!');
        }
        if (!dataObject.id) {
            dataObject.id = await this.getNextSequence();
        }
        const opts = {
            new: true,
            upsert: true,
            runValidators: true,
            setDefaultsOnInsert: true,
        };
        const query = util.cleanObject({ id: dataObject.id });
        try {
            const document = await this.Model.findOneAndUpdate(query, dataObject, opts);
            if (typeof document === 'object') {
                this.document = document;
                this.dataObject = document.toObject();
            }
            return this.dataObject;
        } catch(error) {
            console.error(`${this.modelName}.findOneAndUpdate(${JSON.stringify(query, null, 4)}).error: ${error}`);
        }
    }

    async getNextSequence() {
        try {
            const opts = {
                new: true,
                upsert: true,
                runValidators: true,
                setDefaultsOnInsert: true,
                rawResult: true,
            };
            const result = await this.ModelSequence.findOneAndUpdate({ name: this.modelName }, { $inc: { seq: 1 } }, opts);
            return result.value.seq + 1;
        } catch (err) {
            console.error(`mongo.getNextSequence-${this.modelName} ERROR:`, err);
            return Promise.reject(err);
        }
    }

    async delete(query) {
        const result = await this.Model.deleteOne(query);
        if (result.deletedCount === 1) {
            return true;
        }
        return false;
    }

}

module.exports = CollectionModel;