
declare global {
    var server: Server
  }
export default class Server{
    private name: string = 'server one'
    public searchData: string[] =['colgantes','cama para gato',' cuadros', 'repisas']
    public constructor(){
    this.Instance()
    }
    
    
    private Instance(){
        globalThis.server = this;
    }

}