$(function ()  {

    $.ajax({
        url:'http://127.0.0.1:8000/book/',
        type:'GET',
        dataType:'json'
    })

    .done(function (tablica) {

        for (var i=0; i<tablica.length; i++) {  //iterowanie po tablicy zawierającej 100 książek

            var newel = $("<p> " + tablica[i].title + " </p>") // zmienna wstawiająca tytuł do osobnego paragrafu
            $("div#books").append(newel)    // dodanie zmiennej do drzewka DOM

            var content = $(tablica[i])     // zmienna odnosząca sie do zawartości danego wpisu w tabeli
            var contJson = JSON.stringify(content)  // zamiana zawartości na string

            var description = $("<div>  </div>")    // utworzenie pustego elementu div
            $("div#books").append(description)      // dodanie div do drzewka DOM

            $(newel).click(function() {             // podpięcie wydarzenia do każdej książki

               $(this).description.appendTo(contJson)   // próba wyświetlenia elementu div z zawartością

            })
        }

    })

    .fail(function(xhr,status,err) {
    })

});