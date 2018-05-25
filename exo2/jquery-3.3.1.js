// $(document).ready(function(e){
//     $("h1").text('marsuuuupilami est de retour!')
//     $('li').text(
//         function(index){
//             return 'choix =====>' + (index + 1)
//         }
//     );
// });

// $(document).ready(function(e){
//     $('p').hide('fast')
//     $('h2').on('click', function(e){
//         $('p').slideToggle('slow')
//     })
// });

// $(document).ready(function(e){
//     $('.test').hover(
//         function(){
//             $(this).append('<p> Cliquer pour ajouter une navette </p>');  
//         },
//         function() {
//             $(this).find()
//         }
//     )    
// })
$(document).ready(function(e){
    $('.test').hover(
        function(){
            $(this).append("<p> Cliquer pour ajouter une nouvelle navette </p>");
        },
        function(){
            $(this).find('p').remove();
        });    
});

