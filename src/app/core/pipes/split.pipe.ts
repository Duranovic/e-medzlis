import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'split',
})
export class SplitStringPipe implements PipeTransform {
    transform(value: any, args?: any): any {
      return value.split('');
    }
}