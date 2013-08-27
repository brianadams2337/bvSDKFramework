
/************************* FEEDBACK *************************/



function loadFeedback (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFeedbackContainer,
		"viewContainer":defaultFeedbackContainerView,
		"productId":"",
		"contentId":"",
		"feedbackSettings":{
			"contentType":"",
			"vote":""
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var contentId = settings["contentId"];
	var cookieNameHelpfulness = "helpfulness" + contentId;
	var cookieNameInappropriate = "inappropriate" + contentId;
	var vote = $.cookie(cookieNameHelpfulness);
	// add feedback template
	$container.append($template);

	// load feedback count
	loadFeedbackCount (content, {
		"parentContainer":$template
	});
	// load feedback voting
	loadFeedbackVoting (content, {
		"parentContainer":$template,
		"productId":settings["productId"],
		"contentId":settings["contentId"],
		"feedbackSettings":{
			"contentType":settings["feedbackSettings"]["contentType"],
		}
	});
	// load report inappropriate
	loadReportInappropriate (content, {
		"parentContainer":$template,
		"productId":settings["productId"],
		"contentId":settings["contentId"],
		"feedbackSettings":{
			"contentType":settings["feedbackSettings"]["contentType"],
		}
	});
	// load status message area
	loadFeedbackStatus(content, {
		"parentContainer":$template,
		"productId":settings["productId"],
		"contentId":settings["contentId"],
		"feedbackSettings":{
			"contentType":settings["feedbackSettings"]["contentType"],
		}
	});
	// update feedback to reflect any past votes based off of browser cookies
	updateFeedback(cookieNameHelpfulness, {
		"contentId":contentId,
		"feedbackSettings":{
			"vote":vote
		}
	});
	updateReportInapproriate(cookieNameInappropriate, {
		"contentId":contentId
	});
}



/************************* HELPFULNESS VOTING *************************/



function loadFeedbackCount (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFeedbackCountContainer,
		"viewContainer":defaultFeedbackCountContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var feedbackPositive = content["TotalPositiveFeedbackCount"];
	var feedbackNegative = content["TotalNegativeFeedbackCount"];
	var feedbackTotal = content["TotalFeedbackCount"];
	var feedbackPositivePercentage = (feedbackPositive/feedbackTotal);
	var feedbackNegativePercentage = (feedbackNegative/feedbackTotal);
	var feedbackPositivePercentageFormatted = convertDecimalToPercentage(feedbackPositivePercentage);
	var feedbackNegativePercentageFormatted = convertDecimalToPercentage(feedbackNegativePercentage);
	// set class variables
	var valueClass = "BVFeedback";
	// add feedback count template
	$container.append($template);
	// set positive count value
	$($template).find(defaultFeedbackCountPositiveContainer).andSelf().filter(defaultFeedbackCountPositiveContainer).html(feedbackPositive);
	// set total count value
	$($template).find(defaultFeedbackCountTotalContainer).andSelf().filter(defaultFeedbackCountTotalContainer).html(feedbackTotal);
	// set percentage value
	$($template).find(defaultFeedbackCountPercentageContainer).andSelf().filter(defaultFeedbackCountPercentageContainer).html(feedbackPositivePercentageFormatted);
}

function loadFeedbackVoting (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFeedbackVotingContainer,
		"viewContainer":defaultFeedbackVotingContainerView,
		"loadOrder":"",
		"productId":"",
		"contentId":"",
		"feedbackSettings":{
			"contentType":"",
			"feedbackType":"helpfulness"
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var feedbackCountPositive = content["TotalPositiveFeedbackCount"];
	var feedbackCountNegative = content["TotalNegativeFeedbackCount"];
	// set class variables
	var valueClass = "BVFeedbackButton";
	// add feedback voting template
	$container.append($template);
	// load positive feedback button
	loadFeedbackVotingButton("" + feedbackCountPositive, {
		"parentContainer":$template,
		"targetContainer":defaultFeedbackVotingButtonPositiveContainer,
		"productId":settings["productId"],
		"contentId":settings["contentId"],
		"feedbackSettings":{
			"contentType":settings["feedbackSettings"]["contentType"],
			"feedbackType":settings["feedbackSettings"]["feedbackType"],
			"vote":"positive"
		}
	});
	// load negative feedback button
	loadFeedbackVotingButton("" + feedbackCountNegative, {
		"parentContainer":$template,
		"targetContainer":defaultFeedbackVotingButtonNegativeContainer,
		"productId":settings["productId"],
		"contentId":settings["contentId"],
		"feedbackSettings":{
			"contentType":settings["feedbackSettings"]["contentType"],
			"feedbackType":settings["feedbackSettings"]["feedbackType"],
			"vote":"negative"
		}
	});
}

function loadFeedbackVotingButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFeedbackVotingButtonContainer,
		"viewContainer":defaultButtonContainerView,
		"loadOrder":"",
		"productId":"",
		"contentId":"",
		"feedbackSettings":{
			"contentType":"",
			"feedbackType":"helpfulness",
			"vote":"", // must be defined in call
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var contentId = settings["contentId"];
	var feedbackType = settings["feedbackSettings"]["feedbackType"];
	var vote = settings["feedbackSettings"]["vote"];
	var cookieName = feedbackType + contentId;
	// add button template
	$container.append($template);
	// set attributes and text for button
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":"",
		"data-contentid":contentId,
		"data-feedbacktype":vote,
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
	// apply voting functionality
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).click(function() {
		processFeedbackVoting(cookieName, {
			"productId":"",
			"contentId":contentId,
			"feedbackSettings":settings["feedbackSettings"],
		});
	});
}



/************************* HELPFULNESS VOTING PROCESSING *************************/



// processes the voting for feedback helpfulness buttons
function processFeedbackVoting (cookieName, options) {
	// content expected is the name of the cookie
	var settings = $.extend(true, {
		"productId":"",
		"contentId":"",
		"feedbackSettings":{
			"contentType":"",
			"feedbackType":"helpfulness",
			"vote":"",
			"reasonText":""
		}
	}, options);
	// set variables
	var contentId = settings["contentId"];
	var vote = settings["feedbackSettings"]["vote"];
	var btnPositive = $("[data-feedbacktype='positive'][data-contentid='" + contentId + "']");
	var btnNegative = $("[data-feedbacktype='negative'][data-contentid='" + contentId + "']");
	// process feedback voting
	if (!$.cookie(cookieName)) {
		// disable buttons while processing
		$(btnPositive).addClass("BVDisabled");
		$(btnNegative).addClass("BVDisabled");
		// if no cookie for this feedback (no previous feedback vote)
		postFeedbackForm (
			contentId,
			function (content) {
				// set cookie
				$.cookie(cookieName, vote);
				// update feedback voting for selected and disabled states
				updateFeedback(cookieName, {
					"contentId":contentId,
					"feedbackSettings":{
						"vote":content["Feedback"]["Helpfulness"]["Vote"].toLowerCase(),
					}
				});
				loadFeedbackStatusMessage(content, {
					"contentId":contentId,
					"productid":settings["productId"],
				});
			}, {
				// feedback voting API parameters
				"Parameters":{
					"contenttype":settings["feedbackSettings"]["contentType"],
					"feedbacktype":settings["feedbackSettings"]["feedbackType"],
					"productid":settings["productId"],
					"vote":vote
				}
			}
		);
	} else if ($.cookie(cookieName) && $.cookie(cookieName) == vote) {
		// disable buttons while processing
		$(btnPositive).addClass("BVDisabled");
		$(btnNegative).addClass("BVDisabled");
		// if cookie exists for this feedback and matches vote value, then undo
		postFeedbackForm (
			contentId,
			function (content) {
				// set cookie
				$.removeCookie(cookieName);
				// update feedback voting
				updateFeedback(cookieName, {
					"contentId":contentId,
					"feedbackSettings":{
						"vote":content["Feedback"]["Helpfulness"]["Vote"].toLowerCase(),
					}
				});
				loadFeedbackStatusMessage(content, {
					"contentId":contentId,
					"productid":settings["productId"],
				});
			}, {
				// feedback voting API parameters
				"Parameters":{
					"contenttype":settings["feedbackSettings"]["contentType"],
					"feedbacktype":settings["feedbackSettings"]["feedbackType"],
					"productid":settings["productId"],
					"vote":"UNDO"
				}
			}
		);
	}
}

// updates feedback helpfulness voting buttons to reflect current vote status
function updateFeedback (cookieName, options) {
	var settings = $.extend(true, {
		"productId":"",
		"contentId":"",
		"feedbackSettings":{
			"vote":""
		}
	}, options);
	// set variables
	var contentId = settings["contentId"];
	var btnPositive = $("[data-feedbacktype='positive'][data-contentid='" + contentId + "']");
	var btnNegative = $("[data-feedbacktype='negative'][data-contentid='" + contentId + "']");
	var vote = settings["feedbackSettings"]["vote"];
	// update button classes to reflect vote
	if (!$.cookie(cookieName)) {
		// enable buttons
		$(btnPositive).removeClass(
			"BVDisabled BVUndo BVSelected"
		);
		$(btnNegative).removeClass(
			"BVDisabled BVUndo BVSelected"
		);
	} else if ($.cookie(cookieName) && $.cookie(cookieName) == vote) {
		// disable and select appropriate buttons
		if (vote == "positive") {
			$(btnPositive).addClass(
				"BVSelected"
			).removeClass(
				"BVDisabled BVUndo"
			);
			$(btnNegative).addClass(
				"BVDisabled BVUndo"
			).removeClass(
				"BVSelected"
			);
		} else if (vote == "negative") {
			$(btnNegative).addClass(
				"BVSelected"
			).removeClass(
				"BVDisabled BVUndo"
			);
			$(btnPositive).addClass(
				"BVDisabled BVUndo"
			).removeClass(
				"BVSelected"
			);
		}
	}
}



/************************* REPORT INAPPROPRIATE *************************/



function loadReportInappropriate (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReportInappropriateContainer,
		"viewContainer":defaultReportInappropriateContainerView,
		"loadOrder":"",
		"productId":"",
		"feedbackSettings":{
			"contentType":"",
			"feedbackType":"inappropriate"
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productId = settings["productId"];
	var contentId = settings["contentId"];
	var contentType = settings["feedbackSettings"]["contentType"];
	var feedbackType = settings["feedbackSettings"]["feedbackType"];
	// add report inappropriate template
	$container.append($template);
	// load report inappropriate button
	loadReportInappropriateButton("Flag Review", {
		"parentContainer":$template,
		"productId":productId,
		"contentId":contentId,
		"feedbackSettings":{
			"contentType":contentType,
			"feedbackType":feedbackType,
		}
	});
	// load report inappropriate form
	loadReportInappropriateForm(content, {
		"parentContainer":$template,
		"productId":productId,
		"contentId":contentId,
		"feedbackSettings":{
			"contentType":contentType,
			"feedbackType":feedbackType,
		}
	});
}

function loadReportInappropriateButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReportInappropriateButtonContainer,
		"viewContainer":defaultButtonContainerView,
		"loadOrder":"",
		"productId":"",
		"contentId":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var contentId = settings["contentId"];
	var feedbackType = settings["feedbackSettings"]["feedbackType"];
	// add button template
	$container.append($template);
	// set attributes and text for button
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":"",
		"data-contentid":contentId,
		"data-feedbacktype":feedbackType
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
	// apply form toggle functionality
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).click(function() {
		// set display toggle for form
		var formContainer = $("form[data-feedbacktype='" + feedbackType + "'][data-contentid='" + contentId + "']");
		// toggle form if enabled
		if (!$(this).hasClass("BVDisabled")) {
			$(formContainer).fadeIn(defaultToggleOptions);
		}
	});
}

function loadReportInappropriateForm (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReportInappropriateFormContainer,
		"viewContainer":defaultReportInappropriateFormContainerView,
		"loadOrder":"",
		"productId":"",
		"contentId":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var contentId = settings["contentId"];
	var contentType = settings["feedbackSettings"]["contentType"];
	var feedbackType = settings["feedbackSettings"]["feedbackType"];
	var cookieName = feedbackType + contentId;
	// add form template
	$container.append($template);
	// set form attributes (just fallbacks, not needed since we are using ajax submission)
	$($template).find("form").andSelf().filter("form").attr({
			"id":"",
			"name":"",
			"action":"",
			"method":"POST",
			"enctype":"application/x-www-form-urlencoded",
			"autocomplete":"on",
			"accept-charset":"UTF-8",
			"target":"",
			"data-contentid":contentId,
			"data-feedbacktype":feedbackType
		});
	// load header
	loadSectionHeader ("Report Inappropriate", {
		"parentContainer":$template,
		"targetContainer":defaultReportInappropriateSectionHeaderContainer
	});
	// load text field
	loadReportInappropriateTextInput (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"What's wrong with it?"
		}
	});
	// load buttons
	loadSubmitButton ("Submit", {
		"parentContainer":$template
	});
	loadCancelButton ("Cancel", {
		"parentContainer":$template
	});
	// add button functionality
	$($template).find(defaultButtonSubmitContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonSubmitContainer + " " + defaultButtonContainer).click(function() {
		processFeedbackReportInappropriate(cookieName, {
			"productId":"",
			"contentId":contentId,
			"feedbackSettings":{
				"contentType":contentType,
				"reasonText":$template.find(defaultReportInappropriateTextInput).andSelf().filter(defaultReportInappropriateTextInput).val()
			}
		});
	});
	$($template).find(defaultButtonCancelContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonCancelContainer + " " + defaultButtonContainer).click(function() {
		// set display toggle for form
		var formContainer = $("form[data-feedbacktype='" + feedbackType + "'][data-contentid='" + contentId + "']");
		// toggle form
		$(formContainer).fadeOut(defaultToggleOptions);
	});
	// initially hide form on load
	$($template).hide();
}

function loadReportInappropriateTextInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReportInappropriateTextInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":"reasonText",
			"inputType":"",
			"inputLabel":"reason text",
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":"",
			"inputMinLength":"",
			"inputMaxLength":"",
			"inputRequired":false,
			"inputDefault":"",
			"inputOptionsArray":""
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
		"for":settings["inputSettings"]["inputName"]
	});
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
	// load input
	loadTextAreaInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}



/************************* REPORT INAPPROPRIATE PROCESSING *************************/



// processes the report inappropriate feedback
function processFeedbackReportInappropriate (cookieName, options) {
	// content expected is the name of the cookie
	var settings = $.extend(true, {
		"productId":"",
		"contentId":"",
		"feedbackSettings":{
			"contentType":"",
			"feedbackType":"inappropriate",
			"reasonText":""
		}
	}, options);
	// set variables
	var contentId = settings["contentId"];
	var contentType = settings["feedbackSettings"]["contentType"];
	var feedbackType = settings["feedbackSettings"]["feedbackType"];
	var reasonText = settings["feedbackSettings"]["reasonText"];
	var formContainer = $("form[data-feedbacktype='" + feedbackType + "'][data-contentid='" + contentId + "']");
	// process report inappropriate
	if (!$.cookie(cookieName) && !formContainer.hasClass("BVDisabled")) {
		console.log(settings);
		console.log(cookieName);
		// if no cookie for this feedback (no previous reports)
		postFeedbackForm (
			contentId,
			function (content) {
				// set cookie
				$.cookie(cookieName, true);
				// update report button for selected and disabled states
				updateReportInapproriate(cookieName, {
					"contentId":contentId,
					"feedbackSettings":{
						"feedbackType":feedbackType,
						"reasonText":reasonText
					}
				});
				// toggle form
				$(formContainer).fadeOut(defaultToggleOptions);
				// update status message
				loadFeedbackStatusMessage(content, {
					"contentId":contentId,
					"productid":settings["productId"],
				});
			}, {
				// feedback voting API parameters
				"Parameters":{
					"contenttype":contentType,
					"feedbacktype":feedbackType,
					"productid":settings["productId"],
					"reasontext":reasonText
				}
			}
		);
	} 
}

// updates feedback helpfulness voting buttons to reflect current vote status
function updateReportInapproriate (cookieName, options) {
	var settings = $.extend(true, {
		"productId":"",
		"contentId":"",
	}, options);
	// set variables
	var contentId = settings["contentId"];
	var btnReport = $("[data-feedbacktype='inappropriate'][data-contentid='" + contentId + "']");
	// update button classes to reflect feedback
	if ($.cookie(cookieName)) {
		// disable report inappropriate buttons
		$(btnReport).addClass("BVDisabled");
	}
}



/************************* STATUS MESSAGING *************************/



function loadFeedbackStatus (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewFeedbackStatusMessageContainer,
		"viewContainer":defaultFeedbackStatusMessageContainerView,
		"loadOrder":"",
		"productId":"",
		"feedbackSettings":{
			"contentType":"",
			"feedbackType":""
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productId = settings["productId"];
	var contentId = settings["contentId"];
	// add status message template
	$container.append($template);
	// set attributes and hide container
	$($template).hide().attr({
		"data-contentid":contentId,
		"data-feedbacktype":"statusMessage",
	});
	// set status container variable using data attribute - this needs to be done here to avoid a bug with fadeout in jQuery 1.9.1
	var statusContainer = $("[data-feedbacktype='statusMessage'][data-contentid='" + contentId + "']");
	// load close button
	loadGenericButton ("close", {
		"parentContainer":$template,
	})
	// close button functionality
	$($template).find(defaultButtonGenericContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonGenericContainer + " " + defaultButtonContainer).click(function() {
		// close container
		$(statusContainer).fadeOut(defaultToggleOptions);
	});
}

function loadFeedbackStatusMessage (content, options) {
	var settings = $.extend(true, {
		"productId":"",
		"contentId":"",
		"feedbackSettings":{
			"contentType":"",
			"feedbackType":"",
			"vote":""
		}
	}, options);
	// set variables
	var contentId = settings["contentId"];
	var statusContainer = $("[data-feedbacktype='statusMessage'][data-contentid='" + contentId + "']");
	// set status message text to load - check if feedback is for helpfulness or inappropriate
	if (content["Feedback"]["Helpfulness"]) {
		// check if feedback is casting or undoing a vote - set to lowercase for consistency
		if (content["Feedback"]["Helpfulness"]["Vote"].toLowerCase() == "positive" || content["Feedback"]["Helpfulness"]["Vote"].toLowerCase() == "negative") {
			content = statusMessages["helpfullnessReceived"];
		} else if (content["Feedback"]["Helpfulness"]["Vote"].toLowerCase() == "undo") {
			content = statusMessages["helpfullnessRemoved"];
		}
	} else if (content["Feedback"]["Inappropriate"]) {
		content = statusMessages["inappropriateReceived"];
	} else {
		content = statusMessages["error"];
	}
	// set status message and show container
	$(statusContainer).find(defaultReviewFeedbackStatusMessageTextContainer).andSelf().filter(defaultReviewFeedbackStatusMessageTextContainer).empty().text(content);
	$(statusContainer).fadeIn(defaultToggleOptions);
}