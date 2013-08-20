/***** DEFAULT REVIEW COMMENT SUBMISSION FORM FUNCTION *****/

function loadReviewCommentSubmissionWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSubmissionContainer,
		"viewContainer":defaultSubmissionWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productId = settings["productId"];
	var contentId = settings["contentId"];
	var returnURL = settings["returnURL"];
	// add submssion widget template
	$container.append($template);

	// load review submission form
	loadReviewCommentSubmissionForm (content, {
		"parentContainer":$template,
		"productId":productId,
		"contentId":contentId,
		"returnURL":returnURL
	});
}

function loadReviewCommentSubmissionForm (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSubmissionFormContainer,
		"viewContainer":defaultSubmissionFormReviewCommentContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"",
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	// get a new id for the submission container using product id - this will be needed for reference on child elements
	var productId = settings["productId"];
	var contentId = settings["contentId"];
	var returnURL = settings["returnURL"];
	var newID = "BVSubmissionContainerID_" + productId;
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add form template
	$container.append($template);
	// set form attributes (just fallbacks, not needed since we are using ajax submission)
	$($template).find("form").andSelf().filter("form").attr({
		"id":newID,
		"name":newID,
		"action":"",
		"method":"POST",
		"enctype":"application/x-www-form-urlencoded",
		"autocomplete":"on",
		"accept-charset":"UTF-8",
		"target":""
	});
	
	/***** headers *****/

	loadPageHeader ("Write Your Comment", {
		"parentContainer":$template,
		"targetContainer":defualtPageHeaderContainer
	});
	loadSectionHeader ("Your Comment", {
		"parentContainer":$template,
		"targetContainer":defaultFormSectionHeaderReviewCommentContainer
	});
	loadSectionHeader ("User Info", {
		"parentContainer":$template,
		"targetContainer":defaultFormSectionHeaderUserContainer
	});
	
	/***** inputs *****/

	// comment text
	loadReviewCommentTextInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"Comment Text",
		}
	});
	// nickname
	loadUserNicknameInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"User Nickname",
		}
	});

	// device fingerprint
	console.log("devicefingerprint");
	// product id
	console.log("productid");
	// submission id
	console.log("submissionid");
	// auth source type
	console.log("authsourcetype");
	// is ratings only
	console.log("isratingsonly");
	// net promoter score
	console.log("netpromoterscore");
	// net promoter comment
	console.log("netpromotercomment");
	// photo upload
	console.log("photoupload");
	// video upload
	console.log("videoupload");
	// product recommendations
	console.log("productrecommendations");
	// user location geocode
	console.log("userlocationgeocode");
	// hosted authentication
	console.log("hostedauthentication");

	// submit button
	loadSubmitButton ("Submit", {
		"parentContainer":$template
	});
	// submit button functionality
	$($template).find(defaultButtonSubmitContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonSubmitContainer + " " + defaultButtonContainer).click(function() {
		// get form parameters
		var params = returnFormParamaters("#" + newID, {
			"action":"submit"
		});
		// validate form using parsly.js plugin
		var validated = $("#" + newID).parsley('validate');
		// POST form to server if no errors
		if (validated) {
			$(defaultSubmissionFormContainer).hide();
			postReviewCommentsSubmissionForm(contentId, defaultSubmissionThankYouContainer, function (content) {
					console.log("submitted");
					loadReviewCommentSubmissionThankYouWidget (content, {
						"parentContainer":settings["parentContainer"],
						"productId":productId,
						"contentId":contentId,
						"returnURL":returnURL,
					});
				}, {
				"Parameters": params
			});
		}
	});

	// preview button
	loadPreviewButton ("Preview", {
		"parentContainer":$template
	});
	// preview button functionality
	$($template).find(defaultButtonPreviewContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonPreviewContainer + " " + defaultButtonContainer).click(function() {
		// get form parameters
		var params = returnFormParamaters("#" + newID, {
			"action":"preview",
		});
		// validate form using parsly.js plugin
		var validated = $("#" + newID).parsley('validate');
		// POST form to server if no errors
		if (validated) {
			$(defaultSubmissionFormContainer).hide();
			postReviewCommentsSubmissionForm(contentId, defaultSubmissionPreviewContainer, function (content) {
					console.log("preview");
					loadReviewCommentSubmissionPreviewWidget (content, {
						"parentContainer":settings["parentContainer"],
						"productId":productId,
						"contentId":contentId,
						"returnURL":returnURL,
					});
				}, {
				"Parameters": params
			});
		}
	});

	// cancel button
	loadCancelButton ("Cancel", {
		"parentContainer":$template
	});
	// cancel button functionality
	$($template).find(defaultButtonCancelContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonCancelContainer + " " + defaultButtonContainer).click(function() {
		// load return page
		returnToPage(returnURL);
	});
}

// review title
function loadReviewCommentTitleInput (content, options) {
	var content = content["Data"]["Fields"]["title"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewTitleInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"targetContainer":defaultFormInputWrapperContainer,
		"inputSettings":settings["inputSettings"]
	});
}

// review comment tet
function loadReviewCommentTextInput (content, options) {
	var content = content["Data"]["Fields"]["commenttext"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewTextInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":options["inputSettings"]["inputHelperText"], // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	console.log("test");
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextAreaInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}

