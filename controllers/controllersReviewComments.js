function loadReviewComments (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentsBodyContainer,
		"viewContainer":"views/reviews/display/reviewCommentContainer.html",
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	// hide the target container while comments are loading
	$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).empty().hide().addClass("_BVContentLoadingContainer");
	
	// set content variables
	var commentsToLoad = content["Results"]; // review comments

	// load comments
	$.when(
		// all functions pertaining to individual reviews here
		$.each(commentsToLoad, function(key) {
			// get a new id for the comment container using comment id - this will be needed for reference on child elements
			var contentId = commentsToLoad[key]["Id"]
			var newID = "BVCommentContainer" + contentId;
			// inject comment content
			$.ajax({
				url: settings["viewContainer"],
				type: 'GET',
				dataType: 'html',
				async: false,
				success: function(container) {
					var $container = $(container);
					// add comment template container
					$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).attr("id", newID));
					// load comment title
					loadCommentTitle (commentsToLoad[key], {
						"parentContainer":$container
					});
					// load comment text
					loadCommentBody (commentsToLoad[key], {
						"parentContainer":$container
					});
					// load comment date
					loadCommentDate (commentsToLoad[key], {
						"parentContainer":$container
					});
					// load comment user nickname
					loadCommentUserNickname (commentsToLoad[key], {
						"parentContainer":$container
					});
					// load comment user location
					loadCommentUserLocation (commentsToLoad[key], {
						"parentContainer":$container
					});
					// load comment cdvs
					if (content["ContextDataValuesOrder"]) {
						loadCommentContextDataValuesGroup (commentsToLoad[key], {
							"parentContainer":$container
						});
					}
					// load comment photos
					loadCommentPhotosGroup(commentsToLoad[key], {
						"parentContainer":$container
					});
					// load comment videos
					loadCommentVideosGroup(commentsToLoad[key], {
						"parentContainer":$container
					});
					// load comment feedback
					loadFeedback(commentsToLoad[key], {
						"parentContainer":$container,
						"productId":settings["productId"],
						"contentId":contentId,
						"feedbackSettings":{
							"contentType":"review_comment"
						}
					});
					// load badges
					loadCommentBadges(commentsToLoad[key], {
						"parentContainer":$container
					});
				},
				error: function(e) {
					defaultAjaxErrorFunction(e);
				}
			});
		})
	).done(function(){
		// all functions pertaining to comments as a group here

		// pagination
		loadNumberedPagination (content, {
			"parentContainer":settings["parentContainer"],
			"targetContainer":settings["targetContainer"],
			"viewReloadOptions":{
				"model":getAllReviewComments,
				"modelSettings":settings["modelLocalDefaultSettings"],
				"controller":loadReviewComments,
				"controllerSettings":settings
			}
		});
		
		// set classes
		addOddEvenClasses (defaultReviewContainer);
		addFirstLastClasses (defaultReviewContainer);

		// show target container once reviews are finished loading
		$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).show().removeClass("_BVContentLoadingContainer");
	});
}



/***** COMMENT TEXT DATA *****/



function loadCommentTitle (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentTitleContainer,
		"viewContainer":defaultReviewTitleContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var commentTitleValue = content['Title'];
			// load title if available
			if (commentTitleValue) {
				// set title value
				$container.find(defaultReviewTitleTextContainer).andSelf().filter(defaultReviewTitleTextContainer).text(commentTitleValue);
				// add title template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			}
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadCommentBody (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentBodyTextContainer,
		"viewContainer":defaultReviewBodyTextContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var bodyTextValue = content['CommentText'];
			// set body text value
			$container.find(defaultReviewBodyTextTextContainer).andSelf().filter(defaultReviewBodyTextTextContainer).text(bodyTextValue);
			// add body text template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadCommentDate (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentDateContainer,
		"viewContainer":defaultReviewDateContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// format date
			var dateTextValue = $.format.date(content['SubmissionTime'], "MMMM dd, yyyy");
			// set date value
			$container.find(defaultReviewDateTextContainer).andSelf().filter(defaultReviewDateTextContainer).text(dateTextValue);
			// add date template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** USER DATA *****/



function loadCommentUserNickname (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentUserNicknameContainer,
		"viewContainer":defaultReviewUserNicknameContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var userNicknameText = content['UserNickname'];
			// set nickname value
			$container.find(defaultReviewCommentUserNicknameTextContainer).andSelf().filter(defaultReviewCommentUserNicknameTextContainer).text(userNicknameText);
			// add nickname template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadCommentUserLocation (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentUserLocationContainer,
		"viewContainer":defaultReviewUserLocationContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var userLocationText = content['UserLocation'];
			// load location if available
			if (userLocationText) {
				// set location value
				$container.find(defaultReviewCommentUserLocationTextContainer).andSelf().filter(defaultReviewCommentUserLocationTextContainer).text(userLocationText);
				// add location template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			}
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** CONTEXT DATA VALUES (CDVs) *****/



function loadCommentContextDataValuesGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentContextDataValueGroupContainer,
		"viewContainer":defaultReviewContextDataValueContainerView,
		"loadOrder":content["ContextDataValuesOrder"],
		"productId":""
	}, options);
	$.each(settings["loadOrder"], function(index) {
	console.log("test");
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
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
				// set CDV label (title)
				$container.find(defaultReviewCommentContextDataValueLabelTextContainer).andSelf().filter(defaultReviewCommentContextDataValueLabelTextContainer).text(labelText);
				// set CDV value
				$container.find(defaultReviewCommentContextDataValueTextContainer).andSelf().filter(defaultReviewCommentContextDataValueTextContainer).text(valueText);
				// add CDVs container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).addClass(labelClass));
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}



/***** MEDIA - PHOTO & VIDEO *****/



function loadCommentPhotosGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentPhotoGroupContainer,
		"viewContainer":defaultReviewPhotoContainerView,
		"loadOrder":content["Photos"],
		"productId":""
	}, options);
	console.log(settings["loadOrder"]);
	$.each(settings["loadOrder"], function(index) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// current iteration of loop
				var cur = settings["loadOrder"][index];
				// set variables
				var id = cur["Id"];
				var thumbnailId = cur["Sizes"]["thumbnail"]["Id"];
				var thumbnailUrl = cur["Sizes"]["thumbnail"]["Url"];
				var thumbnail = new Image; // thumbnail image
				thumbnail.src = thumbnailUrl; // set thumbnail image src attr
				var photoId = cur["Sizes"]["normal"]["Id"];
				var photoUrl = cur["Sizes"]["normal"]["Url"];
				var photo = new Image; // photo image
				photo.src = photoUrl; // set photo image src attr
				var captionText = cur["Caption"];
				var SizesOrderArray = cur["SizesOrder"];
				// set class variables
				var labelClass = "BVPhoto" + id;
				// set thumbnail
				$container.find(defaultReviewCommentPhotoThumbnailContainer).andSelf().filter(defaultReviewCommentPhotoThumbnailContainer).html(thumbnail).attr({"href":photoUrl,"title":captionText});
				// set photo
				//$container.find(defaultReviewCommentPhotoIndividualContainer).andSelf().filter(defaultReviewCommentPhotoIndividualContainer).html(photo);
				// set caption
				//$container.find(defaultReviewCommentPhotoCaptionContainer).andSelf().filter(defaultReviewCommentPhotoCaptionContainer).text(captionText);
				// add photo container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).addClass(labelClass));
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

function loadCommentVideosGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultReviewCommentVideoGroupContainer,
		"viewContainer":defaultReviewVideoContainerView,
		"loadOrder":content["Videos"],
		"productId":""
	}, options);
	$.each(settings["loadOrder"], function(index) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
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
				// set thumbnail
				$container.find(defaultReviewCommentVideoThumbnailContainer).andSelf().filter(defaultReviewCommentVideoThumbnailContainer).html(thumbnail).attr({"href":videoUrl,"title":captionText});
				// set video
				//$container.find(defaultReviewCommentVideoIndividualContainer).andSelf().filter(defaultReviewCommentVideoIndividualContainer).html(video);
				// set caption
				//$container.find(defaultReviewCommentVideoCaptionContainer).andSelf().filter(defaultReviewCommentVideoCaptionContainer).text(captionText);
				// add video container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).addClass(labelClass));
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}



/***** BUTTONS *****/



// write review comment button
function loadWriteReviewCommentButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonWriteReviewCommentContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var productId = settings["productId"]
			var reviewId = settings["contentId"]
			var contentType = "review_comment"
			var returnURL = $(location).attr("href") + "";
			// set attributes
			$container.find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).attr({
				"id":"",
				"title":"",
				"onclick":"return false;",
				"href":""
			}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).text(content);
			// write review comment button functionality
			$container.find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).click(function() {
				console.log("click");
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
			// add button template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// write review comment button
function loadToggleReviewCommentsButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonToggleReviewCommentsContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var contentId = settings["contentId"];
			// set attributes
			$container.find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).attr({
				"id":"",
				"title":"",
				"onclick":"return false;",
				"href":""
			}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).text(content);
			// apply toggle functionality to button
			$container.find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).click(function() {
				// set display toggle for comment section
				var commentContainer = $(defaultReviewCommentsSectionContainer + "[data-contentid='" + contentId + "']");
				// toggle form if enabled
				if (!$(this).hasClass("BVDisabled")) {
					$(commentContainer).fadeToggle(defaultToggleOptions);
				}
			});
		// add button template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}