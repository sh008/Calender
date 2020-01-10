import * as moment from 'moment-jalaali';
export class Box {
	_boxDate;
	_border;
	constructor(offset: number) {
			let date = moment().add(offset, 'days');
			this._boxDate = date.format('jD');
			this._border = offset === 0 ? 'today-border':'';
	}
	create() {
			return`
			<div class="card ${this._border}">
				<div class="card-body col-md-12">
					<div>
						<h5 class="card-title float-right">${this._boxDate}</h5>
						<button class="card-subtitle mb-2 __holiday-style __click-event float-left">
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
	_border;
	constructor(offset: number) {
			let date = moment().add(offset, 'days');
			this._boxDate = date.format('jD');
			this._border = offset === 0 ? 'today-border':'';
	}
	create() {
			return`
			<div class="card ${this._border} bg-holiday">
				<div class="card-body col-md-12">
				<div>
				<h5 class="card-title float-right">${this._boxDate}</h5>
				<button class="card-subtitle mb-2 __holiday-style __click-event float-left">
					<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
				</button>
			</div>
				</div>
			</div>
			`
	}
}