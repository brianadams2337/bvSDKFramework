/* DEFAULT REVIEW SUBMISSION FORM FUNCTION */

function loadReviewSubmissionForm (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionContainer,
		"targetContainer":defaultSubmissionFormContainer,
		"viewContainer":defaultSubmissionFormContainerView,
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
	$(settings["targetContainer"]).hide();
	// get a new id for the submission container using product id - this will be needed for reference on child elements
	var newID = "BVSubmissionContainerID" + settings["productId"];
	$.when(
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

				loadPageHeader ("Write Your Review", {
					"parentContainer":$container,
					"targetContainer":defualtPageHeaderContainer
				});
				loadSectionHeader ("Your Rating", {
					"parentContainer":$container,
					"targetContainer":defaultFormSectionHeaderRatingsContainer
				});
				loadSectionHeader ("Your Review", {
					"parentContainer":$container,
					"targetContainer":defaultFormSectionHeaderReviewContainer
				});
				loadSectionHeader ("Media Upload", {
					"parentContainer":$container,
					"targetContainer":defaultFormSectionHeaderMediaContainer
				});
				loadSectionHeader ("User Info", {
					"parentContainer":$container,
					"targetContainer":defaultFormSectionHeaderUserContainer
				});
				
				/***** inputs *****/

				// overall rating
				loadOverallRatingInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Overall Rating"
					}
				});
				// is recommended
				loadIsRecommendedInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Would you recommend this product?"
					}
				});
				// review title
				loadReviewTitleInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Review Title"
					}
				});
				// review text
				loadReviewTextInput (content, {
					"parentContainer":$container,
					"viewContainer":defaultInputTextAreaWithCharacterCounterContainerView,
					"inputSettings":{
						"inputLabel":"Review Text",
						"inputHelperText": "Example: This rocks!",
						"inputCharacterCounterText": "Character(s) needed to meet minimum length: " 
					}
				});
				/* TURNED OFF DUE TO ANON SUB
				// nickname
				loadUserNicknameInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"User Nickname",
					}
				});
				// email
				loadUserEmailInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"User Email",
					}
				});
				*/
				// video link
				loadYoutubeUrlInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Youtube Link"
					}
				});
				// video caption
				loadVideoCaptionInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Video Caption"
					}
				});
				// location
				loadUserLocationInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"User Location",
					}
				});
				// user id
				loadUserIDInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"User Id",
						"inputName":"userid"
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
					"parentContainer":$container
				});
				// additional fields
				loadAdditionalFieldGroupInput (content, {
					"parentContainer":$container
				});
				// secondary ratings
				loadSecondaryRatingGroup (content, {
					"parentContainer":$container
				});
				// photo upload
				console.log("photoupload");
				// video upload
				console.log("videoupload");
				// product recommendations
				console.log("productrecommendations");
				// tags
				loadTagGroupInput (content, {
					"parentContainer":$container
				});
				// user location geocode
				console.log("userlocationgeocode");
				// hosted authentication
				console.log("hostedauthentication");

				// buttons
				loadTermsAndConditionsInput (content, {
					"parentContainer":$container
				});
				/*
				loadSendEmailAlertWhenPublishedInput (content, {
					"parentContainer":$container
				});
				loadSendEmailAlertWhenCommentedInput (content, {
					"parentContainer":$container
				});*/

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
					postReviewsSubmissionForm(settings["productId"],
						function () {
							console.log("submitted");
							console.log($container);
							$container.html("Thank you for your submission!");
						}, {
						"Parameters": params
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
						"action":"preview"
					});
					// POST form to server
					postReviewsSubmissionForm(settings["productId"],
						function (previewContent) {
							console.log("preview");
							previewContent["Review"]["RatingRange"] = 5; //default to 5 since API doesn't include this for preview
							loadReviewPreview (previewContent["Review"], {
								"parentContainer":"#BVSubmissionContainer",
								"productId":"test1",
								"modelLocalDefaultSettings":""
							});
						}, {
						"Parameters": params
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

				loadEventListeners("Listener", {
					"textFieldCounter": {
						"textField": ".BVFormInputTextarea",
					}
				});
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		})
	).done(function(){
		$(settings["targetContainer"]).show();
		$(settings["parentContainer"]).removeClass("_BVContentLoadingContainer");
		$(function(){
			$('input[type=radio].star').rating();
		});

		
	});
}



/***** RATINGS *****/



function loadOverallRatingInput (content, options) {
	var content = content["Data"]["Fields"]["rating"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
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
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load radio buttons
			$.each(settings["loadOrder"], function(key) {
				loadRadioInputIndividual (content, {
					"parentContainer":$container,
					"viewContainer":defaultInputRadioOverallRatingContainerView,
					"loadOrder":settings["loadOrder"][key]
				});
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadSecondaryRatingGroup (content, options) {
	var defaultLoadOrder = new Array();
	$.each(content["Data"]["Groups"]["rating"]["SubElements"], function() {
		defaultLoadOrder.push(this["Id"]);
	});
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
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
	$.each(settings["loadOrder"], function(key) {
		var fieldContent = content["Data"]["Fields"][this];
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// set label
				$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(fieldContent["Label"]);
				// add secondary rating template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
				// load secondary rating input container
				loadSecondaryRatingIndividual(fieldContent, {
					"parentContainer":$container
				});
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

function loadSecondaryRatingIndividual (content, options) {
	// content expected ["Data"]["Fields"][<fieldname>]
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
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
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load radio buttons
			$.each(settings["loadOrder"], function(key) {
				loadRadioInputIndividual (content, {
					"parentContainer":$container,
					"viewContainer":defaultInputRadioOverallRatingContainerView,
					"loadOrder":settings["loadOrder"][key]
				});
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** RECOMMENDED *****/



function loadIsRecommendedInput (content, options) {
	var content = content["Data"]["Fields"]["isrecommended"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
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
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load radio buttons
			$.each(settings["loadOrder"], function(key) {
				loadRadioInputIndividual (content, {
					"parentContainer":$container,
					"loadOrder":settings["loadOrder"][key]
				});
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** REVIEW TEXT *****/



// review title
function loadReviewTitleInput (content, options) {
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

// review text
function loadReviewTextInput (content, options) {
	var content = content["Data"]["Fields"]["reviewtext"];
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
			"inputCharacterCounterText":options["inputSettings"]["inputCharacterCounterText"],
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
			// set character counter text
			$container.find(defaultFormCharacterCounterTextContainerText).andSelf().filter(defaultFormCharacterCounterTextContainerText).text(settings["inputSettings"]["inputCharacterCounterText"]);
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

/***** Media Upload *****/

function loadYoutubeUrlInput (content, options) {
	var content = content["Data"]["Fields"]["videourl_1"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultReviewVideoInputContainer,
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

function loadVideoCaptionInput (content, options) {
	var content = content["Data"]["Fields"]["videocaption_1"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultReviewVideoCaptionInputContainer,
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