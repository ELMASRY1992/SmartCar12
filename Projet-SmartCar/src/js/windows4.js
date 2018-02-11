

// JavaScript Document



/////////driver

function processData(data) {
  //console.log('got vehicle data: ', data);
	console.log(data);
 
	var pass = data.window_rightrear;
  if (pass !== undefined) {
	  
	  if(pass == 0)
		  {
			   ////////////////////////////passenger
		  var passenger = document.getElementById('RightrearOK');
		  passenger.innerHTML = "Closed";
		  
		  ///////
		    var passenger = document.getElementById('RightrearNO');
		  passenger.innerHTML = ""; 
		  
		  }
	 
	  
	if(pass== 6)
	  {
	     /////////////////////////////////passenger
			  
		   //fully opened
		  var passenger = document.getElementById('RightrearNO');
		  passenger.innerHTML = "Opened !";
		  
		  
		  ////////
		  var passenger = document.getElementById('RightrearOK');
		  passenger.innerHTML = "";  
   
        document.getElementById('messageRightrear').style.display = 'block'; 
		  
		  }else{
		    document.getElementById('messageRightrear').style.display = 'none'; 
		  
	  }
	  
   
  }
};


gm.info.watchVehicleData(processData, ['window_rightrear']);
gm.info.getVehicleData(processData, ['window_rightrear']);



/////////////////////////











