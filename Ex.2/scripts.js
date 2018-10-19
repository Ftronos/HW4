$(document).ready(function () {
    $.ajax({
        url: 'http://127.0.0.1:8080/cities.json',
        type: 'GET',
        success: function (cities) {
            cities.forEach(function(city) {
                $('#city').append(`<option value="${city.name}">${city.name}</option>`)
            })
        }
    })
});