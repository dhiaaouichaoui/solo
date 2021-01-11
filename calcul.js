$(document).ready(function(){
	function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

 var time= new Date()
 var h= addZero(time.getHours())
 var m=addZero(time.getMinutes())
 var s= addZero(time.getSeconds())


 $(".clock").text(h+":"+m+":"+s)
 console.log("test")
 

 document.querySelector(".click").onclick=function(){
 	 location.href = "https://www.timeanddate.com/calendar/";
 }

})
function display(values){
	document.getElementById("result").value+=values
}
function cleardsiplay(){
	document.getElementById("result").value="";

}
function total(){
	var results=document.getElementById("result").value;
	var x =eval(results)
	document.getElementById("result").value = x;
}
