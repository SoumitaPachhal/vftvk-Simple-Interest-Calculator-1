     function compute()
{
   var p = parseInt(document.getElementById("principal").value);
    var t = parseInt(document.getElementById("years").value);
    var r = parseInt(document.getElementById("rate").value);
 var interest=(p*t*r)/100;
     var total=interest + p;
    
 document.getElementById("output1").innerHTML=p;
     document.getElementById("output2").innerHTML=r;
     document.getElementById("output3").innerHTML=interest;
     document.getElementById("output4").innerHTML=total;
}
