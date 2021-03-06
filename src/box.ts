import * as moment from 'moment-jalaali';
export class Box {
	_boxDate;
	_border;
	_day;
	constructor(date) {
		this._boxDate = date.format('jYYYY/jM/jD');
		this._day = date.format('jD');
	}
	create() {
		return `
			<div class="calender-card card" date=${this._boxDate}>
				<div class="card-body col-md-12">
				<div>
				<h5 class="card-title float-right">${this._day}</h5>
			</div>
				<div class="flags">
                                
                            </div>

				</div>
			</div>
			`
	}
}
export class holidayBox {
	_boxDate;
	_day;
	_border;
	constructor(date) {
		this._boxDate = date.format('jYYYY/jM/jD');
		this._day = date.format('jD');
	}
	create() {
		return `
			<div class="calender-card card bg-holiday" date=${this._boxDate}>
				<div class="card-body col-md-12">
				<h5 class="card-title float-right">${this._day}</h5>
				<div class="flags">
			</div>
				</div>
			</div>
			`
	}
}
// <button class="card-subtitle mb-2 __holiday-style __click-event float-left">
// <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
// </button>