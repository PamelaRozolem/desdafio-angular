import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(typeof args === "undefined"){
      return value;
    }
    return value.filter(item =>{
      const name = item["nome"].toLowerCase();
      return (name.indexOf(args.toLowerCase()) != -1);
    });
  }

}
