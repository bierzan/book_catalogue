

function showDetails() {
    var booksBtns = $('#book-list').find('.btn');
    var details = $('#details');

    booksBtns.on('click', function () {
        $(this).next().toggle();        
       
    });
};







