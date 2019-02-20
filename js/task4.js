$(document).ready(function () {
    var delBtns = $('#book-list').find('.btn-xs');

    delBtns.on('click', function () {


        var idToDel = Number($(this).parent().attr('data-id'));
        $.ajax({
            url: "http://localhost:8282/books/" + idToDel,
            data: {},
            type: "DELETE",
            dataType: "json"
        }).done(function () {
            alert('Usunięto książkę');
            loadBooks();
        });

    });
});









