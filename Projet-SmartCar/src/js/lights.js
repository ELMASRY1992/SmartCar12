

function showSpeed(data) {
   console.log(data);
  var signal = data.brake_lights;
  if (signal !== undefined) {
	
	if(signal == 0) 
		{
			///launch message
			   document.getElementById('car').style.display = 'block';
			  document.getElementById('car-brake-lights').style.display = 'none';
			 document.getElementById('car-lights').style.display = 'none';
			
			 document.getElementById('car-brake-fog').style.display = 'none';
			  
		}
	  
	  if(signal == 1)
		  {
			   document.getElementById('car').style.display = 'none';
			  document.getElementById('car-brake-lights').style.display = 'block';
			 document.getElementById('car-lights').style.display = 'none';
		  }
	  
	  
	 
    
  }
};

gm.info.watchVehicleData(showSpeed, ['brake_lights']);
gm.info.getVehicleData(showSpeed, ['brake_lights']);// JavaScript Document// JavaScript Document