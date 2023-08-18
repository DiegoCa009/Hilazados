export default class Server {
    constructor() {
        this.name = 'server one';
        this.searchData = ['colgantes', 'cama para gato', ' cuadros', 'repisas'];
        this.Instance();
    }
    Instance() {
        globalThis.server = this;
    }
}
