const clouddb = require('@agconnect/database-server/dist/index.js');
const CloudDBZoneWrapper = require("./model/CloudDBZoneWrapper.js");
const UserMessage = require("./model/messages.js");
const FullMessage = require("./model/full_message.js");
const User = require('./model/users.js');

let myHandler = async function(event, context, callback, logger) {
	let userData = null;
	let record = event.records[0].after;

	if (!record.color) {
		userData = new User.users();
        userData.setId(record.id);
        userData.setNickname(record.nickname);
        userData.setEmail(record.email);
        userData.setPicture_url(record.picture_url);
        userData.setProvider_id(record.provider_id);
	}
		
	if (userData) {
	logger.info("initializing cloudDBZoneWrapper");
	
	const cloudDBZoneWrapper = new CloudDBZoneWrapper(logger);

	try {
		// get users colors
		var colors = await cloudDBZoneWrapper.getAllUsersColors();
	    logger.info("Number of colors found: " + colors.length);
		var randColor = cloudDBZoneWrapper.getRandomColor(colors);
	    logger.info("The chosen color is: " + randColor);
		userData.setColor(randColor);
	} catch (error) {
		logger.error("Error: "+ error)
	}
	
	if (userData.color) {
		try {
			// upsert one user
			await cloudDBZoneWrapper.addUser(userData);
		} catch (error) {
			logger.error("Error: "+ error)
		}
	}
	
	} else {
		logger.info("Color already set");
	}

	let result = {"message":"Success"};
	let res = new context.HTTPResponse(result, {
        "res-type": "simple example",
        "faas-content-type": "json"
    }, "application/json", "200"); 

	callback(res);	
}

module.exports.myHandler = myHandler;
