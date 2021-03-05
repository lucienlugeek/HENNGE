import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'beautifyDate'
})
export class BeautifyDatePipe implements PipeTransform {

  transform(value: moment.Moment, ...args: unknown[]): unknown {
    if (!value.isBefore(moment('0:00', 'H:m'))) {
      return value.format('H:mm');
    }
    if (!value.isBefore(moment('1 1 0:00', 'M D H:m'))) {
      return value.format('MMM D');
    }
    return value.format('YYYY/MM/DD');
  }

}
