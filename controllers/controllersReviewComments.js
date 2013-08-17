/* DEFAULT REVIEW COMMENTS CONTROLLERS */

function loadReviewCommentsWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentsWidgetContainer,
		"viewContainer":defaultReviewCommentWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var commentsToDisplay = content["Results"]; // review comments to display
	var contentId = settings["contentId"];
	var productId = settings["productId"];
	// add widget template
	$container.html($template);

	// load comments if available
	if (commentsToDisplay.length > 0) {
		// add content id data param to content section
		$($template).find(reviewCommentsContainers["toggleContainer"]).andSelf().filter(reviewCommentsContainers["toggleContainer"]).attr({
			"data-contentid":contentId
		});

		// toggle comments button
		loadToggleReviewCommentsButton ("Show/Hide Comments", {
			"parentContainer":$template,
			"productId":productId,
			"contentId":contentId
		});

		// comment section header
		loadSectionHeader ("Comments", {
			"parentContainer":$template,
			"targetContainer":defualtSectionHeaderReviewCommentsContainer
		});

		// comments
		$.each (commentsToDisplay, function(key) {
			loadIndividualReviewComment(commentsToDisplay[key], {
				"parentContainer":$template,
				"productId":productId,
			});
		});

		// pagination
		loadNumberedPagination (content, {
			"parentContainer":$template,
			"targetContainer":defaultReviewCommentPaginationContainer,
			"viewReloadOptions":{
				"model":getAllReviewComments,
				"modelSettings":settings["modelLocalDefaultSettings"],
				"controller":loadReviewCommentsWidget,
				"controllerSettings":settings
			}
		});
				
		// set classes
		addOddEvenClasses (defaultReviewContainer);
		addFirstLastClasses (defaultReviewContainer);

	}
	// write review comment button
	loadWriteReviewCommentButton ("Post Comment", {
		"parentContainer":$template,
		"productId":productId,
		"contentId":contentId
	});
}

function loadIndividualReviewComment (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentsBodyContainer,
		"viewContainer":defaultReviewCommentContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var contentId = content["Id"]
	var newID = "BVCommentContainer" + contentId;
	// add comment template
	$container.append($template);

	// load comment title
	loadCommentTitle (content, {
		"parentContainer":$template
	});
	// load comment text
	loadCommentBody (content, {
		"parentContainer":$template
	});
	// load comment date
	loadCommentDate (content, {
		"parentContainer":$template
	});
	// load comment user nickname
	loadCommentUserNickname (content, {
		"parentContainer":$template
	});
	// load comment user location
	loadCommentUserLocation (content, {
		"parentContainer":$template
	});
	// load comment cdvs
	if (content["ContextDataValuesOrder"]) {
		loadCommentContextDataValuesGroup (content, {
			"parentContainer":$template
		});
	}
	// load comment photos
	if (content["Photos"]) {
		loadCommentPhotosGroup(content, {
			"parentContainer":$template
		});
	}
	// load comment videos
	if (content["Videos"]) {
		loadCommentVideosGroup(content, {
			"parentContainer":$template
		});
	}
	// load comment feedback
	loadFeedback(content, {
		"parentContainer":$template,
		"productId":settings["productId"],
		"contentId":contentId,
		"feedbackSettings":{
			"contentType":"review_comment"
		}
	});
	// load badges
	if (content["BadgesOrder"]) {
		loadBadges(content, {
			"parentContainer":$template
		});
	}
}



/***** COMMENT TEXT DATA *****/



function loadCommentTitle (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentTitleContainer,
		"viewContainer":defaultReviewCommentTitleContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var commentTitleValue = content['Title'];
	// load title if available
	if (commentTitleValue) {
		// add title template
		$container.append($template);
		// set title value
		$($template).find(defaultReviewTitleTextContainer).andSelf().filter(defaultReviewTitleTextContainer).html(commentTitleValue);
	}
}

function loadCommentBody (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentBodyTextContainer,
		"viewContainer":defaultReviewCommentBodyTextContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var bodyTextValue = content['CommentText'];
	// add body template
	$container.append($template);
	// set body value
	$($template).find(defaultReviewBodyTextTextContainer).andSelf().filter(defaultReviewBodyTextTextContainer).html(bodyTextValue);
}

function loadCommentDate (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentDateContainer,
		"viewContainer":defaultReviewCommentDateContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// format date
	var dateTextValue = $.format.date(content['SubmissionTime'], "MMMM dd, yyyy");
	// add date template
	$container.append($template);
	// set date value
	$($template).find(defaultReviewDateTextContainer).andSelf().filter(defaultReviewDateTextContainer).html(dateTextValue);
}



/***** USER DATA *****/



function loadCommentUserNickname (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentUserNicknameContainer,
		"viewContainer":defaultReviewCommentUserNicknameContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var userNicknameText = content['UserNickname'];
	// add nickname template
	$container.append($template);
	// set nickname value
	$($template).find(defaultReviewCommentUserNicknameTextContainer).andSelf().filter(defaultReviewCommentUserNicknameTextContainer).html(userNicknameText);
}

function loadCommentUserLocation (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentUserLocationContainer,
		"viewContainer":defaultReviewCommentUserLocationContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var userLocationText = content['UserLocation'];
	// add location template
	$container.append($template);
	// set location value
	$($template).find(defaultReviewCommentUserLocationTextContainer).andSelf().filter(defaultReviewCommentUserLocationTextContainer).html(userLocationText);
}



/***** CONTEXT DATA VALUES (CDVs) *****/



function loadCommentContextDataValuesGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentContextDataValueGroupContainer,
		"viewContainer":defaultReviewCommentContextDataValueContainerView,
		"loadOrder":content["ContextDataValuesOrder"],
	}, options);
	$.each(settings["loadOrder"], function(index) {
		// set container & template
		var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
		var $template = $.parseHTML($(settings["viewContainer"]).html());
		// current iteration of loop
		var cur = settings["loadOrder"][index];
		// set variables
		var id = content["ContextDataValues"][cur]["Id"];
		var value = content["ContextDataValues"][cur]["Value"];
		var valueText = content["ContextDataValues"][cur]["ValueLabel"];
		var labelText = content["ContextDataValues"][cur]["DimensionLabel"];
		// set class variables
		var labelClass = "BVContextDataValue" + id;
		var valueClass = "BVContextDataValue" + value;
		// add cdv template
		$container.append($template);
		// set cdv label (title)
		$($template).find(defaultReviewCommentContextDataValueLabelTextContainer).andSelf().filter(defaultReviewCommentContextDataValueLabelTextContainer).html(labelText);
		// set cdv value
		$($template).find(defaultReviewCommentContextDataValueTextContainer).andSelf().filter(defaultReviewCommentContextDataValueTextContainer).html(valueText);
	});
}



/***** MEDIA - PHOTO & VIDEO *****/



function loadCommentPhotosGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentPhotoGroupContainer,
		"viewContainer":defaultReviewCommentPhotoContainerView,
		"loadOrder":content["Photos"],
	}, options);
	$.each(settings["loadOrder"], function(index) {
		// set container & template
		var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
		var $template = $.parseHTML($(settings["viewContainer"]).html());
		// current iteration of loop
		var cur = settings["loadOrder"][index];
		// set variables
		var id = cur["Id"];
		var thumbnailUrl = cur["Sizes"]["thumbnail"]["Url"];
		var thumbnail = new Image; // thumbnail image
		thumbnail.src = thumbnailUrl; // set thumbnail image src attr
		var photoUrl = cur["Sizes"]["normal"]["Url"];
		var photo = new Image; // photo image
		photo.src = photoUrl; // set photo image src attr
		var captionText = cur["Caption"];
		var SizesOrderArray = cur["SizesOrder"];
		// set class variables
		var labelClass = "BVPhoto" + id;
		// add photo template
		$container.append($template);
		// set thumbnail
		$($template).find(defaultReviewCommentPhotoThumbnailContainer).andSelf().filter(defaultReviewCommentPhotoThumbnailContainer).html(thumbnail).attr({"href":photoUrl,"title":captionText});
		// set photo
		//$($template).find(defaultReviewPhotoIndividualContainer).andSelf().filter(defaultReviewPhotoIndividualContainer).html(photo);
		// set caption
		//$($template).find(defaultReviewPhotoCaptionContainer).andSelf().filter(defaultReviewPhotoCaptionContainer).html(captionText);
	});
}

function loadCommentVideosGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewCommentVideoGroupContainer,
		"viewContainer":defaultReviewCommentVideoContainerView,
		"loadOrder":content["Videos"],
	}, options);
	$.each(settings["loadOrder"], function(index) {
		// set container & template
		var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
		var $template = $.parseHTML($(settings["viewContainer"]).html());
		// current iteration of loop
		var cur = settings["loadOrder"][index];
		// set text variables
		var id = cur["VideoId"];
		var videoHost = cur["VideoHost"];
		var thumbnailUrl = cur["VideoThumbnailUrl"];
		var videoUrl = cur["VideoUrl"];
		var videoiFrameUrl = cur["VideoIframeUrl"];
		var captionText = cur["Caption"];
		var thumbnail = new Image;
		thumbnail.src = thumbnailUrl;
		var video = $("<iframe />");
		video.attr({"src":videoUrl});
		// set class variables
		var labelClass = "BVVideo" + id;
		// add video template
		$container.append($template);
		// set thumbnail
		$($template).find(defaultReviewCommentVideoThumbnailContainer).andSelf().filter(defaultReviewCommentVideoThumbnailContainer).html(thumbnail).attr({"href":videoUrl,"title":captionText});
		// set video
		//$($template).find(defaultReviewVideoIndividualContainer).andSelf().filter(defaultReviewVideoIndividualContainer).html(video);
		// set caption
		//$($template).find(defaultReviewVideoCaptionContainer).andSelf().filter(defaultReviewVideoCaptionContainer).html(captionText);
	});
}



/***** BUTTONS *****/



// write review comment button
function loadWriteReviewCommentButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultButtonWriteReviewCommentContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var productId = settings["productId"]
	var reviewId = settings["contentId"]
	var contentType = "review_comment"
	var returnURL = $(location).attr("href") + "";
	// add button template
	$container.append($template);
	// set attributes
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
	// write review comment button functionality
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).click(function() {
		// set attributes and text for button
		var submissionParams = $.param({
			"productId":productId,
			"reviewId":reviewId,
			"contentType":contentType,
			"returnURL":returnURL
		});
		console.log(submissionParams);

		var url = siteBaseSubmissionURL + submissionParams;
		loadSubmissionPage(url);
	});
}

// write review comment button
function loadToggleReviewCommentsButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultButtonToggleReviewCommentsContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var contentId = settings["contentId"];
	// add button template
	$container.append($template);
	// set attributes
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
	// apply toggle functionality to button
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).click(function() {
		// set display toggle for comment section
		var commentContainer = $(reviewCommentsContainers["toggleContainer"] + "[data-contentid='" + contentId + "']");
		// toggle form if enabled
		if (!$(this).hasClass("BVDisabled")) {
			$(commentContainer).fadeToggle(defaultToggleOptions);
		}
	});
}
