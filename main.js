namearray = [];
function submit (){    
var name1 = document.getElementById("name1").value;
var name2 = document.getElementById("name2").value;
var name3 = document.getElementById("name3").value;
var name4 = document.getElementById("name4").value;
namearray.push(name1);
namearray.push(name2);
namearray.push(name3);
namearray.push(name4);
document.getElementById("display").innerHTML = namearray;
document.getElementById ("btnsubmit").style.display="none";
document.getElementById ("btnsort").style.display="inline-block";

}
function sorting (){
namearray.sort ();
document.getElementById ("display").innerHTML = namearray;





}