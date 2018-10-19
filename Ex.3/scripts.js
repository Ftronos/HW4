$(document).ready(function () {
    $('#city').on('input', function() {
        $('#search-results').empty();

        var val = new RegExp($(this).val(), 'ig');

        $.ajax({
            url: 'http://127.0.0.1:8080/cities.json',
            type: 'GET',
            success: function (cities) {
                cities.map(function (city) {
                    if (val.test(city.name)) {
                        $('#search-results').append(`<p>${city.name}</p>`)
                    }
                })
            }
        })
    });

    $('#search-results').on('click', 'p', function() {
        $('#search-results').empty();
        $('#city').val($(this).text());
    })
});