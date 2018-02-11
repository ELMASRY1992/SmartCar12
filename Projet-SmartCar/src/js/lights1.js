

function showSpeed(data) {
   console.log(data);
  var signal = data.fog_light_ind;
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
			  document.getElementById('car-brake-lights').style.display = 'none';
			 document.getElementById('car-lights').style.display = 'block';
			  
			   document.getElementById('car-brake-fog').style.display = 'none';
		  }
	  
	  
	 
    
  }
};

gm.info.watchVehicleData(showSpeed, ['fog_light_ind']);
gm.info.getVehicleData(showSpeed, ['fog_light_ind']);// JavaScript Document// JavaScript Document