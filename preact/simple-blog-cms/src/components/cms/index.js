import { h, Component } from 'preact';

import styles from './style.css';
import util from '../../../lib/util';
import utilHtml from '../../../lib/util-html';
import ProgressBar from '../../../lib/components/progressbar';
import Messages from '../../../lib/components/messages';
import ArticleList from '../../../lib/components/articleList';
import CategoryList from '../../../lib/components/categoryList';
import ArticleEdit from '../../../lib/components/articleEdit';
import CategoryEdit from '../../../lib/components/categoryEdit';
import Pagination from '../../../lib/components/pagination';

const widgetName = 'simpleBlogCms';
const debug = false;
const initialState = {
    infoStatus: '',
    loadingProgress: 0,

    currentMenu: 'articles',
    messages: [],

    article: {},
    artlist: [],
    artlistTotal: 0,

    category: {},
    catlist: [],
    catlistTotal: 0,

    currentPage: 1,
    articlesPerPage: 10,
    categoriesPerPage: 10,
};

export default class SimpleBlogCms extends Component {
    constructor($props) {
        const props = $props;
        if (props.apiServer.length < 1) {
            props.apiServer = `${window.location.protocol}//${window.location.host}`;
        }
        super(props);
        this.state = util.getResetState(this.state, initialState);
        this.updateTimeIntervalMs = 5 * 1000;
        this.messageAgeInSeconds = 5;
        this.loadArtlist();
        const articleId = this.props.articleId;
        if (articleId) {
            util.fetchApi(`/api/article/${articleId}`, {}, this)
                .then((result) => {
                    this.setState({
                        article: result.article,
                    });
                });
        }
    }

    // - - - [ Functions ] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    componentCleanup() {
        if (debug) {
            console.log(widgetName, 'componentCleanup');
        }
        // this.saveHistoryToLocalStorage('productsInBasket', []);
        clearInterval(this.timer);
    }

    doHandleTextareaInput(element) {
        // console.log('doHandleTextareaInput:', element);
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    }

    loadArtlist(currentPage = 1) {
        const limit = this.state.articlesPerPage;
        const offset = (currentPage - 1) * this.state.articlesPerPage;
        util.fetchApi('/api/article/', { limit, offset }, this)
            .then((result) => {
                // console.log('result', result);
                this.setState({
                    artlist: result.artlist,
                    artlistTotal: result.total,
                })
            });
    }

    loadCatlist(currentPage = 1) {
        const limit = this.state.categoriesPerPage;
        const offset = (currentPage - 1) * this.state.categoriesPerPage;
        util.fetchApi('/api/category/', { limit, offset }, this)
            .then((result) => {
                console.log('result', result);
                this.setState({
                    catlist: result.catlist,
                    catlistTotal: result.total,
                })
            });
    }

    typeInTextarea(el, newText) {
        const start = el.selectionStart;
        const end = el.selectionEnd;
        const name = el.name;

        const article = this.state.article;
        const before = article[name].substring(0, start);
        const after  = article[name].substring(end, article[name].length);
        article[name] = (before + newText + after);

        this.setState({
            article,
        }, () => {
            if (el) {
                el.focus();
                el.selectionStart = start + newText.length;
                el.selectionEnd = start + newText.length;
            }
        });
    }

    cleanMessages() {
        const messages = [];
        const messagesPrev = this.state.messages;
        const now = parseInt(new Date().getTime() / 1000, 10);
        for (let i = 0, l = messagesPrev.length; i < l; i += 1) {
            const msg = messagesPrev[i];
            if (now - msg[0] < this.messageAgeInSeconds) {
                messages.push(msg);
            }
        }
        if (messages.length !== messagesPrev.length) {
            this.setState({ messages });
        }
    }

    handleAddImage = (file, cb) => {
        const article = this.state.article;
        if (!Array.isArray(article.img)) {
            article.img = [];
        }
        article.img.push(file);
        this.setState({ article });
        cb();
    }

    // - - - [ Events ] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    handleMenuClick = (event) => {
        event.preventDefault();
        const el = event.target;

        const currentMenu = el.dataset.menu;
        const currentPage = 1;
        this.setState({ currentMenu, currentPage });
        if (currentMenu === 'articles') {
            this.loadArtlist();
        } else if (currentMenu === 'categories') {
            this.loadCatlist();
        } else if (currentMenu === 'categories') {

        }
    };

    handleArtlistClick = (event) => {
        event.preventDefault();
        const trElement = event.target.closest('tr');
        const artId = parseInt(trElement.dataset.id, 10);
        util.fetchApi(`/api/article/${artId}`, {}, this)
            .then((result) => {
                this.setState({
                    article: result.article,
                });
            });

    };

    handleCatlistClick = (event) => {
        event.preventDefault();
        const trElement = event.target.closest('tr');
        const artId = parseInt(trElement.dataset.id, 10);
        util.fetchApi(`/api/category/${artId}`, {}, this)
            .then((result) => {
                this.setState({
                    category: result.category,
                });
            });

    };

    handleArticleClickSave = (event) => {
        event.preventDefault();
        const data = {
            method: 'PATCH',
            ...this.state.article,
        }
        // console.log('trying to save', this.state.article);
        util.fetchApi(`/api/article/${this.state.article.id}`, data, this)
            .then((result) => {
                const messages = this.state.messages;
                messages.push([parseInt(new Date().getTime() / 1000, 10), 'Artikkel oppdatert']);
                this.setState({ messages });
                this.loadArtlist();
            });
    };

    handleArticleClickNew = (event) => {
        event.preventDefault();
        const data = {
            method: 'POST',
            ...this.state.article,
        }
        // console.log('trying to save', this.state.article);
        util.fetchApi(`/api/article/`, data, this)
            .then((result) => {
                const article = result;
                const messages = this.state.messages;
                messages.push([parseInt(new Date().getTime() / 1000, 10), 'Artikkel opprettet']);
                this.setState({ messages, article });
                this.loadArtlist();
            });
    };

    handleCategoryClickSave = (event) => {
        event.preventDefault();
        const data = {
            method: 'PATCH',
            ...this.state.category,
        }
        // console.log('trying to save', this.state.article);
        util.fetchApi(`/api/category/${this.state.category.id}`, data, this)
            .then((result) => {
                const messages = this.state.messages;
                messages.push([parseInt(new Date().getTime() / 1000, 10), 'Kategori oppdatert']);
                this.setState({ messages });
            });
    };

    handleArticleTextareaInput = (event) => {
        // event.preventDefault();
        const el = event.target;
        const name = el.name;
        const article = this.state.article;
        article[name] = el.value;
        this.setState({ article });
        // this.doHandleTextareaInput(el);
    };

    handleCategoryTextareaInput = (event) => {
        // event.preventDefault();
        const el = event.target;
        const name = el.name;
        const category = this.state.category;
        category[name] = el.value;
        this.setState({ category });
    };

    handleArticleInput = (event) => {
        // event.preventDefault();
        const el = event.target;
        const name = el.name;
        const article = this.state.article;
        if (typeof article[name] === 'object' && Array.isArray(article[name])) {
            article[name] = el.value.split(/, ?/);
        } else {
            article[name] = el.value;
        }
        this.setState({ article });
    };

    handleCategoryInput = (event) => {
        // event.preventDefault();
        const el = event.target;
        const name = el.name;
        const category = this.state.category;
        if (typeof category[name] === 'object' && Array.isArray(category[name])) {
            category[name] = el.value.split(/, ?/);
        } else {
            category[name] = el.value;
        }
        this.setState({ category });
    };

    handlePaginationClick = (event) => {
        event.preventDefault();
        const currentPage = Number(event.target.id);
        this.setState({ currentPage });
        this.loadArtlist(currentPage);
    };

    handlePaginationDecClick = (event) => {
        event.preventDefault();
        const currentPage = Number(this.state.currentPage - 1);
        this.setState({ currentPage });
        this.loadArtlist(currentPage);
    };

    handlePaginationIncClick = (event) => {
        event.preventDefault();
        const currentPage = Number(this.state.currentPage + 1);
        this.setState({ currentPage });
        this.loadArtlist(currentPage);
    };

    handleRemoveImageClick = (event) => {
        event.preventDefault();
        const el = event.target;
        const imageIdx = el.dataset.image;
        const article = this.state.article;
        // console.log('article.img', article.img, imageIdx);

        if (Array.isArray(article.img)) {
            // console.log('article.img', article.img, imageIdx);
            article.img.splice(imageIdx, 1);
            this.setState({ article });
        }
    };

    // - - - [ Component events from Preact it self: ] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    componentWillMount() {
        if (debug) {
            console.log(widgetName, 'componentWillMount', this.props);
        }
    }

    componentDidMount() {
        if (debug) {
            console.log(widgetName, 'componentDidMount', this.props);
        }
        window.addEventListener('beforeunload', () => this.componentCleanup());

        // const tx = document.getElementsByTagName('textarea');
        // for (var i = 0; i < tx.length; i++) {
        //     tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        // }

        // update time every second
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.cleanMessages();
        }, this.updateTimeIntervalMs);
    }

    componentWillUnmount() {
        if (debug) {
            console.log(widgetName, 'componentWillUnmount', this.props);
        }
        this.componentCleanup();
    }

    // Every time something happens:
    shouldComponentUpdate(nextProps, nextState) {
        if (debug) {
            console.log(widgetName, 'shouldComponentUpdate', this.props, nextProps, nextState);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (debug) {
            console.log(widgetName, 'componentDidUpdate', prevProps, prevState, this.state);
        }
    }

    // Render the shit:
    render() {
        const {
            currentMenu,
            messages,

            article,
            artlist,
            artlistTotal,

            category,
            catlist,
            catlistTotal,

            currentPage,
            articlesPerPage,
            categoriesPerPage,
        } = this.state;
        const articleId = this.props.articleId;

        const renderedMenu = (
            <nav class='nav nav-pills nav-fill mb-3'>
                <a class={`nav-item nav-link ${currentMenu === 'articles' ? 'active' : ''}`} href='#'
                    onClick={this.handleMenuClick} data-menu='articles'>Articles</a>
                <a class={`nav-item nav-link ${currentMenu === 'categories' ? 'active' : ''}`} href='#'
                    onClick={this.handleMenuClick} data-menu='categories'>Categories</a>
                <a class={`nav-item nav-link ${currentMenu === 'images' ? 'active' : ''}`} href='#'
                    onClick={this.handleMenuClick} data-menu='images'>Images</a>
            </nav>
        );

        if (currentMenu === 'articles') {
            return (
                <div class='container-fluid'>
                    <ProgressBar styles={styles} loadingProgress={this.state.loadingProgress} />
                    {renderedMenu}

                    <div class='row'>
                        <ArticleList styles={styles}
                            articleId={article.id || articleId}
                            artlist={artlist}
                            handleArtlistClick={this.handleArtlistClick}
                        />
                    </div>
                    <div class='d-flex justify-content-center'>
                        <Pagination styles={styles}
                            artlistTotal={artlistTotal}
                            currentPage={currentPage}
                            articlesPerPage={articlesPerPage}
                            handlePaginationClick={this.handlePaginationClick}
                            handlePaginationDecClick={this.handlePaginationDecClick}
                            handlePaginationIncClick={this.handlePaginationIncClick}
                        />
                    </div>
                    <div class='row'>
                        <Messages styles={styles} messages={messages} />
                    </div>
                    <div class='row'>
                        <ArticleEdit styles={styles}
                            articleId={articleId}
                            article={article}
                            that={this}
                            handleInput={this.handleArticleInput}
                            handleAddImage={this.handleAddImage}
                            handleRemoveImageClick={this.handleRemoveImageClick}
                            handleTextareaInput={this.handleArticleTextareaInput}
                            handleClickSave={this.handleArticleClickSave}
                            handleClickNew={this.handleArticleClickNew}
                        />
                    </div>
                    <div class='row'>
                        <Messages styles={styles} messages={messages} />
                    </div>
                </div>
            );
        } else if (currentMenu === 'categories') {
            return (
                <div class='container-fluid'>
                    <ProgressBar styles={styles} loadingProgress={this.state.loadingProgress} />
                    {renderedMenu}

                    <div class='row'>
                        <CategoryList styles={styles}
                            catlist={catlist}
                            handleCatlistClick={this.handleCatlistClick}
                        />
                    </div>
                    <div class='d-flex justify-content-center'>
                        <Pagination styles={styles}
                            artlistTotal={catlistTotal}
                            currentPage={currentPage}
                            articlesPerPage={categoriesPerPage}
                            handlePaginationClick={this.handlePaginationClick}
                            handlePaginationDecClick={this.handlePaginationDecClick}
                            handlePaginationIncClick={this.handlePaginationIncClick}
                        />
                    </div>
                    <div class='row'>
                        <CategoryEdit styles={styles}
                            category={category}
                            handleInput={this.handleCategoryInput}
                            handleTextareaInput={this.handleCategoryTextareaInput}
                            handleClickSave={this.handleCategoryClickSave}
                        />
                    </div>
                </div>
            );
        } else if (currentMenu === 'images') {
            return (
                <div class='container-fluid'>
                    <ProgressBar styles={styles} loadingProgress={this.state.loadingProgress} />
                    {renderedMenu}

                    <div class='row'>
                        list of images
                    </div>
                </div>
            );
        }
    }
}
