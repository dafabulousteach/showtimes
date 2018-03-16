import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovie'
})
export class FilterMoviePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    console.log('searchText is: ', searchText);
    return items.filter(it => {

      return it.title.toLowerCase().includes(searchText);
    });
  }
}
