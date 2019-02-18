$(document).ready(function () {
    var bookList = $('#book-list');
    

    $.ajax({
        url: "http://localhost:8282/books/",
        data: {},
        type: "GET",
        dataType: "json"
    }).done(function (result) {

        var books = result;
        var desc = $('<div id="details" "centered text-center"></div>');
        desc.hide();

        for (var i = 0; i < books.length; i++) {
            var bookRecord = $('<div class="btn btn-lg btn-block"></div>');
            bookRecord.text(books[i].title);
            bookRecord.attr('data-id',books[i].id);
            bookList.append(bookRecord);
            bookList.append(desc.clone().append('<p>Autor: '+ books[i].author + '</p><p>Wydawca: '+ books[i].publisher + '</p><p>Typ: '+ books[i].type + '</p><p>ISBN: '+ books[i].isbn + '</p>')
            );
        }
        
        showDetails();
    })


    
    $('div').addClass('container');

})