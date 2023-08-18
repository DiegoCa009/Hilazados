import createHTML from "../templates/search";
export default class SearchTemplate {
    constructor() {
        this.searchData = [];
    }
    draw() {
        createHTML('search-tag');
    }
}
