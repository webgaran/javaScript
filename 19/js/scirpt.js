
// Welcome To Javascript Course

var items = document.querySelectorAll('.cd-tabs-navigation li a');

items.forEach(function (item, index) {
    item.addEventListener('click' , function (e) {
        e.preventDefault();

        document.querySelector('.cd-tabs-navigation li a.selected').classList.remove('selected');
        this.classList.add('selected');

        var dataBox = this.getAttribute('data-content');

        document.querySelector('.cd-tabs-content li.selected').classList.remove('selected');
        document.querySelector(".cd-tabs-content li[data-content="+ dataBox +"]").classList.add('selected');

    })
})