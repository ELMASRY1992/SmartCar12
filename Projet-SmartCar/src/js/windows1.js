// JavaScript Document



/////////driver

function processData(data) {
  //console.log('got vehicle data: ', data);
	console.log(data);
 
	var pass = data.window_passenger;
  if (pass !== undefined) {
	  
	  if(pass == 0)
		  {
			   ////////////////////////////passenger
		  var passenger = document.getElementById('passengerOK');
		  passenger.innerHTML = "Closed";
		  
		  ///////
		    var passenger = document.getElementById('passengerNO');
		  passenger.innerHTML = ""; 
		  
		  }
	 
	  
	if(pass== 6)
	  {
	     /////////////////////////////////passenger
			  
		   //fully opened
		  var passenger = document.getElementById('passengerNO');
		  passenger.innerHTML = "Opened !";
		  
		  
		  ////////
		  var passenger = document.getElementById('passengerOK');
		  passenger.innerHTML = "";  
   
        document.getElementById('messagePassenger').style.display = 'block'; 
		  
		  }else{
		    document.getElementById('messagePassenger').style.display = 'none'; 
		  
	  }
	  
   
  }
};


gm.info.watchVehicleData(processData, ['window_passenger']);
gm.info.getVehicleData(processData, ['window_passenger']);



/////////////////////////











