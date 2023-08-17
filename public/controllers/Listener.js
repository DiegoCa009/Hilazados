import SearchTemplate from "../views/search.js";
export default class Search {
    constructor(service) {
        this.name = 'DIEGO';
        this.service = service;
        this.template = new SearchTemplate();
    }
    createListener(element) {
        element.addEventListener('click', async (e) => {
            const target = e.target;
            const template = await this.template.getTemplate();
            document.body.innerHTML += template;
        });
    }
}
