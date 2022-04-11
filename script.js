     function compute()
{
   var p = parseInt(document.getElementById("principal").value);
    var t = parseInt(document.getElementById("years").value);
    var r = parseInt(document.getElementById("rate").value);
 var interest=(p*t*r)/100;
     var total=interest + principal;
    
 document.getElementById('principal').innerHTML=p;
     document.getElementById('rate').innerHTML=r;
     document.getElementById('result').innerHTML=interest;
     document.getElementById('result').innerHTML=total;
}
