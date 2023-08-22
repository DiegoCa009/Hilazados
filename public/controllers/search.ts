import Server from "../model/server.js";
import Search from "../views/Search.js";


// All search.html controllers

class SearchEngine{
    private views: any[] = [];
    public constructor(){
        this.views.push(new Search())
        
    }
    
}

const server: Server = new Server();
const engine: SearchEngine = new SearchEngine()




