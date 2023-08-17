import SearchTemplate from "../views/search.js";

export default class Search {
    private service: any;
    private template: SearchTemplate;
    private name: string = 'DIEGO';
    public constructor(service: any){
        this.service = service;
        this.template = new SearchTemplate();
    }

    public createListener (element: HTMLElement){
        element.addEventListener('click',async(e: Event) =>{
            const target = e.target as HTMLElement
            const template = await this.template.getTemplate()
            document.body.innerHTML += template
            
        } )
    }
}