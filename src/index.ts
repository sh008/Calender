import calender from './calender';
declare const $: any;
module.exports = {
  create: function (id) {
    $("#" + id).append(calender.style());
  },
  clickinDay: function (e) {
    console.log(e);
  }
};
