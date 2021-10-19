var currentDay = moment();
$("#currentDay").text(currentDay.format(" [Today is ] dddd, MMM Do YYYY"));

function changeColor() {
    console.log("Entered Change Color");
    $('.timeHolder').each(function(index,item){ 
        console.log("item = " + item);
        var currentHour = moment().format('HH');
        var currentInt = parseInt(currentHour); 
        var blockValue = parseInt($(item).data('index'));
        console.log("current = " + currentInt + ",block = " + blockValue);


        if(blockValue === currentInt){
            console.log("if");
            $('.timeHolder').addClass("present");
        } else if (blockValue < currentInt) {
            console.log("else if");
          $('.timeHolder').addClass("past");
          console.log("item = " + $(item));
        } else {
            console.log("else");
          $('.timeHolder').addClass("future");
        }
    });
};

changeColor();

var runagain = setInterval(changeColor, 10000);

$(document).ready(function(){
    $('.row').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        $(this).val(value);
    }); 
});

$('.saveBtn').on('click', function(){
    $('.row').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });   
  });

  $('.clearBtn').on('click', function(){
    $('.row').each(function(){
        $('.row').val('');    
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });   
  });