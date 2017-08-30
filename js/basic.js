var exKeys = [8, 9, 13, 18, 32, 37, 39, 112, 114, 116, 121, 122, 222, 191];
$(function () {
    $('[name="hand"]').add('[name="fingure"]').on('change', function () {
        var handValue = $('[name="hand"]:checked').val();
        var fingureValue = $('[name="fingure"]:checked').val();
        if (handValue && fingureValue) {
            var classValue = '.' + handValue + fingureValue;
            $('.key').removeClass('highlight-key');
            $(classValue).addClass('highlight-key');
        }
    });

    $('#reset').on('click', function () {
        $('[name="hand"]:checked').prop('checked', false);
        $('[name="fingure"]:checked').prop('checked', false);
        $('.key').removeClass('highlight-key');
    });
});

var getLocation = function(){

}

var keysDown = function (event) {
    var keyCode = event.keyCode;
    if (exKeys.indexOf(keyCode) != -1) {
        event.preventDefault();
    }
    var k = '#k' + keyCode;

    if (event.shiftKey || event.ctrlKey || event.altKey) {
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
            k = k + 'l';
        }
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            k = k + 'r';
        }
    }
    $(k).addClass("kd");
};

var keysUp = function (event) {
    var keyCode = event.keyCode;
    var k = '#k' + keyCode;
    if (exKeys.indexOf(keyCode) != -1) {
        event.preventDefault();
    }

    if (k == '#k16' || k == '#k17' || k == '#k18') {
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
            k = k + 'l';
        }
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            k = k + 'r';
        }
    }
    $(k).removeClass("kd");
}

document.addEventListener('keydown', keysDown);
document.addEventListener('keyup', keysUp);