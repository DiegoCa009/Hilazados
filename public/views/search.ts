import createHTML from "../templates/search";

export default class SearchTemplate {
    private searchData: string[] = [];
    public constructor(){
    
    }

    public draw( ): void{
        createHTML('search-tag')
        
    }
    
}