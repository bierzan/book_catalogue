$(document).ready(function () {
    loadBooks();


})

function loadBooks() {
    var bookList = $('#book-list');

    bookList.empty();
    $.ajax({
        url: "http://localhost:8282/books/",
        data: {},
        type: "GET",
        dataType: "json"
    }).done(function (result) {

        var books = result;
        var desc = $('<div class="container" id="details"></div>');
        desc.hide();

        var delBtn = $('<button class="btn btn-basic btn-xs">Usuń</button>');

        for (var i = 0; i < books.length; i++) {
            var bookRecord = $('<div class="container   btn-group-vertical"></div>');
            bookRecord.html('<button class="btn btn-default btn-lg">'+books[i].title+'</button>');
            bookRecord.attr('data-id', books[i].id);
            bookRecord.append(delBtn.clone());
            bookList.append(bookRecord);
            bookList.append(desc.clone().append('<p>Autor: ' + books[i].author + '</p><p>Wydawca: ' + books[i].publisher + '</p><p>Typ: ' + books[i].type + '</p><p>ISBN: ' + books[i].isbn + '</p>')
            );
        }
        showDetails();
    })

    $('div').addClass('container');

    
    

    
};