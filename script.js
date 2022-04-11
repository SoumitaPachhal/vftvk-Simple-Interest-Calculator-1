     function compute()
{
    p = document.getElementById("principal").value;
    t = document.getElementById("number").value;
    r = document.getElementById("rate").value;
 Interest=(p*t*r)/100;
    
 document.getElementById('result').innerHTML=interest;
}
