$(document).ready(function(){
$('h1.firstHeading').html('This Heading is from jQuery');

$('button#clickChange').click(function(){
    $('h2.thirdHeading').html("here is some new text from jQuery");

  });
            
});