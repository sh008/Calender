import calender from './calender';
import context from './context-menu';
declare const $: any;
module.exports = {
  events : [],
  create: function (id) {
    $("#" + id).append(calender.style());
    $("#" + id).append(context.create());
    setTimeout(() => {
      $(".calender-card").on('click', (e) => {
        // console.log(e.target);
        let elem = $(e.target).closest('.calender-card');
        let date = $(elem).attr('date');
        $(".custom-menu").finish().toggle(100);
        $(elem).trigger('boxClick', [date]);
      })
      $(".calender-card").on('contextmenu', (ev) => {
        ev.preventDefault();
        let elem = $(ev.target).closest('.calender-card');
        let date = $(elem).attr('date');
        $(".custom-menu").finish().toggle(100).  
        // In the right position (the mouse)
        css({
            top: ev.pageY + "px",
            left: ev.pageX + "px"
        });
        return false;
      });
    }, 0);
  },
};
