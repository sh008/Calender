import * as moment from 'moment-jalaali';
import { Box } from './box';
class Calender {
    constructor() {
        this.style();
    }
    style() {
        const tody = moment();
        let day = tody.jDate();
        let start = 1 - day;
        let startdate = moment().add(start, 'days');
        startdate.locale('fa');
        let startdaten = startdate.day() === 6 ? 0 : startdate.day() + 1;
        let end = moment.jDaysInMonth(tody.jYear(), tody.jMonth()) - day;
        // const headTitle =  `امروز ${tody.jDate()} ${this.months[tody.jMonth()-1]} ${tody.jYear()}`;
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
                tr += `<td>${(new Box(i)).create('bg-danger')}</td>`
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
        <table>
            <thead>
            <tr class='text-center'>
            <th>شنبه</th><th>یکشنبه</th><th>دوشنبه</th><th>سه شنبه</th><th>چهارشنبه</th><th>پنجشنبه</th><th>جمعه</th>
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