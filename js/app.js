$(document).ready(function(){

	console.log('test');
	$("#search").keyup(function(){
			let searchField=$("#search").val();
			
			let expression=new RegExp(searchField,'i');

	//request object
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      //create output html
      let output="<ul class='list-group input-list'>";

      //create jS object so that it can be displayed
    const response=JSON.parse(xhttp.responseText);
   
    for(let i=0;i<response.length;i++){
    	
    		
    		if((response[i].name.search(expression)!=-1)||(response[i].bio.search(expression)!=-1)){
      		output+="<li>";
      	output+="<h5 class='name'>"+response[i].name+"</h5>";
      	output+="<img class='img-thumbnail' src='images/"+response[i].shortname+"_tn.jpg'>";
      	output+="<p class='bio'>"+response[i].bio+"<p>";

      		output+="</li>";
      	}
      	}
      output+="</ul>";
     document.querySelector("#update").innerHTML=output;
    }
  
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();

})
});