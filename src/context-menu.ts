class Contextmenu {
    create(){
        return `
        <ul class='custom-menu'>
  <li data-action="first">ساخت رویداد جدید</li>
  <li data-action="second">یادآور</li>
</ul>
        `
    }

}
export default new Contextmenu();