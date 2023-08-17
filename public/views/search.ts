export default class SearchTemplate {
    private path:string = './templates/search.html'
    public constructor(){

    }

    public async getTemplate( ): Promise<string>{
        const response:Response = await fetch(this.path);
        const template = await response.text();
        return template
    }
    
}