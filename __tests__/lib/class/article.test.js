const myMongoose = require('../../../lib/class/mongoose');
const Article = require('../../../lib/class/article');

const article = new Article();

const config = {
    mongo: {
        url: 'mongodb://localhost:27017/simpleBlog?safe=true&auto_reconnect=true&poolSize=20',
    },
};

beforeAll(async () => {
    await myMongoose.init(config);
});

describe('Article Class', () => {
    describe('Method tests', () => {

        test('Should save article, check content and delete it again', () => {
            article.save({ title: 'test3', body: 'foobar' })
                .then((result) => {
                    // console.log('article.save.result', result);
                    expect(result.title).toEqual('test3');
                    expect(result.body).toEqual('foobar');

                    return article.delete({ id: result.id });
                })
                .then((result) => {
                    // console.log('article.delete.result', result);
                    expect(result).toEqual({ n: 1, ok: 1, deletedCount: 1 });
                })
                .catch(error => console.error(error));
        });

        test('Should load 1 article as object', () => {
            article.findOne({})
               .then((result) => {
                   // console.log('article.findOne.result', result);
                   expect(typeof result === 'object' && !Array.isArray(result)).toBeTruthy();
               })
               .catch(err => console.error(err));
        });

        test('Should load articles as an array of objects', () => {
            article.find({})
               .then((result) => {
                   // console.log('article.find.result', result);
                   expect(Array.isArray(result)).toBeTruthy();
               })
               .catch(err => console.error(err));
        });

        test('Should search  and return articles as an array of objects', () => {
            article.search('test')
               .then((result) => {
                   // console.log('article.search.result', result);
                   expect(Array.isArray(result)).toBeTruthy();
               })
               .catch(err => console.error(err));
        });
    });
});
