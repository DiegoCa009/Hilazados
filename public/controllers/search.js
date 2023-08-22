import Server from "../model/server.js";
import Search from "../views/Search.js";
// All search.html controllers
class SearchEngine {
    constructor() {
        this.views = [];
        this.views.push(new Search());
    }
}
const server = new Server();
const engine = new SearchEngine();
