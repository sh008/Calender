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
				<div class="card-body col-md-12">
					<div>
						<h5 class="card-title">${this._boxDate}</h5>
					</div>
					<div>
						<button class="card-subtitle mb-2 __holiday-style __click-event">
							<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</div>
			`
	}
}
export class holidayBox {
	_boxDate;
	constructor(offset: number) {
			let date = moment().add(offset, 'days');
			this._boxDate = date.format('jYYYY/jM/jD');
	}
	create(color = '') {
			return`
			<div class="card ${color}">
				<div class="card-body col-md-12">
					<div>
						<h5 class="card-title __holiday-style">${this._boxDate}</h5>
					</div>
					<div class="col-md-12">
						<button class="card-subtitle mb-2 __holiday-style __click-event-holiday">
							<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</div>
			`
	}
}