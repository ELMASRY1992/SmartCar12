

// JavaScript Document



/////////window_leftrear

function processData(data) {
  //console.log('got vehicle data: ', data);
	console.log(data);
 
	var pass = data.window_leftrear;
  if (pass !== undefined) {
	  
	  if(pass == 0)
		  {
			   ////////////////////////////passenger
		  var passenger = document.getElementById('LeftrearOK');
		  passenger.innerHTML = "Closed";
		  
		  ///////
		    var passenger = document.getElementById('LeftrearNO');
		  passenger.innerHTML = ""; 
		  
		  }
	 
	  
	if(pass== 6)
	  {
	     /////////////////////////////////passenger
			  
		   //fully opened
		  var passenger = document.getElementById('LeftrearNO');
		  passenger.innerHTML = "Opened !";
		  
		  
		  ////////
		  var passenger = document.getElementById('LeftrearOK');
		  passenger.innerHTML = "";  
   
        document.getElementById('messageLeftrear').style.display = 'block'; 
		  
		  }else{
		    document.getElementById('messageLeftrear').style.display = 'none'; 
		  
	  }
	  
   
  }
};


gm.info.watchVehicleData(processData, ['window_leftrear']);
gm.info.getVehicleData(processData, ['window_leftrear']);



/////////////////////////











