import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userCount'
})
export class UserCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
