import calender from './calender';
import * as moment from 'moment-jalaali';
declare const $: any;
let year = 0;
let month = 0;
let events = [];
let Id;
var creat = function (id) {
  Id = id;
  if(year == 0){
    init(id);
  }
  setTimeout(() => {
    $(".calender-card").on('click', (e) => {
      // console.log(e.target);
      let elem = $(e.target).closest('.calender-card');
      let date = $(elem).attr('date');
      $(".custom-menu").finish().toggle(100);
      $(elem).trigger('boxClick', [date]);
    })
    $("#next-month").on('click', (e) => {
      if (month == 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
      console.log(year,month);
      $("#" + id).empty();
      $("#" + id).append(calender.style(year, month));
      creat(Id);
    })
    $("#pre-month").on('click', (e) => {
      if (month == 1) {
        month = 11;
        year--;
      } else {
        month--;
      }
      console.log(year,month);
      $("#" + id).empty();
      $("#" + id).append(calender.style(year, month));
      creat(Id);
    })
  }, 0);
};
var init = function (id) {
  const today = moment();
  year = today.jYear();
  month = today.jMonth();
  $("#" + id).append(calender.style(year, month));
}


module.exports = {

  create: creat,
  init: init
};
