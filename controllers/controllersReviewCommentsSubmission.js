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

	loadPageHeader ("", {
		"parentContainer":$template,
		"targetContainer":defualtPageHeaderContainer
	});
	loadSectionHeader ("My Comment", {
		"parentContainer":$template,
		"targetContainer":defaultFormSectionHeaderReviewCommentContainer
	});
	loadSectionHeader ("My Information", {
		"parentContainer":$template,
		"targetContainer":defaultFormSectionHeaderUserContainer
	});
	
	/***** inputs *****/

	// comment text
	loadReviewCommentTextInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"My Comment",
		}
	});
	// nickname
	if (content["Data"]["Fields"]["usernickname"]) {
		loadUserNicknameInput (content, {
			"parentContainer":$template,
			"inputSettings":{
				"inputLabel":"Choose a Nickname (no spaces)",
				"inputHelperText":"Do not use your full name or email address; your privacy is important to us.",
			}
		});
	}
	// email
	if (content["Data"]["Fields"]["useremail"]) {
		loadUserEmailInput (content, {
			"parentContainer":$template,
			"inputSettings":{
				"inputLabel":"User Email",
				"inputHelperText":"We will ONLY use your email to notify you when your review is posted or if a comment is added to your review after it is posted.",
			}
		});
	}
	// location
	if (content["Data"]["Fields"]["userlocation"]) {
		loadUserLocationInput (content, {
			"parentContainer":$template,
			"inputSettings":{
				"inputLabel":"User Location",
				"inputHelperText":"Example: New York, NY",
			}
		});
	}
>>>>>>> master

	// device fingerprint
	consoleLogFallback("devicefingerprint");
	// product id
	consoleLogFallback("productid");
	// submission id
	consoleLogFallback("submissionid");
	// auth source type
	consoleLogFallback("authsourcetype");
	// is ratings only
	consoleLogFallback("isratingsonly");
	// net promoter score
	consoleLogFallback("netpromoterscore");
	// net promoter comment
	consoleLogFallback("netpromotercomment");
	// product recommendations
	consoleLogFallback("productrecommendations");
	// user location geocode
	consoleLogFallback("userlocationgeocode");
	// hosted authentication
	consoleLogFallback("hostedauthentication");

	// opt in checkboxes
	if (content["Data"]["Fields"]["agreedtotermsandconditions"]) {
		loadTermsAndConditionsInput (content, {
			"parentContainer":$template,
			"inputSettings":{
				"inputRequired":true,
			}
		});
	}
	if (content["Data"]["Fields"]["sendemailalertwhenpublished"]) {
		loadSendEmailAlertWhenPublishedInput (content, {
			"parentContainer":$template
		});
	};

	// submit button
	loadSubmitButton ("Submit Your Comment", {
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
	loadPreviewButton ("Preview Your Comment", {
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
					// update content to have matching review node so the preview will match the display
					content = updateCommentPreviewNode(content);
					// comment preview
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
	
	// set inline form validation using parsley.js plugin
	$("#" + newID).parsley(defaultInlineValidationOption);	
	// add inline validation
	$(defaultFormInputContainer).change( function() {
		$(this).parsley('validate');
	});
	loadRequiredIndicators (content, {
		"parentContainer":$template
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
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextAreaInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}

