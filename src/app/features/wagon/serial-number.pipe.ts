import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serialNumber'
})
export class SerialNumberPipe implements PipeTransform {

  transform(value: string): string {
    //50 55 20-05 555-7,
    return value.slice(0,2) + " " + value.slice(2, 4) + " " + value.slice(4, 6) + "-" 
      + value.slice(6, 8) + " " + value.slice(8, 11) + "-" + value.slice(11, 12);
  }

}
