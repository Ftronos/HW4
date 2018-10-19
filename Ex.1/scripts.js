$(document).ready(function () {
    $('.head-tabs').on('click', 'div', function () {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('.tabs').find('.head-body div').removeClass('active').eq($(this).index()).addClass('active');
    })
});