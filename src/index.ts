import calender from './calender';
import context from './context-menu';
declare const $: any;
module.exports = {
  events : [],
  month_Offset : 0,
  create: function (id) {
    $("#" + id).append(calender.style(this.month_Offset));
    setTimeout(() => {
      $(".calender-card").on('click', (e) => {
        // console.log(e.target);
        let elem = $(e.target).closest('.calender-card');
        let date = $(elem).attr('date');
        $(".custom-menu").finish().toggle(100);
        $(elem).trigger('boxClick', [date]);
      })
    }, 0);
  },
};
