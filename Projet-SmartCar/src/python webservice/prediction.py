
#Parti Modele

import numpy as np
import pandas as pd
from sklearn import linear_model





#Parti web service 
from flask import Flask
from flask.ext.cors import CORS, cross_origin
from flask import request

import sys, json
app = Flask(__name__)

@app.route("/api/pridect", methods=["POST"])
def hello():
	

	Train = pd.read_csv('auto.csv');
	print(Train.shape);
	modele_regression_logistique = linear_model. LogisticRegression ();
	
	X = Train.drop(['prédiction',], axis=1);
	Y = Train['prédiction'].values;
	modele_regression_logistique. fit (X, Y);
	
	
	data = request.get_json()
	a = data['a']
	b = data['b']
	c = data['c']
	d = data['d']
	e = data['e']
	f = data['f']
	
	predict = {};
	for i in range(0,len(a)):
		donnees = [[int(a[i]), int(b[i]), int(c[i]), int(d[i]), int(e[i]), int(f[i])]];
		probaClasses = modele_regression_logistique. predict(donnees);
		print("<======================>");
		print(probaClasses);
		predict.update({i: probaClasses.tolist()})

	
	print(predict);
 
	return (json.dumps(predict)) ;
	



if __name__ == '__main__':
    app.run(debug=True)