export default class SearchTemplate {
    constructor() {
        this.path = './templates/search.html';
    }
    async getTemplate() {
        const response = await fetch(this.path);
        const template = await response.text();
        return template;
    }
}
