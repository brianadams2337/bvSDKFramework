/* DEFAULT REVIEW SUBMISSION FORM FUNCTION */

function loadReviewSubmissionWidget (content, options) {
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
	var returnURL = settings["returnURL"];
	// add submission widget template
	$container.append($template);
	// load review submission form
	loadReviewSubmissionForm (content, {
		"parentContainer":$template,
		"productId":productId,
		"returnURL":returnURL,
	});
	// laod event listeners
	loadEventListeners("Listener", {
		"textFieldCounter": {
			"textField": ".BVFormInputTextarea",
		}
	});
}

function loadReviewSubmissionForm (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSubmissionFormContainer,
		"viewContainer":defaultSubmissionFormContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	// set variables
	var newID = "BVSubmissionContainerID_" + settings["productId"];
	var productId = settings["productId"];
	var returnURL = settings["returnURL"];
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
	loadSectionHeader ("My Product Rating", {
		"parentContainer":$template,
		"targetContainer":defaultFormSectionHeaderRatingsContainer
	});
	loadSectionHeader ("My Review", {
		"parentContainer":$template,
		"targetContainer":defaultFormSectionHeaderReviewContainer
	});
	loadSectionHeader ("Share Relevant Photos and Video", {
		"parentContainer":$template,
		"targetContainer":defaultFormSectionHeaderMediaContainer
	});
	loadSectionHeader ("My Information", {
		"parentContainer":$template,
		"targetContainer":defaultFormSectionHeaderUserContainer
	});
	
	/***** product info *****/

	getSpecificProduct (productId, function(data) {
		loadProductInfoWidget (data, {
			"parentContainer":$template
		});					
	}, {

	});

	/***** inputs *****/

	// overall rating
	loadOverallRatingInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"Overall Rating"
		}
	});
	// is recommended
	loadIsRecommendedInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"I would recommend this to a friend"
		}
	});
	// review title
	loadReviewTitleInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"Review Summary"
		}
	});
	// review text
	loadReviewTextInput (content, {
		"parentContainer":$template,
		"viewContainer":defaultInputTextAreaWithCharacterCounterContainerView,
		"inputSettings":{
			"inputLabel":"My Review",
		}
	});
	// nickname
	if (content["Data"]["Fields"]["usernickname"]) {
		loadUserNicknameInput (content, {
			"parentContainer":$template,
			"inputSettings":{
				"inputLabel":"Choose a Nickname (no spaces)",
			}
		});
	}
	// email
	if (content["Data"]["Fields"]["useremail"]) {
		loadUserEmailInput (content, {
			"parentContainer":$template,
			"inputSettings":{
				"inputLabel":"My Email",
			}
		});
	}
	/*
	// user id
	loadUserIDInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"User Id",
			"inputName":"userid"
		}
	});
	*/

	// location
	loadUserLocationInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"My Location",
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

	// context data values
	loadContextDataValueGroupInput (content, {
		"parentContainer":$template
	});
	// additional fields
	loadAdditionalFieldGroupInput (content, {
		"parentContainer":$template
	});
	// secondary ratings
	loadSecondaryRatingGroup (content, {
		"parentContainer":$template
	});

	// photo upload
	loadPhotoGroupInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"Upload your photos"
		},
		"mediaSettings":{
			"contentType":"review"
		}
	});
	// video link
	loadYoutubeUrlInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"Video URL"
		}
	});
	// video caption
	loadVideoCaptionInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"Video Caption"
		}
	});

	// product recommendations
	console.log("productrecommendations");
	// tags
	loadTagGroupInput (content, {
		"parentContainer":$template
	});
	// user location geocode
	console.log("userlocationgeocode");
	// hosted authentication
	console.log("hostedauthentication");

	// opt in checkboxes
	if (content["Data"]["Fields"]["agreedtotermsandconditions"]) {
		loadTermsAndConditionsInput (content, {
			"parentContainer":$template
		});
	}
	if (content["Data"]["Fields"]["sendemailalertwhencommented"]) {
		loadSendEmailAlertWhenCommentedInput (content, {
			"parentContainer":$template
		});				};
	if (content["Data"]["Fields"]["sendemailalertwhenpublished"]) {
		loadSendEmailAlertWhenPublishedInput (content, {
			"parentContainer":$template
		});
	};

	// buttons
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
		// POST form to server
		$(defaultSubmissionFormContainer).hide();
		postReviewsSubmissionForm(productId, defaultSubmissionThankYouContainer, function (content) {
				console.log("submitted");
				loadReviewSubmissionThankYouWidget (content, {
					"parentContainer":settings["parentContainer"],
					"productId":productId,
					"returnURL":returnURL,
				});
			}, {
			"Parameters": params
		});
	});

	// preview button
	loadPreviewButton ("Preview", {
		"parentContainer":$template
	});
	// preview button functionality
	$($template).find(defaultButtonPreviewContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonPreviewContainer + " " + defaultButtonContainer).click(function() {
		// get form parameters
		var params = returnFormParamaters("#" + newID, {
			"action":"preview"
		});
		// POST form to server
		$(defaultSubmissionFormContainer).hide();
		postReviewsSubmissionForm(productId, defaultSubmissionPreviewContainer, function (content) {
				console.log("preview");
				content["Review"]["RatingRange"] = 5; //default to 5 since API doesn't include this for preview
				loadReviewSubmissionPreviewWidget (content, {
					"parentContainer":settings["parentContainer"],
					"productId":productId,
					"returnURL":returnURL,
				});
			}, {
			"Parameters": params
		});
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

	// set stars using jquery.rating plugin
	$(function(){
		$('input[type=radio].star').rating();
	});
}



/***** RATINGS *****/



function loadOverallRatingInput (content, options) {
	var content = content["Data"]["Fields"]["rating"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultOverallRatingInputContainer,
		"viewContainer":defaultInputRadioIndividualContainerView,
		"loadOrder":[
					{1:"poor"},
					{2:"fair"},
					{3:"average"},
					{4:"good"},
					{5:"excellent"}
				],
		"productId":"",
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputLabel = settings["inputSettings"]["inputLabel"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
	// load radio buttons
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			loadRadioInputIndividual (content, {
				"parentContainer":$template,
				"viewContainer":defaultInputRadioOverallRatingContainerView,
				"loadOrder":settings["loadOrder"][key]
			});
		});
	}
}

function loadSecondaryRatingGroup (content, options) {
	var defaultLoadOrder = new Array();
	if (content["Data"]["Groups"]["rating"] != undefined) {
		$.each(content["Data"]["Groups"]["rating"]["SubElements"], function() {
			defaultLoadOrder.push(this["Id"]);
		});
	}
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSecondaryRatingGroupInputContainer,
		"viewContainer":defaultSecondaryRatingContainerView,
		"loadOrder":defaultLoadOrder,
		"productId":"",
		"inputSettings":{
			"inputType":content["Type"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			var fieldContent = content["Data"]["Fields"][this];
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// set variables
			var inputLabel = fieldContent["Label"];
			// add secondary rating template
			$container.append($template);
			// set label
			$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
			// load secondary rating input container
			loadSecondaryRatingIndividual(fieldContent, {
				"parentContainer":$template
			});
		});
	}
}

function loadSecondaryRatingIndividual (content, options) {
	// content expected ["Data"]["Fields"][<fieldname>]
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultRadioButtonGroupInputContainer,
		"viewContainer":defaultInputRadioIndividualContainerView,
		"loadOrder":[
					{1:"poor"},
					{2:"fair"},
					{3:"average"},
					{4:"good"},
					{5:"excellent"}
				],
		"productId":"",
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add input template
	$container.append($template);
	// load radio buttons
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			loadRadioInputIndividual (content, {
				"parentContainer":$template,
				"viewContainer":defaultInputRadioOverallRatingContainerView,
				"loadOrder":settings["loadOrder"][key]
			});
		});
	}
}



/***** RECOMMENDED *****/



function loadIsRecommendedInput (content, options) {
	var content = content["Data"]["Fields"]["isrecommended"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultIsRecommendedInputContainer,
		"viewContainer":defaultInputRadioIndividualContainerView,
		"loadOrder":[
					{true:"Yes"},
					{false:"No"}
				],
		"productId":"",
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputLabel = settings["inputSettings"]["inputLabel"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
	// load radio buttons
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			loadRadioInputIndividual (content, {
				"parentContainer":$template,
				"loadOrder":settings["loadOrder"][key]
			});
		});
	}
}



/***** REVIEW TEXT *****/



// review title
function loadReviewTitleInput (content, options) {
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

// review text
function loadReviewTextInput (content, options) {
	var content = content["Data"]["Fields"]["reviewtext"];
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
