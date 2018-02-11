// JavaScript Document

// JavaScript Document


function signales(data) {
   console.log(data);
  var signal = data.turn_signal;
  if (signal !== undefined) {
	
	if(signal == 2) 
		{
			///launch message
			   document.getElementById('car').style.display = 'none';
			  document.getElementById('car-signal-right').style.display = 'block';
			 document.getElementById('car-signal-left').style.display = 'none';
			
			 document.getElementById('car-brake-lights').style.display = 'none';
			 document.getElementById('car-lights').style.display = 'none';
			
			
		
			  
		}
	  
	  if(signal == 0)
		  {
			   document.getElementById('car').style.display = 'block';
			  document.getElementById('car-signal-right').style.display = 'none';
			   document.getElementById('car-signal-left').style.display = 'none';
			  
			

		  }
	  
	  
	  if(signal == 1)
		  {
			  document.getElementById('car').style.display = 'none';
			  document.getElementById('car-signal-right').style.display = 'none';
			   document.getElementById('car-signal-left').style.display = 'block';
			  
			   document.getElementById('car-brake-lights').style.display = 'none';
			 document.getElementById('car-lights').style.display = 'none';
			  
			
		  }
	  
    
  }
};

gm.info.watchVehicleData(signales, ['turn_signal']);
gm.info.getVehicleData(signales, ['turn_signal']);// JavaScript Document// JavaScript Document