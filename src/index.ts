import calender from './calender';
import * as moment from 'moment-jalaali';
import Modal from './modal';
declare const $: any;
let year = 0;
let month = 0;
let events = [];
let Id;
var build = function(){
  $("#" + Id).empty();
  console.log(year,month);
  $("#" + Id).append(calender.style(year, month));
  $("#" + Id).append(Modal.modalSelectDate());
  creat(Id);
}
var creat = function (id) {
  Id = id;
  if (year == 0) {
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
      console.log(year, month);
      build();
    })
    $("#pre-month").on('click', (e) => {
      if (month == 1) {
        month = 11;
        year--;
      } else {
        month--;
      }
      console.log(year, month);
      build();
    })
    $("#date-text").on('click', (e) => {
      $("#SelctDateModal").modal('show');
    })
  }, 0);
};
var init = function (id) {
  const today = moment();
  year = today.jYear();
  month = today.jMonth();
  console.log(year,month);
  $("#" + id).append(calender.style(year, month));
  $("#" + id).append(Modal.modalSelectDate());
}
var goDate = function () {
  $("#SelctDateModal").modal('hide');
  let textYear = $("#year-text").val();
  let textMonth = $("#month-text").val();
  if (textYear && textMonth) {
    year = +textYear;
    month = +textMonth;
    console.log(year,month);
    build();
  }
}

module.exports = {

  create: creat,
  init: init,
  goDate:goDate
};
