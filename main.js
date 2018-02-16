var changeObj = {
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
};

//Slides all up on page load
$('#dollars-div').slideUp();
$('#quarters-div').slideUp();
$('#dimes-div').slideUp();
$('#nickels-div').slideUp();
$('#pennies-div').slideUp();

function dollarSlide(){
    $('#dollars-div').slideUp();
    if(changeObj.dollars >= 1){
        $('#dollars-div').slideDown();
    }
}
function quarterSlide(){
    $('#quarters-div').slideUp();
    if(changeObj.quarters >= 1){
        $('#quarters-div').slideDown();
    }
}
function dimeSlide(){
    $('#dimes-div').slideUp();
    if(changeObj.dimes >= 1){
        $('#dimes-div').slideDown();
    }
}
function nickelSlide(){
    $('#nickels-div').slideUp();
    if(changeObj.nickels >= 1){
        $('#nickels-div').slideDown();
    }
}
function pennySlide(){
    $('#pennies-div').slideUp();
    if(changeObj.pennies >= 1){
        $('#pennies-div').slideDown();
    }
}

//Prints property values from object
function printObj(obj){
    document.getElementById('dollars-output').innerHTML = changeObj.dollars;
    document.getElementById('quarters-output').innerHTML = changeObj.quarters;
    document.getElementById('dimes-output').innerHTML = changeObj.dimes;
    document.getElementById('nickels-output').innerHTML = changeObj.nickels;
    document.getElementById('pennies-output').innerHTML = changeObj.pennies;
}
function calculateChange(){
    var due = $('#amount-due').val();
    var received = $('#amount-received').val();
    var totalChange = received - due;
    changeObj.dollars = Math.floor(totalChange);
    totalChange -= changeObj.dollars;
//At this point dollars have been removed from total change
    changeObj.quarters = Math.floor(totalChange / .25 - (totalChange % .25));
    totalChange = totalChange % .25;
    changeObj.dimes = Math.floor(totalChange / .1 - (totalChange % .1));
    totalChange = totalChange % .1;
    changeObj.nickels = Math.floor(totalChange / .05 - (totalChange % .05));
    totalChange = totalChange % .05;
    changeObj.pennies = Math.round(totalChange / .01 - (totalChange % .01));
    dollarSlide();
    quarterSlide();
    dimeSlide();
    nickelSlide();
    pennySlide();
    printObj();
}

document.getElementById('calculate-change').addEventListener('click',calculateChange)