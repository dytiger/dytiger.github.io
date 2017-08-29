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
        var exKeys = [8,9,13,32,37,39,112,116,121];
        var exKeysButShow = [222,191];
        if(exKeys.indexOf(keyCode)!=-1){
            event.preventDefault();
        }
        if(exKeysButShow.indexOf(keyCode)!=-1){
            event.preventDefault();
            //$('#' + keyCode).addClass("kd");
        }
        // if (keyCode == 9 || keyCode == 32 || keyCode == 13 || keyCode == 116 || keyCode == 112 || keyCode == 8) {
        //     event.preventDefault();
        // }
        // if (event.altKey && keyCode == 37 || keyCode == 39) {
        //     event.preventDefault();
        // }
        // if (event.ctrlKey || (event.shiftKey) && (keyCode == 121)) {
        //     event.preventDefault();
        // }
        // if(keyCode==222){
        //     event.preventDefault();
        //     $('#222').addClass("kd");
        // }
        // if (keyCode == 191) {
        //     event.preventDefault();
        //     $('#191').addClass("kd");
        // }
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