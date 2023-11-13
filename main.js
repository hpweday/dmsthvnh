

// var


$('.search_select-bar').click(function() {
    $('.search_select-bar-check').removeClass('search_select-bar-check')
    $(this).addClass('search_select-bar-check')
})

var dateStart = flatpickr("#datepickerStart", {
    defaultDate: "today", // Hiển thị ngày hiện tại
    dateFormat: "d-m-Y", // Định dạng ngày
  });

var dateStart =  flatpickr("#datepickerEnd", {
    defaultDate: "today", // Hiển thị ngày hiện tại
    dateFormat: "d-m-Y", // Định dạng ngày
});


$('.search_bar-focus').click(function() {
    $('.layer_bt').toggleClass('hide')
    $('.content_searchBar').toggleClass('filter_search-bar')
})

$('.layer_bt').click(function() {
    $(this).toggleClass('hide')
    $('.content_searchBar').toggleClass('filter_search-bar')

})

$(document).keyup(function(e) {
    if(e.originalEvent.code == "Escape") {
        $('.layer_bt').addClass('hide')
        $('.content_searchBar').removeClass('filter_search-bar')
    }
})


$('.outStanding_nav li').click(function() {
    $('.locate_check').removeClass('locate_check')
    $(this).addClass('locate_check')
})