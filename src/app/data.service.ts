export class DataService{
  
    private data: string[] = [ "Tom", "Bob",  "Sam"];
      
    getData(): string[] {
          
        return this.data;
    }
    addData(name: string){
          
        this.data.push(name);
    }
}