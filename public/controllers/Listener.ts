import SearchTemplate from "../views/search.js";

export default class Search {
    private $searchElement: HTMLElement = document.querySelector('.search')!;
    private template: SearchTemplate;
    public constructor(){
        this.template = new SearchTemplate();
    }

    public createListener (element: HTMLElement){
       this.$searchElement.addEventListener('click', (e: Event)=>{
            
       })
    }
}