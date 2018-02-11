
function showSpeed(data) {
   console.log(data);
  var fuel = data.fuel_level;
  if (fuel !== undefined) {
	  
	if(fuel <= 20) 
		{
			 var fuelText = document.getElementById('fuelOK');
		  fuelText.innerHTML = "";
		  
		  ///////
		    var fuelText = document.getElementById('fuelGood');
		  fuelText.innerHTML = ""; 
			
		  ///////
			
			var fuelText = document.getElementById('fuelBad');
    		fuelText.innerHTML = fuel;
			
			  document.getElementById('message').style.display = 'block'; 
		}
	  else 
		  if(fuel>= 20 && fuel <= 60)
		  {
			  var fuelText = document.getElementById('fuelOK');
		  fuelText.innerHTML = "";
		  
		  ///////
		    var fuelText = document.getElementById('fuelGood');
		  fuelText.innerHTML = fuel; 
			
			///////
			
			var fuelText = document.getElementById('fuelBad');
    		fuelText.innerHTML = "";
			  
			  document.getElementById('message').style.display = 'none'; 
		  }
	  else if(fuel > 60)
		  {
			  var fuelText = document.getElementById('fuelOK');
		  fuelText.innerHTML = fuel;
		  
		  ///////
		    var fuelText = document.getElementById('fuelGood');
		  fuelText.innerHTML = ""; 
			
			///////
			
			var fuelText = document.getElementById('fuelBad');
    		fuelText.innerHTML = "";
			  
			  document.getElementById('message').style.display = 'none'; 
			  
		  }
	  
    
  }
};

gm.info.watchVehicleData(showSpeed, ['fuel_level']);
gm.info.getVehicleData(showSpeed, ['fuel_level']);// JavaScript Document