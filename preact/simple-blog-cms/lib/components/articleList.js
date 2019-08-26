import { h, Component } from 'preact';

import util from '../util';

const initialState = {
    toggleDropdown: {},
};
const debug = false;

export default class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initialState);
        this.parent = props.that;
        this.imageServer = this.parent.props.apiServer;
        this.serverName = '';
        if (document.domain === 'localhost') {
            this.serverName = 'http://localhost:8080';
        }
    }

    handleDropdownClick = (event, key) => {
        event.preventDefault();
        const el = event.target;

        let { toggleDropdown } = this.state;
        if (toggleDropdown[key]) {
            toggleDropdown[key] = false;
        } else {
            toggleDropdown[key] = true;
        }
        this.setState({ toggleDropdown });
    }

    handleSearchKeypress = (event) => {
        if (event.key === 'Enter') {
            this.props.handleSubmit(event);
        } else {
            this.props.handleInput(event);
        }
    };

    render(props) {
        const styles = props.styles;
        const artlist = props.artlist;
        const catlist = props.catlist;
        const sessionEmail = props.sessionEmail;
        const handleListClick = props.handleListClick;
        const handleFilterClick = props.handleFilterClick;
        const handleInput = props.handleInput;
        const handleSubmit = props.handleSubmit;
        const handleClickNew = props.handleClickNew;
        const articleId = props.articleId;
        const filter = props.filter;

        const authorDefault = sessionEmail.replace(/\@.+$/, '');

        const { toggleDropdown } = this.state;

        const statusList = [
            { value: 1, title: 'I arbeid' },
            { value: 2, title: 'Live' },
        ];

        return (
            <div class='col-12'>
                <div class='row mb-2'>

                    <div class="col-6 col-sm-3 col-md-2">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle"
                                type="button"
                                onClick={e => this.handleDropdownClick(e, 'category')}
                            >
                                {filter.category ? filter.category : 'Velg kategori'}
                            </button>
                            <div class={`dropdown-menu ${toggleDropdown.category ? 'show' : ''}`} style='z-index: 1200;'>
                                <a class="dropdown-item" href="#"
                                    data-key='category'
                                    data-val=''
                                    onClick={e => {
                                        this.handleDropdownClick(e, 'category');
                                        handleFilterClick(e);
                                    }}
                                >
                                    Alle
                                </a>
                                {catlist.map(cat =>
                                    <a class={`dropdown-item ${filter.category === cat.title ? 'text-success' : ''} ${!cat.type && !cat.menu ? 'text-muted font-weight-lighter' : ''}`} href="#"
                                        data-key='category'
                                        data-val={cat.title}
                                        onClick={e => {
                                            this.handleDropdownClick(e, 'category');
                                            handleFilterClick(e);
                                        }}
                                    >
                                        {cat.menu > 0 && <i class='fas fa-bars mr-2' />}
                                        {[2, 3, 4].indexOf(cat.type) !== -1 && <i class='fas fa-ad mr-2' />}
                                        {[1].indexOf(cat.type) !== -1 && <i class='fas fa-cogs mr-2' />}
                                        {[5].indexOf(cat.type) !== -1 && <i class='fas fa-image mr-2' />}
                                        {[6].indexOf(cat.type) !== -1 && <i class='fas fa-link mr-2' />}
                                        {!cat.type && !cat.menu && <i class='fas fa-question mr-2' />}

                                        {cat.title}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-sm-3 col-md-2">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle"
                                type="button"
                                onClick={e => this.handleDropdownClick(e, 'status')}
                            >
                                {filter.status ?
                                    statusList.find(x => x.value === filter.status).title : 'Velg status'}
                            </button>
                            <div class={`dropdown-menu ${toggleDropdown.status ? 'show' : ''}`} style='z-index: 1200;'>
                                <a class="dropdown-item" href="#"
                                    data-key='status'
                                    data-val=''
                                    onClick={e => {
                                        this.handleDropdownClick(e, 'status');
                                        handleFilterClick(e);
                                    }}
                                >
                                    Alle
                                </a>
                                {statusList.map(stat =>
                                    <a class={`dropdown-item ${filter.status === stat.value ? 'text-success' : ''}`} href="#"
                                        data-key='status'
                                        data-val={stat.value}
                                        onClick={e => {
                                            this.handleDropdownClick(e, 'status');
                                            handleFilterClick(e);
                                        }}
                                    >
                                        {stat.title}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div class="col-9 col-sm-2 col-md-4">
                        <input type="text" class="form-control" placeholder="Søk etter artikler" name="q"
                            onChange={handleInput}
                            onKeypress={handleInput}
                        />
                    </div>
                    <div class="col-3 col-sm-2 col-md-2">
                        <button class="btn btn-success" onclick={handleSubmit}><i class="fas fa-search"></i> Søk</button>
                    </div>

                    <div class="col-12 col-sm-2 col-md-2 text-right">
                        <button class='btn btn-info float-right ml-2' onClick={e => handleClickNew(e, {
                            author: authorDefault,
                            category: filter.category || catlist[0].title,
                            categoryId: (catlist.find(c => c.title === filter.category).id) || catlist[0].id,
                        })}>+ Ny artikkel</button>
                    </div>

                </div>
                <table class={`table table-sm ${styles.condensed}`}>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Sort</th>
                            <th scope='col'>Bilde</th>
                            <th scope='col'>Kategori</th>
                            <th scope='col'>Tittel</th>
                            <th scope='col'>Pub.dato</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Forfatter</th>
                            <th scope='col'>Vis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artlist.map(art =>
                            <tr data-id={art.id} class={articleId == art.id ? 'bg-primary text-white' : ''} onClick={handleListClick}>
                                <td scope='row' class='text-right'>{art.id}</td>
                                <td scope='row' class='text-right'>{art.sort}</td>
                                <td>
                                    {art.img && Array.isArray(art.img) && art.img[0] && (
                                        <span class='text-muted'>
                                            <img src={`${this.imageServer}/pho/${art.img[0].src}?w=150`} style='max-height: 50px;' class='img-fluid' /> 
                                            <span class='text-muted'>({art.img.length})</span>
                                        </span>
                                    )}
                                </td>
                                <td><small class='text-muted'>#{art.categoryId}</small> {art.category}</td>
                                <td>
                                    {art.title}<br />
                                    {art.url && <small><i class='fas fa-link'></i> {art.url}</small>}
                                    <small>
                                        {Array.isArray(art.tags) && art.tags.map(tag =>
                                            <span class='badge badge-info mr-1'>{tag}</span>
                                        )}
                                    </small><br />
                                    <small>
                                        <small class='text-muted'>
                                            Ord: {util.wordCount(art.body)}, 
                                            Lesetid: {util.readTime(art.body, 'no')}
                                        </small>
                                    </small>
                                </td>
                                <td>
                                    {util.isoDateNormalized(art.published)}<br />
                                    {art.published !== art.updatedDate && <span class='text-muted'>
                                        <small><i class="fas fa-user-edit"></i> {util.isoDateNormalized(art.updatedDate)}</small>
                                    </span>}
                                </td>
                                <td class='text-center'><span class={`badge badge-${util.getStatusClass(art.status)} p-2`}>{util.getStatus(art.status)}</span></td>
                                <td>{art.author}</td>
                                <td>
                                    <a class='btn btn-sm btn-primary' target='_blank'
                                        href={`${this.serverName}/v2/${util.htmlIdSafe(art.category || 'no-category')}/${util.htmlIdSafe(art.title || 'no-title')}/${art.id}`}
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
