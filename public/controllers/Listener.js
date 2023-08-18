import SearchTemplate from "../views/search.js";
export default class Search {
    constructor() {
        this.$searchElement = document.querySelector('.search');
        this.template = new SearchTemplate();
    }
    createListener(element) {
        this.$searchElement.addEventListener('click', (e) => {
        });
    }
}
