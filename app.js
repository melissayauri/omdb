$(document).ready(function() {

  $('#searchForm').on('submit',function(event){
    var searchText = $('#searchText').val();
    apiCall(searchText);
    event.preventDefault();
  });
/*
var array=['alien', 'batman', 'lego','mascara'];
var movie = Math.floor((Math.random() * array.length-1) + 1);
console.log(movie);

var randomMovie = array[movie];
console.log(randomMovie)
*/

function apiCall(searchText){

  $.getJSON('http://www.omdbapi.com/?apikey=5b733b4a&t=' + searchText).then(function(response){
    /*obteniendo el objeto*/
    console.log(response)

/*
    var typeMovie = response.Genre;
    var array = typeMovie.split('');
    console.log(typeMovie)*/
  /*  $('.genere').append(typeMovie);*/
    var image = response.Poster;

    if(image !=="N/A"){
      $('#imagen').attr('src', image);
    }
    else{$('#imagen').attr('src', 'http://losprincipios.org/images/default.jpg');
    }

  })

}

  apiCall();
})
