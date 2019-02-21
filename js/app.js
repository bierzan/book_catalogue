
$(document).ready(function () {
    loadBooks();
    addDelQuery();
    addBookQuery();
    
})

function loadBooks() {

    ajaxQuery('GET');

};

function addDelQuery() {
    var delBtns = $('#book-list').find('.btn-xs');

    delBtns.on('click', function () {
        var idToDel = Number($(this).parent().attr('data-id'));

        ajaxQuery('DELETE', idToDel);

    });
}

function showDetails() {
    var booksBtns = $('#book-list').find('.btn-lg');

    booksBtns.on('click', function () {
        $(this).parent().next().toggle();

    });
};

function addBookQuery() {
    $('#addBtn').on('click', function (e) {
        e.preventDefault();

        var newId = Number($('#book-list').find('.btn-group-vertical').last().attr('data-id')) + 1;
        var newBook = {
            "id": newId,
            "isbn": $('#isbnId').val(),
            "title": $('#titleId').val(),
            "author": $('#authorId').val(),
            "publisher": $('#publisherId').val(),
            "type": $('#typeId').val(),
        };
        ajaxQuery('POST', undefined, JSON.stringify(newBook));

    });
}

function createBooks(result) {

    var bookList = $('#book-list');
    bookList.empty();

    var books = result;
    var desc = $('<div class="container" id="details"></div>');
    desc.hide();

    var delBtn = $('<button class="btn btn-basic btn-xs">Usuń</button>');

    for (var i = 0; i < books.length; i++) {
        var bookRecord = $('<div class="container   btn-group-vertical"></div>');
        bookRecord.html('<button class="btn btn-default btn-lg">' + books[i].title + '</button>');
        bookRecord.attr('data-id', books[i].id);
        bookRecord.append(delBtn.clone());
        bookList.append(bookRecord);
        bookList.append(desc.clone().append('<p>Autor: ' + books[i].author + '</p><p>Wydawca: ' + books[i].publisher + '</p><p>Typ: ' + books[i].type + '</p><p>ISBN: ' + books[i].isbn + '</p>')
        );
    }
    showDetails();
    addDelQuery();
    $('div').addClass('container');

}