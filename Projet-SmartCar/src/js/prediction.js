// Your code goes here

//1. Récupération des données en temps réel

 console.log("Start");

let air = [],
	bougie = [],
	carburant = [],
	distribution = [],
	amortisseurs = [],
	pneus = [];
var signals = ['air', 'bougie', 'carburant', 'distribution', 'amortisseurs', 'pneus'];

var handle1 = gm.info.watchVehicleData(function(data){
	if(data.air != undefined){
		air.push(data.air);
		console.log(air);
	}
}, signals);

var handle2 = gm.info.watchVehicleData(function(data){
	if(data.bougie != undefined){
	bougie.push(data.bougie);
	console.log(bougie);	
	}
}, signals);

var handle3 = gm.info.watchVehicleData(function(data){
	if(data.carburant != undefined){
	carburant.push(data.carburant);
	console.log(carburant);
	}
}, signals);


var handle4 = gm.info.watchVehicleData(function(data){
	if(data.distribution != undefined){
	distribution.push(data.distribution);
	console.log(distribution);
	}
}, signals);


var handle5 = gm.info.watchVehicleData(function(data){
	if(data.amortisseurs != undefined){
	amortisseurs.push(data.amortisseurs);
	console.log(amortisseurs);
	}
}, signals);

var handle6 = gm.info.watchVehicleData(function(data){
	if(data.pneus != undefined){
	pneus.push(data.pneus);
	console.log(pneus);	
	}
}, signals);


setTimeout(function(){

	$.ajax({
		url: 'http://localhost:5000/api/pridect',
		type: "POST",
		data: JSON.stringify({a: air, b: bougie, c: carburant, d: distribution, e:amortisseurs , f: pneus}),
		contentType: "application/json; charset=utf-8"
		
	}).done(function( msg ){
		console.log(msg);

		//var predict = eval(msg);
		document.getElementById("res").innerHTML = "Prediction";
		
		//document.getElementById("mondiv").innerHTML = msg;
		msg = msg.replace("{","");
		msg = msg.replace("}","");
		
		var tableau=msg.split(",");
		for (i=0; i<tableau.length; i++){
			var div = document.createElement('div');
			//div.appendChild(document.createTextNode('Contenu généré par le DOM'));
			div.className = "predict";
			div.innerHTML = "la voiture est: "+tableau[i];
			//document.getElementById('test').innerHTML = msg;
			document.getElementById("mondiv").appendChild(div);
		}

	});
}, 100000);


  




