/////////driver

function processData(data) {
  //console.log('got vehicle data: ', data);
	console.log(data);
  var wnd = data.window_driver;

  if (wnd !== undefined) {
	  if(wnd == 0){
		  //fully closed
		  var driver = document.getElementById('driverOK');
		  driver.innerHTML = "Closed";
		  
		  ///////
		    var driver = document.getElementById('driverNO');
		  driver.innerHTML = ""; 
		    
	  }
	  
	  
	  if(wnd == 6){
		  
		   //fully opened
		  var driver = document.getElementById('driverNO');
		  driver.innerHTML = "Opened !";
		  
		  
		  ////////
		  var driver = document.getElementById('driverOK');
		  driver.innerHTML = "";  
   
        document.getElementById('messageDriver').style.display = 'block'; 
		 

	  }
	  else{
		    document.getElementById('messageDriver').style.display = 'none'; 
		  

	  }
	  
  }
};


gm.info.watchVehicleData(processData, ['window_driver']);
gm.info.getVehicleData(processData, ['window_driver']);



