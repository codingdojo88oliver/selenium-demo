const Mysql                 = require('mysql');
const connection        	= require('../config/database.js');

class UserModel {

	/*
		DOCU: Use this method to perform MySQL queries. Just pass a valid SQL Query to this method.
	*/
	executeQuery(query) {
		return new Promise((resolve, reject) => {
			connection.query(query, function (err, result) {
				if(err) {
					reject(err);
				}else{
		        	resolve(result);
		        }
		    });
		});		
	}
}

module.exports = UserModel;