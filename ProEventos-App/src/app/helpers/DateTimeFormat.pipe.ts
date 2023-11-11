
import { Constants } from '@app/util/constants';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateFormatPipe',
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  override transform(value: Date | string , _args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }
}
