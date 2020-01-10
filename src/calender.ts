import * as moment from 'moment-jalaali';
import { Box } from './box';
import { holidayBox } from './box';
class Calender {
    _today;
    _year;
    _month;
    constructor() {
    }
    style(year = 0, month = 0) {
        this._month = month;
        this._year = year;
        moment.loadPersian();
        this._today = this.firstDateMoment().format("jMMM jYYYY");
        //اولین روز سال چند شنبه است
        let start = this.findFirstDay();
        //ماه چند روز دارد
        let end = this.monthLength();

        let res = "";
        let tr = "";
        for (let i = 0; i < start; i++) {
            tr += '<td></td>';
        }
        for (let i = 0; i < end; i++) {
            let date = this.firstDateMoment().add(i, 'day');
            let day = date.day() === 6 ? 0 : date.day() + 1;
            if (day === 6) {
                tr += `<td>${(new holidayBox(date)).create()}</td>`
            }
            else if (day === 0) {
                res += `<tr>${tr}</tr>`;
                tr = `<td>${(new Box(date)).create()}</td>`
            } else {
                tr += `<td>${(new Box(date)).create()}</td>`
            }
        }
        res += `<tr>${tr}</tr>`;

        return `
            <div> 
            <div class='row'>
            <div class='col-4'><a id='next-month' class='float-right pointer'>ماه بعد</a></div>
            <div class='col-4 text-center'>${this._today}</div>
            <div class='col-4'><a id='pre-month' class='float-left pointer'>ماه قبل</a></div>
                
            </div>
            <hr>
            <table class="container fluid">
                <thead class="__table-style">
                <tr class='text-center'>
                <th>شنبه</th>
                <th>یکشنبه</th>
                <th>دوشنبه</th>
                <th>سه شنبه</th>
                <th>چهارشنبه</th>
                <th>پنجشنبه</th>
                <th>جمعه</th>
                </tr>
                </thead>
                <tbody>
                    ${res}
                </tbody>
            </table>
            </div>
            `;
    }
    findFirstDay() {
        let firstDay = 0;
        let date = moment(`${this._year}/${this._month + 1}/1`, 'jYYYY/jM/jD');
        firstDay = date.day() === 6 ? 0 : date.day() + 1;
        return firstDay;
    }
    monthLength() {
        return moment.jDaysInMonth(this._year, this._month)
    }
    firstDateMoment() {
        return moment(`${this._year}/${this._month + 1}/1`, 'jYYYY/jM/jD');
    }



}
export default new Calender();