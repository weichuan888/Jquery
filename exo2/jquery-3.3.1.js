$(document).ready(function(e){
    $("h1").text('marsuuuupilami est de retour!')
    $('li').text(
        function(index){
            return 'choix =====>' + (index + 1)
        }
    );
});

$(document).ready(function(e){
    $('p').hide('fast')
    $('h2').on('click', function(e){
        $('p').slideToggle('slow')
    })
});