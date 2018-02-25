$(function ()  {

    $.ajax({
        url:'http://127.0.0.1:8000/book/',
        type:'GET',
        dataType:'json'
    })

    .done(function (tablica) {

        for (var i=0; i<tablica.length; i++) {

            var newel = $("<p> " + tablica[i].title + " </p>")
            $("div#books").append(newel)

            var content = $(tablica[i])
            var contJson = JSON.stringify(content)

            var description = $("<div>  </div>")
            $("div#books").append(description)

            $(newel).click(function() {

               $(this).description.appendTo(contJson)

            })
        }

    })

    .fail(function(xhr,status,err) {
    })

});