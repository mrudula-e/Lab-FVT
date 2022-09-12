'use strict';

     
    
      
    var futureValue;
    
    // get user entries
    //var investment = prompt("Enter investment amount as xxxxx.xx", 10000);
    var investment = prompt("Enter investment amount as xxxxx.xx")
    investment = parseFloat(investment);
    //document.write("Investment amount = " + investment);
    document.write('<h2> <i><center>Investment amount<i> <span id = "result"></span>'+investment+' </center></h2>');

    //var rate = prompt("Enter interest rate as xx.x", 7.5);
    var rate = prompt("Enter interest rate as xx.x")
    rate = parseFloat(rate);
   // document.write(" Interest rate = " + rate);
   document.write('<h2> <i><center>Interest rate<i> <span id = "result"></span>'+rate+' </center></h2>');

    //var years = prompt("Enter number of years", 10);
    var years = prompt("Enter number of years")
    years = parseInt(years);
    //document.write(" Years = " + years);
    document.write('<h2> <i><center>Years<i> <span id = "result"></span>'+years+' </center></h2>');
    
    // calulate future value
    futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
      futureValue = futureValue + (futureValue * rate / 100);
      
    }
    futureValue = parseInt(futureValue);
    //document.write(" Future Value is " + futureValue + "<br><br>");
    document.write('<h2> <i><center> Future Value is<i> <span id = "result"></span>'+futureValue+' </center></h2>');
    
        