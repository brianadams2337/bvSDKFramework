// posts photo submission form
function postPhotoSubmissionForm (productID, callBack, options) {
	var settings = $.extend(true, {
		"Parameters":{
			"productid":productID
		}
	}, options);
	var apiCall = photoSubmissionAPICall(settings);
	callBack(apiCall);
}

function photoSubmissionAPICall (options) {

	var defaultSettings = $.extend(true, {
		"URL":{
			"baseurl":apiBaseSubmissionURL,
			"customername":apiDefaults["customerName"],
			"format":apiDefaults["format"] //Response format (xml or json)
		},
		"Parameters":{
			"apiversion":apiDefaults["apiVersion"], //The API version.
			"callback":null, //Callback function name (JsonP).
			"contenttype":null, //The content type for which this media is being submitted. Valid values include: review, question, answer, story, review_comment and story_comment.
			"locale":null, //Locale to display Labels, Configuration, Product Attributes and Category Attributes in. The default value is the locale defined in the display associated with the API key.
			"passkey":apiDefaults["passkey"], //API key is required to authenticate API user and check permission to access particular client's data.
			"photourl":null, //URL of the photo to be uploaded. Use either the photo or photoUrl parameter to define the photo to upload. An error is returned if both parameters are defined. HTTP and HTTPS are the only protocols supported for the photoUrl parameter.
			"user":bvUserDefaults["bvUAS"], //Value of the encrypted user. This parameter demonstrates that a user has been authenticated. Note that the UserId parameter does not contain authentication information and should not be used for hosted authentication. See the Authenticate User method for more information.
			//"userid":bvUserDefaults["userId"], //User's external ID
			"userid":null, //User's external ID
		}
	}, options);

	// set URL base for API call
	var url = "http://" + defaultSettings["URL"]["baseurl"] + "data/" + "uploadphoto." + defaultSettings["URL"]["format"];
	
	// set URL parameters for API call. params must be formatted to fit file upload plugin
	var params = [];
	$.each(defaultSettings["Parameters"], function(key, value) {
		var obj = {name: key, value: value};
		params.push(obj);
	});
	// create array with url and parameters
	var apiCall = {"url":url, "params":params};

	// return the API call
	return apiCall;

};