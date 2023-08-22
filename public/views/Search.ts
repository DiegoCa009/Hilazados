import searchTemplate from "../templates/search.js";

export default class Search {
    private $searchElement: HTMLElement = document.querySelector('.search')!;

    public constructor(){
    searchTemplate('search-template')    
    this.createListener()    
    }

    public createListener (){
       this.$searchElement.addEventListener('click', (e: Event)=>{
            console.log('agregando')
            const tag = document.createElement('search-template')
            document.body.appendChild(tag)
            
       })
    }
}