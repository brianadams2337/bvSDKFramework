/***** DEFAULT REVIEW COMMENT SUBMISSION FORM FUNCTION *****/

function loadReviewCommentSubmissionWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"body",
		"targetContainer":defaultSubmissionContainer,
		"viewContainer":defaultSubmissionWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	console.log(content);
	$.ajax({
		url: settings["viewContainer"],
		type: 'get',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add submission container
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container));

			// load review submission form
			loadReviewCommentSubmissionForm (content, {
				"parentContainer":$container,
				"productId":settings["productId"],
				"contentId":settings["contentId"],
				"returnURL":settings["returnURL"]
			});
			
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadReviewCommentSubmissionForm (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionContainer,
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
	console.log(content);
	// get a new id for the submission container using product id - this will be needed for reference on child elements
	var newID = "BVSubmissionContainerID_" + settings["productId"];
	$.ajax({
		url: settings["viewContainer"],
		type: 'get',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add submission container
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).attr("id", newID));
			// set form attributes (just fallbacks, not needed since we are using ajax submission)
			$container.find("form").andSelf().filter("form").attr({
				"id":newID,
				"name":newID,
				//"action":"formprocess.php?productId=" + settings["productId"],
				"method":"POST",
				"enctype":"application/x-www-form-urlencoded",
				"autocomplete":"on",
				"accept-charset":"UTF-8",
				"target":""
			});
			
			/***** headers *****/

			loadPageHeader ("Write Your Comment", {
				"parentContainer":$container,
				"targetContainer":defualtPageHeaderContainer
			});
			loadSectionHeader ("Your Comment", {
				"parentContainer":$container,
				"targetContainer":defaultFormSectionHeaderReviewCommentContainer
			});
			loadSectionHeader ("User Info", {
				"parentContainer":$container,
				"targetContainer":defaultFormSectionHeaderUserContainer
			});
			
			/***** inputs *****/

			// comment text
			loadReviewCommentTextInput (content, {
				"parentContainer":$container,
				"inputSettings":{
					"inputLabel":"Comment Text",
				}
			});
			// nickname
			loadUserNicknameInput (content, {
				"parentContainer":$container,
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
				"parentContainer":$container
			});
			// submit button functionality
			$container.find(defaultButtonSubmitContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonSubmitContainer + " " + defaultButtonContainer).click(function() {
				// get form parameters
				var params = returnFormParamaters("#" + newID, {
					"action":"submit"
				});
				// POST form to server
				$(defaultSubmissionFormContainer).hide();
				loadingContainerAnimation(defaultSubmissionThankYouContainer, function() {
					postReviewCommentsSubmissionForm(settings["contentId"], function (content) {
							console.log("submitted");
							loadReviewCommentSubmissionThankYouWidget (content, {
								"productId":settings["productId"],
								"contentId":settings["contentId"],
								"returnURL":settings["returnURL"],
							});
						}, {
						"Parameters": params
					});
				});
			});

			// preview button
			loadPreviewButton ("Preview", {
				"parentContainer":$container
			});
			// preview button functionality
			$container.find(defaultButtonPreviewContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonPreviewContainer + " " + defaultButtonContainer).click(function() {
				// get form parameters
				var params = returnFormParamaters("#" + newID, {
					"action":"preview",
				});
				// POST form to server
				$(defaultSubmissionFormContainer).hide();
				loadingContainerAnimation(defaultSubmissionPreviewContainer, function() {
					postReviewCommentsSubmissionForm(settings["contentId"], function (content) {
							console.log("preview");
							loadReviewCommentSubmissionPreviewWidget (content, {
								"productId":settings["productId"],
								"contentId":settings["contentId"],
								"returnURL":settings["returnURL"],
							});
						}, {
						"Parameters": params
					});
				});
			});

			// cancel button
			loadCancelButton ("Cancel", {
				"parentContainer":$container
			});
			// cancel button functionality
			$container.find(defaultButtonCancelContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonCancelContainer + " " + defaultButtonContainer).click(function() {
				// load return page
				returnToPage(settings["returnURL"]);
			});

		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// review title
function loadReviewCommentTitleInput (content, options) {
	var content = content["Data"]["Fields"]["title"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
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
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"targetContainer":defaultFormInputWrapperContainer,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// review comment tet
function loadReviewCommentTextInput (content, options) {
	var content = content["Data"]["Fields"]["commenttext"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
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
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextAreaInput (content, {
				"parentContainer":$container,
				"inputSettings":settings["inputSettings"]
			});

		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

