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
	$container.html($template);
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
			"inputLabel":"Review Summary",
			"inputHelperText":"Example: Great camera for a beginner",
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
				"inputHelperText":"Do not use your full name or email address; your privacy is important to us.",
			}
		});
	}
	// email
	if (content["Data"]["Fields"]["useremail"]) {
		loadUserEmailInput (content, {
			"parentContainer":$template,
			"inputSettings":{
				"inputLabel":"My Email",
				"inputHelperText":"We will ONLY use your email to notify you when your review is posted or if a comment is added to your review after it is posted.",
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
	if (content["Data"]["Fields"]["userlocation"]) {
		loadUserLocationInput (content, {
			"parentContainer":$template,
			"inputSettings":{
				"inputLabel":"My Location",
				"inputHelperText":"Example: New York, NY",
			}
		});
	}

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

	// context data values
	loadContextDataValueGroupInput (content, {
		"parentContainer":$template
	});

	// append reward zone context data field helper text
	$('<div class=\"_BVHelperTextCustom\"><span><strong>REWARD ZONE</strong> MEMBERS:</span> Get bonus points for your approved review (see <a href=\"javascript:void window.open(\'http://www.bestbuy.com/site/olspage.jsp?id=pcmcat299800050000&amp;type=category\',\'\',\'scrollbars=no,menubar=no,height=350,width=500,resizable=yes,toolbar=no\')\">details</a>*).</div>').insertBefore('#contextdatavalue_rewardZoneMembershipV3WrapperID ._BVFormInputWrapper');

	// additional fields
	loadAdditionalFieldGroupInput (content, {
		"parentContainer":$template
	});

	// append reward zone additional field helper text
	$('#additionalfield_RewardZoneNumberWrapperID ._BVHelperText').append('Example: 0123456789');
	
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
			"inputLabel":"Video URL",
			"inputHelperText":"(Paste the URL from your videos on <span onmouseout=\"$('#BVVideoPasteGuideContainerID').addClass('BVHidden').removeClass('BVYouTubeGuide').removeClass('BVVIYouTubeGuide');\" onmouseover=\"$('#BVVideoPasteGuideContainerID').removeClass('BVHidden').addClass('BVYouTubeGuide').addClass('BVVIYouTubeGuide'); return false;\"><a href=\"http://www.youtube.com/\" class=\"BVLink\" target=\"_blank\" id=\"BVYouTubeLinkID\">YouTube</a></span>)<div class=\"BVVideoPasteGuideContainer BVVIVideoPasteGuideContainer BVHidden\" id=\"BVVideoPasteGuideContainerID\"><div class=\"BVVideoPasteGuideContainerImage BVVIVideoPasteGuideContainerImage\"></div><div class=\"BVVideoPasteGuideContainerLabel BVVIVideoPasteGuideContainerLabel\">Copy the YouTube URL from your browser's location bar.</div></div>",
		}
	});
	// video caption
	loadVideoCaptionInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"Video Caption",
			"inputHelperText":"Example: \"See it in action.\" 150 Characters Max.",
		}
	});

	// product recommendations
	consoleLogFallback("productrecommendations");
	// tags
	loadTagGroupInput (content, {
		"parentContainer":$template
	});
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
	if (content["Data"]["Fields"]["sendemailalertwhencommented"]) {
		loadSendEmailAlertWhenCommentedInput (content, {
			"parentContainer":$template
		});
	};
	if (content["Data"]["Fields"]["sendemailalertwhenpublished"]) {
		loadSendEmailAlertWhenPublishedInput (content, {
			"parentContainer":$template
		});
	};

	// buttons
	// submit button
	loadSubmitButton ("Submit My Review", {
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
			postReviewsSubmissionForm(productId, defaultSubmissionThankYouContainer, function (content) {
					loadReviewSubmissionThankYouWidget (content, {
						"parentContainer":settings["parentContainer"],
						"productId":productId,
						"returnURL":returnURL,
					});
				}, {
				"Parameters": params
			});
		}
	});

	// preview button
	loadPreviewButton ("Preview My Review", {
		"parentContainer":$template
	});
	// preview button functionality
	$($template).find(defaultButtonPreviewContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonPreviewContainer + " " + defaultButtonContainer).click(function() {
		// get form parameters
		var params = returnFormParamaters("#" + newID, {
			"action":"preview"
		});
		// validate form using parsly.js plugin
		var validated = $("#" + newID).parsley('validate');
		// POST form to server if no errors
		// if (validated) {
		// 	$(defaultSubmissionFormContainer).hide();
		// 	postReviewsSubmissionForm(productId, defaultSubmissionPreviewContainer, function (content) {
		// 			// update content to have matching review node so the preview will match the display
		// 			content = updateReviewPreviewNode(content);
		// 			// review preview
		// 			loadReviewSubmissionPreviewWidget (content, {
		// 				"parentContainer":settings["parentContainer"],
		// 				"productId":productId,
		// 				"returnURL":returnURL,
		// 			});
		// 		}, {
		// 		"Parameters": params
		// 	});
		// }
		if (validated) {
			$("#BVSubmissionContainer").css({"height":$(defaultSubmissionFormContainer).height()});
			$('html, body').animate({
				scrollTop: $("#BVSubmissionContainer").offset().top
			}, 300);
			$(defaultSubmissionFormContainer).fadeOut(300, function() {
				postReviewsSubmissionForm(productId, defaultSubmissionPreviewContainer, function (content) {
						// update content to have matching review node so the preview will match the display
						content = updateReviewPreviewNode(content);
						// review preview
						loadReviewSubmissionPreviewWidget (content, {
							"parentContainer":settings["parentContainer"],
							"productId":productId,
							"returnURL":returnURL,
						});
						$("#BVSubmissionContainer").animate({"height":$(defaultSubmissionPreviewContainer).height()}, 300);
					}, {
					"Parameters": params
				});
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

	// set stars using jquery.rating plugin
	$(function(){
		$('input[type=radio].star').rating();
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



/***** RATINGS *****/



function loadOverallRatingInput (content, options) {
	var content = content["Data"]["Fields"]["rating"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultOverallRatingInputContainer,
		"viewContainer":defaultInputRadioIndividualContainerView,
		"loadOrder":[
					{"1":"poor"},
					{"2":"fair"},
					{"3":"average"},
					{"4":"good"},
					{"5":"excellent"}
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
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
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
			var inputRequired = settings["inputSettings"]["inputRequired"];
			// add secondary rating template
			$container.append($template);
			// set label
			$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
			// if required field
			if (inputRequired) {
				$($template).parent().addClass(requiredClass);
				$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
			}
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
					{"1":"poor"},
					{"2":"fair"},
					{"3":"average"},
					{"4":"good"},
					{"5":"excellent"}
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
					{"true":"Yes"},
					{"false":"No"}
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
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
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
