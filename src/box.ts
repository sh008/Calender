import * as moment from 'moment-jalaali';
export class Box {
    _boxDate;
    constructor(offset: number) {
        let date = moment().add(offset, 'days');
        this._boxDate = date.format('jYYYY/jM/jD');
    }
    create(color = '') {
        return`
        <div class="card ${color}">
        <div class="card-body">
          <h5 class="card-title">${this._boxDate}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        </div>
      </div>
        `
    }

}