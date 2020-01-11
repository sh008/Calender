class Modal{
    selectDate(){
        return `
        <div class='row'>
            <div class='form-group col-12'>
            <label class='float-right'>سال</label>
            <input type='text' class='form-control' id='year-text'/>
            </div>
            <div class='form-group col-12'>
            <label class='float-right'>ماه</label>
            <select  class='form-control' id='month-text'>
                <option value='0'>فروردین</option>
                <option value='1'>اردیبهشت</option>
                <option value='2'>خرداد</option>
                <option value='3'>تیر</option>
                <option value='4'>مرداد</option>
                <option value='5'>شهریور</option>
                <option value='6'>مهر</option>
                <option value='7'>آبان</option>
                <option value='8'>آذر</option>
                <option value='9'>دی</option>
                <option value='10'>بهمن</option>
                <option value='11'>اسفند</option>
            </select>
            </div>
        </div>
        `
    }
    modalSelectDate(){
        return`
        <div id='SelctDateModal' class="modal" tabindex="-1" role="dialog" style='color:black;diraction:rtl'>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">تغییر تاریخ</h5>
      </div>
      <div class="modal-body">
        ${this.selectDate()}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick='Calender.goDate()'>رفتن</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">بستن</button>
      </div>
    </div>
  </div>
</div>
        
        `
    }
}
export default new Modal();