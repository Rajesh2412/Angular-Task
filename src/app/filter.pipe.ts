import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    // I am unsure what id is here. did you mean title?
    if (!items) return [];
    return items.filter(item => item.login.indexOf(term) !== -1);
  }

}
