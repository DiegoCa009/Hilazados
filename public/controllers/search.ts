import Server from "../model/server.js";
import Search from "./Listener.js";


class ViewEngine{
    private service: Server 
    public constructor (server: Server){
    this.service = server    
    }

    public add<T>(viewConstructor: new (service: any) => T):T{
        return new viewConstructor(this.service)
    }
}

// All search.html controllers

const searchView:ViewEngine = new ViewEngine(new Server())
const searchListener = searchView.add(Search)

searchListener.createListener(
    document.querySelector('.search')!
);

