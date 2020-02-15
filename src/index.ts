import calender from './calender';
import * as moment from 'moment-jalaali';
import Modal from './modal';
declare const $: any;
let year = 0;
let month = 0;
let events = [];
let selectedDate;
let Counter = 0;
let Id;
var build = function () {
  $("#" + Id).empty();
  $("#" + Id).append(calender.style(year, month));
  $("#" + Id).append(Modal.modalSelectDate()).append(Modal.modalTask());
  init(Id);
}
var creat = function (id, evs = []) {
  Id = id;
  events = [...evs];
  Counter = evs.length;
  if (year == 0) {
    init(id);
  }
};
var init = function (id) {
  if (year == 0) {
    const today = moment();
    year = today.jYear();
    month = today.jMonth();
    $("#" + id).append(calender.style(year, month));
    $("#" + id).append(Modal.modalSelectDate()).append(Modal.modalTask());
  }
  setTimeout(() => {
    $(".calender-card").on('click', (e) => {
      if ($(e.target).hasClass('task')) {
        removeTask(e.target.id);
        return;
      }
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
  let cards = $(".calender-card");
  for (let card of cards) {
    let taskDate = $(card).attr('date');
    let allTasksForDate = events.filter(x => x['date'] === taskDate);
    for (let dateTask of allTasksForDate) {
      let text = dateTask['disc'].length > 20 ? dateTask['disc'].substring(0, 20) + '...' : dateTask['disc'];
      let taskTemplate = $(`<a class='task pointer' id='${dateTask['id']}' data-hover="حذف"><span>${text}</span></a>`);
      $(`div[date='${taskDate}']`).find('.flags').append(taskTemplate);
      taskTemplate.css({ 'display': 'block' })
    }

  }
}
var clear = function () {
  $("#task-time").val(''),
    $("#task-disc").val('')
}
var addTask = function () {
  if (!$("#task-disc").val()) {
    return;
  }
  events.push({
    date: selectedDate,
    time: $("#task-time").val(),
    disc: $("#task-disc").val(),
    id: 'task' + ++Counter
  })
  //create task tag
  let text = $("#task-disc").val().length > 20 ? $("#task-disc").val().substring(0, 20) + '...' : $("#task-disc").val();
  let task = $(`<a class='task pointer' id='task${Counter}' data-hover="حذف"><span>${text}</span></a>`);
  $(`div[date='${selectedDate}']`).find('.flags').append(task);
  // taskText.html(+taskText.html() + 1).css({ 'display': 'block' })
  task.css({ 'display': 'block' })
  $("#taskModal").modal('hide');
  clear();
}
var removeTask = function (id) {
  let taskIndex = events.findIndex(x => x.id == id);
  events.splice(taskIndex, 1);
  $("#" + id).remove();
}
var exportTasks = function () {
  return events;
}
module.exports = {
  create: creat,
  init: init,
  goDate: goDate,
  addTask: addTask,
  exportTasks: exportTasks
};
