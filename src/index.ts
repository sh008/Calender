import calender from './calender';
import * as moment from 'moment-jalaali';
import Modal from './modal';
declare const $: any;
let year = 0;
let month = 0;
let events = [];
let selectedDate;
let Id;
var build = function () {
  $("#" + Id).empty();
  $("#" + Id).append(calender.style(year, month));
  $("#" + Id).append(Modal.modalSelectDate()).append(Modal.modalTask());
  creat(Id);
}
var creat = function (id) {
  Id = id;
  if (year == 0) {
    init(id);
  }
  setTimeout(() => {
    $(".calender-card").on('click', (e) => {
      console.log(e.target);
      let elem = $(e.target).closest('.calender-card');
      let date = $(elem).attr('date');
      $(".custom-menu").finish().toggle(100);
      $(elem).trigger('boxClick', [date]);
      $("#taskModal").modal('show');
      selectedDate = date;
      $("#headDate").html(date);
    })
    $("#next-month").on('click', (e) => {
      if (month == 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
      build();
    })
    $("#pre-month").on('click', (e) => {
      if (month == 1) {
        month = 11;
        year--;
      } else {
        month--;
      }
      build();
    })
    $("#date-text").on('click', (e) => {
      $("#SelctDateModal").modal('show');
    })
    chekTask();
  }, 0);
};
var init = function (id) {
  const today = moment();
  year = today.jYear();
  month = today.jMonth();
  $("#" + id).append(calender.style(year, month));
  $("#" + id).append(Modal.modalSelectDate()).append(Modal.modalTask());
}
var goDate = function () {
  $("#SelctDateModal").modal('hide');
  let textYear = $("#year-text").val();
  let textMonth = $("#month-text").val();
  if (textYear && textMonth) {
    year = +textYear;
    month = +textMonth;
    build();
  }
}
var chekTask = function () {
  let tasks = $(".task");
  for (let task of tasks) {
    let taskDate = $(task).closest('.calender-card').attr('date');
    let taskCount = events.filter(x => x['date'] === taskDate).length;
    $(task).html(taskCount);
    if ($(task).html() === "0") {
      $(task).css({
        'display': 'none'
      })
    }
  }
}
var addTask = function () {
  events.push({
    date: selectedDate,
    time: $("#task-time").val(),
    disc: $("#task-disc").val()
  })
  let taskText = $(`div[date='${selectedDate}']`).find('.task');
  taskText.html(+taskText.html() + 1).css({ 'display': 'block' })
  $("#taskModal").modal('hide');
}
module.exports = {
  create: creat,
  init: init,
  goDate: goDate,
  addTask: addTask
};
