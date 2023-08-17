import Server from "../model/server.js";
import Search from "./Listener.js";
class ViewEngine {
    constructor(server) {
        this.service = server;
    }
    add(viewConstructor) {
        return new viewConstructor(this.service);
    }
}
// All search.html controllers
const searchView = new ViewEngine(new Server());
const searchListener = searchView.add(Search);
searchListener.createListener(document.querySelector('.search'));
