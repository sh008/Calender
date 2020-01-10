import * as moment from 'moment-jalaali';
import { Box } from './box';
import { holidayBox } from './box';
class Calender {
    constructor() {
    }
    style(month) {
        const today = moment();
        let day = today.jDate();
        let start = 1 - day;
        let startdate = moment().add(start, 'days');
        let startdaten = startdate.day() === 6 ? 0 : startdate.day() + 1;
        let end = moment.jDaysInMonth(today.jYear(), today.jMonth()) - day;
        // const headTitle =  `امروز ${today.jDate()} ${this.months[today.jMonth()-1]} ${today.jYear()}`;
        let res = "";
        let tr = "";
        for (let i = 0; i < startdaten; i++) {
            tr += '<td></td>';
        }
        for (let i = start; i <= end; i++) {
            let date = moment().add(i, 'days');
            date.locale('fa');
            let day = date.day() === 6 ? 0 : date.day() + 1;
            if(day === 6){
                tr += `<td>${(new holidayBox(i)).create()}</td>`
            }
            else if (day === 0) {
                res += `<tr>${tr}</tr>`;
                tr = `<td>${(new Box(i)).create()}</td>`
            } else {
                tr += `<td>${(new Box(i)).create()}</td>`
            }
        }
        res += `<tr>${tr}</tr>`;

        return `
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
            `;
    }



}
export default new Calender();