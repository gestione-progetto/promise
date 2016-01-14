var loadData = function () {

    var promise = $.getJSON('php/json-source.php');

    var printData = function (data) {
        $.each(data, function () {
            $('.table').append('<tr><td>' + this.language + '</td><td>' + this.developer + '</td></tr>');
        });
    };

    var $btn = $(this);

    $btn.button('loading');
    promise.success(function (data) {
        printData(data);
    });

    promise.fail(function (error) {
        $('.bg-danger').append('<br>error' + error.responseText);
    });

    promise.done(function () {
        $btn.button('reset');
    });
};

$('button').click(loadData);