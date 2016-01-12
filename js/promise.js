var loadData = function () {

    var promise = $.getJSON('php/json-source.php');

    var printData = function (data) {
        $.each(data, function () {
            $('.table').append('<tr><td>' + this.language + '</td><td>' + this.developer + '</td></tr>');
        });
    }

    promise.success(function (data) {
        printData(data);
    });

    promise.fail(function (error) {
        $('.bg-danger').append('<br>error' + error.responseText);
    });
};

$('button').click(loadData);