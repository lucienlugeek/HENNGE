import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SpawnDateService {

  constructor() { }

  /**
   * Generate many moment objects for mock.
   */
  spawn(): moment.Moment[] {
    const moments = [];
    moments.push(moment('0:20', 'H:mm'));
    moments.push(moment('0:10', 'H:mm'));
    moments.push(moment('0:00', 'H:mm'));
    moments.push(moment('1 3', 'M D'));
    moments.push(moment('1 2', 'M D'));
    moments.push(moment('1 1', 'M D'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    moments.push(moment('2019 12 31', 'YYYY MM DD'));
    return moments;
  }
}
