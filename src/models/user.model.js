const Mysql                 = require('mysql');
const executeQuery  		= require('./config/database.js');

class UserModel {

	/*
		DOCU: Use this method to perform MySQL queries. Just pass a valid SQL Query to this method.
	*/
	createUser(params) {
		let response_data 	    = {status: false, result: [], err: null};

		try{
			let insert_users_query  	= Mysql.format(``, [params]);
			let insert_users_result 	= await executeQuery(insert_users_query);

			if(insert_users_result){
				response_data.status 		= true;
			}else{
				response_data.err 	= "Something went wrong";
			}
		}catch(err){
			response_data.err 			= err;
		};

		return response_data;		
	}
}

module.exports = UserModel;