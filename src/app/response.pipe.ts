import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'response'
})
export class ResponsePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: any, args: any[] = null): any {
    console.log('values are: ', value)
    console.log('keys are: ', Object.keys(value))
    return Object.keys(value)
  }

}
