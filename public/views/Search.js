import searchTemplate from "../templates/search.js";
export default class Search {
    constructor() {
        this.$searchElement = document.querySelector('.search');
        searchTemplate('search-template');
        this.createListener();
    }
    createListener() {
        this.$searchElement.addEventListener('click', (e) => {
            console.log('agregando');
            const tag = document.createElement('search-template');
            document.body.appendChild(tag);
        });
    }
}
