// gets review comment submission form
function getReviewCommentsSubmissionForm (reviewid, container, callBack, options) {
	var settings = $.extend(true, {
		"Parameters":{
			"reviewid":reviewid,
			"userid":null
		}
	}, options);
	var apiCall = reviewCommentsSubmissionAPICall(settings);
	var url = apiCall["url"];
	var params = $.param(apiCall["params"]);
	$.ajax({
		type: "GET",
		url: url,
		data: params,
		dataType: "jsonp",
		success: function(data) {
			console.log(data);
			callBack(data, settings);
			$(container).removeClass("_BVContentLoadingContainer");
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		},
		beforeSend: function() {
			$(container).addClass("_BVContentLoadingContainer");
		}
	});
}

// posts review comment submission form
function postReviewCommentsSubmissionForm (reviewid, container, callBack, options) {
	var settings = $.extend(true, {
		"Parameters":{
			"reviewid":reviewid,
			"userid":null
		}
	}, options);
	var apiCall = reviewCommentsSubmissionAPICall(settings);
	var url = apiCall["url"];
	var params = $.param(apiCall["params"]);
	console.log(params);
	$.ajax({
		type: "POST",
		url: defaultReviewCommentSubmissionFormProcessingFile,
		data: params,
		dataType: "json",
		success: function(data) {
			console.log(data);
			if(data["HasErrors"]) {
				var errorObject = data["FormErrors"]["FieldErrors"];
				$(defaultFormErrorsContainer).html('');
				$.each(errorObject, function(k, v) {
					$('*[name="' + k + '"]').parent().parent().addClass('BVErrorText');
					$('*[name="' + k + '"]').addClass('BVErrorBorder');
					$(defaultFormErrorsContainer).append(v["Message"] + '<br/>');
					$(defaultSubmissionFormContainer).show();
				});
			} else {
				callBack(data, settings);
			}
			$(container).removeClass("_BVContentLoadingContainer");
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		},
		beforeSend: function() {
			$(container).addClass("_BVContentLoadingContainer");
		}
	});
}

function reviewCommentsSubmissionAPICall (options) {

	var defaultSettings = $.extend(true, {
		"URL":{
			"baseurl":apiBaseSubmissionURL,
			"customername":apiDefaults["customerName"],
			"format":apiDefaults["format"] //Response format (xml or json)
		},
		"Parameters":{
			"apiversion":apiDefaults["apiVersion"], //The API version.
			"action":null, //The submission action to take -- either 'Preview' or 'Submit'. 'Preview' will show a draft of the content to be submitted; 'Submit' will submit the content. Note that if Action=Submit, the request must be an HTTP POST.
			"agreedtotermsandconditions":true, //Boolean indicating whether or not the user agreed to the terms and conditions. Required depending on the client's settings.
			"callback":null, //Callback function name (JsonP).
			"campaignId":null, //Arbitrary text that may be saved alongside content to indicate vehicle by which content was captured, e.g. “post-purchase email”.
			"commenttext":null, //Value is comment body text.
			"contextDataValue_<Dimension-External-Id>":null, //Some examples of this parameter include the following. Each is followed by possible values. ContextDataValue_PurchaserRank - "top", "top10", "top100", "top1000" ContextDataValue_Purchaser - "yes", "no" ContextDataValue_Age - "under21", "21to34", "35to44", "45to54", "55to64", "over65" ContextDataValue_Gender - "male", "female"
			"hostedauthentication_authenticationemail":null, //Email address where the submitter will receive the confirmation email. If you are configured to use hosted email authentication, this parameter is required. See the Authenticate User method for more information on hosted authentication.
			"hostedauthentication_callbackurl":null, //URL of the link contained in the user authentication email. This should point to a landing page where a web application exists to complete the user authentication process. The host for the URL must be one of the domains configured for the client. The link in the email will contain a user authentication token (authtoken) that is used to verify the submitter. If you are configured to use hosted email authentication, this parameter is required. See the Authenticate User method for more information on hosted authentication.
			"locale":null, //Locale to display Labels, Configuration, Product Attributes and Category Attributes in. The default value is the locale defined in the display associated with the API key.
			"passkey":apiDefaults["passkey"], //API key is required to authenticate API user and check permission to access particular client's data.
			"photocaption_<n>":null, //Value is caption text for the photo URL with the same value of <n>.
			"photourl_<n>":null, //Value is a Bazaarvoice URL of a photo uploaded using the Data API, where <n> is a non-negative integer.
			"productrecommendationid_<n>":null, //Value is non-negative integer representing the product external ID of the <n>'th product recommendation (for Social Recommendations)
			"reviewid":null, //The id of the review that this comment is being submitted on. One ReviewId or StoryId is required.
			"sendemailalertwhenpublished":null, //Boolean indicating whether or not the user wants to be notified when his/her content is published.
			"storyid":null, //The id of the story that this comment is being submitted on. One ReviewId or StoryId is required.
			"title":null, //Value is content title text.
			"user":bvUserDefaults["bvUAS"], //Value of the encrypted user. This parameter demonstrates that a user has been authenticated. Note that the UserId parameter does not contain authentication information and should not be used for hosted authentication. See the Authenticate User method for more information.
			"useremail":bvUserDefaults["userEmail"], //User's email address
			"userid":bvUserDefaults["userId"], //User's external ID
			"userlocation":bvUserDefaults["userLocation"], //User location text
			"usernickname":bvUserDefaults["userNickname"], //User nickname display text
			"videocaption_<n>":null, //Value is caption text for the video URL with the same value of <n>.
			"videourl_<n>":null //Value is valid YouTube or Bazaarvoice video-upload URL where <n> is a non-negative integer.
		}
	}, options);

	// set URL base for API call
	var url = "http://" + defaultSettings["URL"]["baseurl"] + "data/" + "submitreviewcomment." + defaultSettings["URL"]["format"];
	
	// set URL parameters for API call
	var params = returnAPIParameters(defaultSettings["Parameters"]);

	// create array with url and parameters
	var apiCall = {"url":url, "params":params};

	// return the API call
	return apiCall;

};