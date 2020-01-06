import * as moment from 'moment-jalaali';
export class Box {
  _boxDate;
  _fullDate;
  constructor(offset: number) {
    let date = moment().add(offset, 'days');
    this._fullDate= date.format('jYYYY/jM/jD')
    this._boxDate = date.format('jD');
  }
  create(color = '') {
    let text = '';
    if (color) {
      text = 'text-white';
    }
    return `
        <div class="calender-card card ${color} ${text}" date='${this._fullDate}'>
        <div class="card-body custom-card">
          <h5 class="card-title" style='text-align:right'>${this._boxDate}</h5>
          <h6 class="card-subtitle mb-2"></h6>
        </div>
      </div>
        `
  }

}