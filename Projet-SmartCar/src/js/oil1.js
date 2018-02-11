// JavaScript Document


function showSpeed(data) {
   console.log(data);
  var oil = data.engine_oil_temp;
  if (oil !== undefined) {
	  
	if(oil <= 0) 
		{
			 var oilText = document.getElementById('oiltempOK');
		  oilText.innerHTML = "";
		  
		  ///////
		    var oilText = document.getElementById('oiltempGood');
		  oilText.innerHTML = ""; 
			
		  ///////
			
			var oilText = document.getElementById('oiltempBad');
    		oilText.innerHTML = oil;
			
			
			///launch message
			  document.getElementById('messageOilTemp').style.display = 'block';
			  document.getElementById('messageOilTemp1').style.display = 'none';
		}
	  else 
		  if(oil>= 0 && oil <= 150)
		  {
			  var oilText = document.getElementById('oiltempOK');
		  oilText.innerHTML = "";
		  
		  ///////
		    var oilText = document.getElementById('oiltempGood');
		  oilText.innerHTML = oil; 
			
			///////
			
			var oilText = document.getElementById('oiltempBad');
    		oilText.innerHTML = "";
			  
			  
			  	///launch message
			  document.getElementById('messageOilTemp').style.display = 'none'; 
			   document.getElementById('messageOilTemp1').style.display = 'none'; 
		  }
	  else if(oil > 150)
		  {
			  var oilText = document.getElementById('oiltempOK');
		  oilText.innerHTML = "";
		  
		  ///////
		    var oilText = document.getElementById('oiltempGood');
		  oilText.innerHTML = ""; 
			
			///////
			
			var oilText = document.getElementById('oiltempBad');
    		oilText.innerHTML = oil;
			  
			  
			  	///launch message
			  document.getElementById('messageOilTemp').style.display = 'none'; 
			   document.getElementById('messageOilTemp1').style.display = 'block'; 
			  
		  }
	  
    
  }
};

gm.info.watchVehicleData(showSpeed, ['engine_oil_temp']);
gm.info.getVehicleData(showSpeed, ['engine_oil_temp']);// JavaScript Document// JavaScript Document