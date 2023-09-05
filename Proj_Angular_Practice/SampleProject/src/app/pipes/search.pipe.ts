import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    
    // transform(items: any[], searchTerm: any, key1: string, key2: string)
    // : Array<any> {
    //     if(!searchTerm) {
    //         return items;
    //     }
    //     return items.filter( 
    //         (item : any) => 

    //         item[key2].toLowerCase().startsWith(searchTerm.toLowerCase())
    //         || item[key1].toLowerCase().startsWith(searchTerm.toLowerCase())
            
    //     );


    transform(items: any[], searchTerm: string) : any[] {
        if(!searchTerm) {
            return items;
        }
        return items.filter(item => {
            return Object.keys(item).some(key => {
                return String(item[key]).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
            });
        });
    }

}