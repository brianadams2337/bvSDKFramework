/* DEFAULT REVIEW SUBMISSION FORM FUNCTION */

function loadReviewSubmissionWidget (content, options) {
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
			loadReviewSubmissionForm (content, {
				"parentContainer":$container,
				"productId":settings["productId"],
				"returnURL":settings["returnURL"],
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
	});
}

function loadReviewSubmissionForm (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionContainer,
		"targetContainer":defaultSubmissionFormContainer,
		"viewContainer":defaultSubmissionFormContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	console.log(content);
	// get a new id for the submission container using product id - this will be needed for reference on form processing
	var newID = "BVSubmissionContainerID_" + settings["productId"];
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
					"action":"",
					"method":"POST",
					"enctype":"application/x-www-form-urlencoded",
					"autocomplete":"on",
					"accept-charset":"UTF-8",
					"target":""
				});
				
				/***** headers *****/

				loadPageHeader ("", {
					"parentContainer":$container,
					"targetContainer":defualtPageHeaderContainer
				});
				loadSectionHeader ("My Product Rating", {
					"parentContainer":$container,
					"targetContainer":defaultFormSectionHeaderRatingsContainer
				});
				loadSectionHeader ("My Review", {
					"parentContainer":$container,
					"targetContainer":defaultFormSectionHeaderReviewContainer
				});
				loadSectionHeader ("Share Relevant Photos and Video", {
					"parentContainer":$container,
					"targetContainer":defaultFormSectionHeaderMediaContainer
				});
				loadSectionHeader ("My Information", {
					"parentContainer":$container,
					"targetContainer":defaultFormSectionHeaderUserContainer
				});
				
				/***** product info *****/

				getSpecificProduct (settings["productId"], function(data) {
					loadProductInfoWidget (data, {
						"parentContainer":$container
					});					
				}, {

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
						"inputLabel":"I would recommend this to a friend"
					}
				});
				// review title
				loadReviewTitleInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Review Summary"
					}
				});
				// review text
				loadReviewTextInput (content, {
					"parentContainer":$container,
					"viewContainer":defaultInputTextAreaWithCharacterCounterContainerView,
					"inputSettings":{
						"inputLabel":"My Review",
					}
				});
				// nickname
				if (content["Data"]["Fields"]["usernickname"]) {
					loadUserNicknameInput (content, {
						"parentContainer":$container,
						"inputSettings":{
							"inputLabel":"Choose a Nickname (no spaces)",
						}
					});
				}
				// email
				if (content["Data"]["Fields"]["useremail"]) {
					loadUserEmailInput (content, {
						"parentContainer":$container,
						"inputSettings":{
							"inputLabel":"My Email",
						}
					});
				}
				/*
				// user id
				loadUserIDInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"User Id",
						"inputName":"userid"
					}
				});
				*/

				// location
				loadUserLocationInput (content, {
					"parentContainer":$container,
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
					"parentContainer":$container
				});
				// additional fields
				loadAdditionalFieldGroupInput (content, {
					"parentContainer":$container
				});
				// secondary ratings
//				loadSecondaryRatingGroup (content, {
//					"parentContainer":$container
//				});

				// photo upload
				loadPhotoGroupInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Upload your images"
					},
					"mediaSettings":{
						"contentType":"review"
					}
				});
				// video link
				loadYoutubeUrlInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Video URL"
					}
				});
				// video caption
				loadVideoCaptionInput (content, {
					"parentContainer":$container,
					"inputSettings":{
						"inputLabel":"Video Caption"
					}
				});

				// product recommendations
				console.log("productrecommendations");
				// tags
//				loadTagGroupInput (content, {
//					"parentContainer":$container
//				});
				// user location geocode
				console.log("userlocationgeocode");
				// hosted authentication
				console.log("hostedauthentication");

				// opt in checkboxes
				if (content["Data"]["Fields"]["agreedtotermsandconditions"]) {
					loadTermsAndConditionsInput (content, {
						"parentContainer":$container
					});
				}
				if (content["Data"]["Fields"]["sendemailalertwhencommented"]) {
					loadSendEmailAlertWhenCommentedInput (content, {
						"parentContainer":$container
					});				};
				if (content["Data"]["Fields"]["sendemailalertwhenpublished"]) {
					loadSendEmailAlertWhenPublishedInput (content, {
						"parentContainer":$container
					});
				};

				// buttons
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
						postReviewsSubmissionForm(settings["productId"], function (content) {
								console.log("submitted");
								loadReviewSubmissionThankYouWidget (content, {
									"productId":settings["productId"],
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
						"action":"preview"
					});
					// POST form to server
					$(defaultSubmissionFormContainer).hide();
					loadingContainerAnimation(defaultSubmissionPreviewContainer, function() {
						postReviewsSubmissionForm(settings["productId"], function (content) {
								console.log("preview");
								content["Review"]["RatingRange"] = 5; //default to 5 since API doesn't include this for preview
								loadReviewSubmissionPreviewWidget (content, {
									"productId":settings["productId"],
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
		})
	).done(function(){
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
