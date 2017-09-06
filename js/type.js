var exKeyCode = [8, 9, 12, 13, 16, 17, 18, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123]
var typeLetter = function (event) {
    if (!vm.started) {
        vm.started = true;
        vm.begin = new Date().getTime();
    }
    var currSpan = $('.cursor.blink');
    var nextSpan = currSpan.next('span').first();
    var source = currSpan.html();
    var type = event.key;
    if (event.keyCode == 32) {
        type = '&nbsp;';
    }
    if (event.keyCode == 190 && event.shiftKey) {
        type = '&gt;';
    }
    if (event.keyCode == 188 && event.shiftKey) {
        type = '&lt;';
    }

    if (source == type) {
        currSpan.removeClass('cursor').removeClass('blink').removeClass('init').removeClass('error').addClass('correct');
        nextSpan.addClass('cursor').addClass('blink');
        ++vm.types;
        var useTime = new Date().getTime() - vm.begin;
        if (vm.types > 3)
            vm.speed = Math.ceil((vm.types * 60) / (useTime / 1000));
    } else {
        if (exKeyCode.indexOf(event.keyCode) == -1) {
            ++vm.errorTimes;
        }
    }
    if (vm.types == vm.spanArray.length) {
        $('#input-div>span').last().removeClass('cursor').removeClass('blink');
        $('#input-div>span').removeClass('correct').addClass('init');
        $('#input-div>span').first().addClass('cursor').addClass('blink');
        vm.types = 0;
        vm.begin = new Date().getTime();
    }
};

var loadArticle = function (name) {
    this.article = '';
    axios({
        url: 'article/' + name
    }).then((res) => {
        this.started = false;
        this.speed = 0;
        this.types = 0;
        this.errorTimes = 0;
        this.letterArray = res.data.article.split('');
        this.spanArray = $.map(this.letterArray, function (value) {
            if (value == ' ') {
                return '<span class="init">&nbsp;</span>';
            } else {
                return '<span class="init">' + value + '</span>';
            }
        });
        this.spanArray[0] = this.spanArray[0].replace('init', 'init cursor blink');
        this.article = this.spanArray.join('');
    });
}

document.addEventListener('keydown', typeLetter);