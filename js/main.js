//Jquery
$(document).ready(function () {
    //get all p elements and assign to var "paragraphs"
    var paragraphs = $('p');
    //pass object (containing 3 name/value pairs) to css jQuery altering paragraph stylesheet
    $(paragraphs).css({
        'color': 'blue',
        'font-style': 'italic',
        'background-color': 'whitesmoke'
    });
});
