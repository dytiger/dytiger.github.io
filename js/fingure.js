var vm = new Vue({
    el: '#main',
    data: {
        started: false,
        speed: 0,
        types: 0,
        errorTimes: 0,
        begin: '',
        article: '',
        letterArray: [],
        spanArray: []
    },
    created: function () {
        this.loadArticle('fingure11.json');
    },
    methods: {
        loadArticle: loadArticle
    }
});