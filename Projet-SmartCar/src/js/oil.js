// JavaScript Document


function showSpeed(data) {
   console.log(data);
  var oil = data.engine_oil_pressure;
  if (oil !== undefined) {
	  
	if(oil <= 0) 
		{
			 var oilText = document.getElementById('oilpressureOK');
		  oilText.innerHTML = "";
		  
		  ///////
		    var oilText = document.getElementById('oilpressureGood');
		  oilText.innerHTML = ""; 
			
		  ///////
			
			var oilText = document.getElementById('oilpressureBad');
    		oilText.innerHTML = oil;
			
			
			///launch message
			  document.getElementById('messageOilPressure').style.display = 'block';
			  document.getElementById('messageOilPressure1').style.display = 'none';
		}
	  else 
		  if(oil>= 0 && oil <= 150)
		  {
			  var oilText = document.getElementById('oilpressureOK');
		  oilText.innerHTML = "";
		  
		  ///////
		    var oilText = document.getElementById('oilpressureGood');
		  oilText.innerHTML = oil; 
			
			///////
			
			var oilText = document.getElementById('oilpressureBad');
    		oilText.innerHTML = "";
			  
			  
			  	///launch message
			  document.getElementById('messageOilPressure').style.display = 'none'; 
			   document.getElementById('messageOilPressure1').style.display = 'none'; 
		  }
	  else if(oil > 150)
		  {
			  var oilText = document.getElementById('oilpressureOK');
		  oilText.innerHTML = "";
		  
		  ///////
		    var oilText = document.getElementById('oilpressureGood');
		  oilText.innerHTML = ""; 
			
			///////
			
			var oilText = document.getElementById('oilpressureBad');
    		oilText.innerHTML = oil;
			  
			  
			  	///launch message
			  document.getElementById('messageOilPressure1').style.display = 'block'; 
			   document.getElementById('messageOilPressure').style.display = 'none'; 
			  
		  }
	  
    
  }
};

gm.info.watchVehicleData(showSpeed, ['engine_oil_pressure']);
gm.info.getVehicleData(showSpeed, ['engine_oil_pressure']);// JavaScript Document