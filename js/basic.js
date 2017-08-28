$(function () {
    $('[name="hand"]').add('[name="fingure"]').on('change', function () {
        var handValue = $('[name="hand"]:checked').val();
        var fingureValue = $('[name="fingure"]:checked').val();
        if (handValue && fingureValue) {
            var classValue = '.' + handValue + fingureValue;
            $('.key').removeClass('current-key');
            $(classValue).addClass('current-key');
        }
    });

    $('html').on('keydown', function (event) {
        var keyCode = event.keyCode;
        if (keyCode == 9 || keyCode == 32 || keyCode == 13) {
            event.preventDefault();
        }
        var k = '#k' + keyCode;
        $(k).addClass("kd");
    });
    $('html').on('keyup', function (event) {
        var k = '#k' + event.keyCode;
        $(k).removeClass("kd");
    });

    $('#reset').on('click', function () {
        $('[name="hand"]:checked').prop('checked', false);
        $('[name="fingure"]:checked').prop('checked', false);
        $('.key').removeClass('current-key');
    });
});