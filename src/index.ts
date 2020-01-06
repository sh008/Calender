import calender from './calender';
declare const $: any;
module.exports = {
  create: function (id) {
    $("#" + id).append(calender.style());
    setTimeout(() => {
      $(".calender-card").on('click',(e)=>{
        // console.log(e.target);
        let elem = $(e.target).closest('.calender-card');
        let date = $(elem).attr('date');
        elem['date'] = date;
        $(elem).trigger('boxClick',[date]);
      })
    }, 0);

  },
};
