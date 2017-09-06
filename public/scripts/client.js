console.log( 'js' );
$(document).ready(onReady);

function onReady() {
    $('#requestButton').on('click', doSomething)
}

function doSomething(){
    console.log('This button has been clicked and that is all');
    $.ajax({
        method: 'GET',
        url: '/getRoute',
        success: function(response) {
            console.log('Ajax requested information from server! WOo hoo!');
            console.log(response);
        }
        })
    }

