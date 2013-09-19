/* DEFAULT REVIEWS CONTROLLERS */

function loadReviewWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewsParentContainer,
		"viewContainer":defaultReviewWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var reviewsStatisticsToLoad = content["Includes"]["Products"][settings["productId"]]['FilteredReviewStatistics']; // review stats
	var reviewsToLoad = content["Results"]; // reviews
	// add widget template
	$container.html($template);

	// load quick take
	loadQuickTake (reviewsStatisticsToLoad, {
		"parentContainer":$template,
		"productId":settings["productId"]
	});
	// load reviews
	if (reviewsToLoad != undefined) {
		$.each (reviewsToLoad, function(key) {
			loadIndividualReview (reviewsToLoad[key], {
				"parentContainer":$template,
				"productId":settings["productId"]
			});
		});
	}
	// pagination
	loadNumberedPagination (content, {
		"parentContainer":$template,
		"targetContainer":defaultReviewPaginationContainer,
		"viewReloadOptions":{
			"model":getAllReviews,
			"modelSettings":settings["modelLocalDefaultSettings"],
			"controller":loadReviewWidget,
			"controllerSettings":settings
		}
	});
	// sorting dropdown
	loadSortDropdown (content, {
		"parentContainer":$template,
		"loadOrder":defaultReviewSortLoadOrder,
		"viewReloadOptions":{
			"model":getAllReviews,
			"modelSettings":settings["modelLocalDefaultSettings"],
			"controller":loadReviewWidget,
			"controllerSettings":settings
		}
	});
	// filters
	loadFiltersOverallRating (content["Includes"]["Products"][settings["productId"]]['FilteredReviewStatistics'], {
		"parentContainer":$template,
		"viewReloadOptions":{
			"model":getAllReviews,
			"modelSettings":settings["modelLocalDefaultSettings"],
			"controller":loadReviewWidget,
			"controllerSettings":settings
		}
	});
	// loadFiltersSecondaryRatings (content["Includes"]["Products"][settings["productId"]]['FilteredReviewStatistics'], {
	// 	"parentContainer":$template,
	// 	"viewReloadOptions":{
	// 		"model":getAllReviews,
	// 		"modelSettings":settings["modelLocalDefaultSettings"],
	// 		"controller":loadReviewWidget,
	// 		"controllerSettings":settings
	// 	}
	// });
	// loadFiltersContextDataValues (content["Includes"]["Products"][settings["productId"]]['FilteredReviewStatistics'], {
	// 	"parentContainer":$template,
	// 	"viewReloadOptions":{
	// 		"model":getAllReviews,
	// 		"modelSettings":settings["modelLocalDefaultSettings"],
	// 		"controller":loadReviewWidget,
	// 		"controllerSettings":settings
	// 	}
	// });
	loadFiltersTags (content["Includes"]["Products"][settings["productId"]]['FilteredReviewStatistics'], {
		"parentContainer":$template,
		"viewReloadOptions":{
			"model":getAllReviews,
			"modelSettings":settings["modelLocalDefaultSettings"],
			"controller":loadReviewWidget,
			"controllerSettings":settings
		}
	});
	// set classes
	addOddEvenClasses (defaultReviewContainer);
	addFirstLastClasses (defaultReviewContainer);
}

function loadIndividualReview (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewsBodyContainer,
		"viewContainer":defaultReviewContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var contentId = content["Id"];
	var newID = "BVReviewContainer" + contentId;
	// add review template
	$container.append($template);

	// load review rating
	loadReviewRating (content, {
		"parentContainer":$template
	});
	// load review secondary ratings
	loadReviewSecondaryRatings (content, {
		"parentContainer":$template
	});
	// load review recommended
	loadReviewRecommended (content, {
		"parentContainer":$template
	});
	// load review date
	loadReviewDate (content, {
		"parentContainer":$template
	});
	// load review title
	loadReviewTitle (content, {
		"parentContainer":$template
	});
	// load review text
	loadReviewBody (content, {
		"parentContainer":$template
	});
	// load review user nickname
	loadReviewUserNickname (content, {
		"parentContainer":$template
	});
	// load review user location
	loadReviewUserLocation (content, {
		"parentContainer":$template
	});
	// load review cdvs
	loadReviewContextDataValuesGroup (content, {
		"parentContainer":$template
	});
	// load review tags
	loadReviewTagGroups(content, {
		"parentContainer":$template
	});
	// load review photos
	loadReviewPhotosGroup(content, {
		"parentContainer":$template
	});
	// load review videos
	loadReviewVideosGroup(content, {
		"parentContainer":$template
	});
	// load review badges
	loadBadges(content, {
		"parentContainer":$template,
		"targetContainer":defaultBadgesUserContainer,
		"loadOrder":defaultBadgesUserOrder,
	});

	// load review badges
	loadBadges(content, {
		"parentContainer":$template,
		"targetContainer":defaultBadgesContentContainer,
		"loadOrder":defaultBadgesContentOrder,
	});

	// load review feedback
	loadFeedback(content, {
		"parentContainer":$template,
		"productId":settings["productId"],
		"contentId":contentId,
		"feedbackSettings":{
			"contentType":"review"
		}
	});

	// load comments if available
	if (content["TotalCommentCount"] != undefined) {
		getAllReviewComments (contentId, $($template).find(defaultReviewCommentsWidgetContainer).andSelf().filter(defaultReviewCommentsWidgetContainer), function(content, modelLocalDefaultSettings) {
			loadReviewCommentsWidget (content, {
				"parentContainer":$template,
				"productId":settings["productId"],
				"contentId":contentId,
				"modelLocalDefaultSettings":{
					"Parameters":modelLocalDefaultSettings
				}
			});
		}, {
			"Parameters":{
				"filter":{
					//"hasvideos":false
				}
			}
		});
	}
}

/* DEFAULT QUICKTAKE FUNCTION */

function loadPrimarySummary (content, options) {
	content = content["Includes"]["Products"][productId]['FilteredReviewStatistics'];
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultPrimarySummaryContainer,
		"viewContainer":defaultPrimarySummaryContainerView,
		"productId":"",
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add quick take template
	$container.append($template);
			
	// overall rating average
	loadReviewRatingAverage (content, {
		"parentContainer":$template
	});
	// histogram
	loadHistogramOverallRating (content, {
		"parentContainer":$template
	});
	// write review button
	loadWriteReviewButton ("Review This Product", {
		"parentContainer":$template,
		"viewContainer":defaultButtonTextContainerView,
		"productId":settings["productId"]
	});
	// read reviews button
	loadReadReviewsButton ("Read All Reviews", {
		"parentContainer":$template,
		"viewContainer":defaultButtonTextContainerView,
		"productId":settings["productId"]
	});
}

/* DEFAULT QUICKTAKE FUNCTION */

function loadQuickTake (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultQuickTakeContainer,
		"viewContainer":defaultQuickTakeContainerView,
		"productId":"",
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add quick take template
	$container.append($template);
			
	// overall rating average
	loadReviewRatingAverage (content, {
		"parentContainer":$template
	});
	// histogram
	loadHistogramOverallRating (content, {
		"parentContainer":$template
	});
	// recommended average
	loadReviewRecommendedAverage (content, {
		"parentContainer":$template
	});
	// write review button
	loadWriteReviewButton ("Review This Product", {
		"parentContainer":$template,
		"productId":settings["productId"]
	});
}

/* OVERALL AVERAGES DATA */

function loadReviewRatingAverage (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultOverallRatingContainer,
		"viewContainer":defaultOverallRatingContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var averageOverallRating = content['AverageOverallRating'].toFixed(defaultDecimalOptions["overallAverage"]);
	var overallRatingRange = content['OverallRatingRange'].toFixed(defaultDecimalOptions["overallRange"]);
	// add rating template
	$container.append($template);
	// set star value
	setStarRating ($template, averageOverallRating, overallRatingRange);
	// set rating value
	$($template).find(defaultOverallRatingValueContainer).andSelf().filter(defaultOverallRatingValueContainer).html(averageOverallRating);
	// set rating range value
	$($template).find(defaultOverallRatingRangeContainer).andSelf().filter(defaultOverallRatingRangeContainer).html(overallRatingRange);
}

function loadReviewRecommendedAverage (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultRecommendedAverageContainer,
		"viewContainer":defaultReviewRecommededContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var recommendedYesCount = content['RecommendedCount'];
	var recommendedNoCount = content['NotRecommendedCount'];
	var recommendedTotalCount = (recommendedYesCount + recommendedNoCount);
	var recommendedPercentage = (recommendedYesCount/recommendedTotalCount);
	var recommendedPercentageFormatted = convertDecimalToPercentage(recommendedPercentage);
	var recommendedAverageText = "<span>" + recommendedPercentageFormatted + "%</span> of reviewers would recommeded this product to a friend (" + recommendedYesCount + " out of " + recommendedTotalCount + ")";
	// add recommended template
	$container.append($template);
	// set recommended text
	$($template).find(defaultIsRecommendedValueContainer).andSelf().filter(defaultIsRecommendedValueContainer).html(recommendedAverageText);
}

/* REVIEW RATINGS DATA */

function loadReviewRating (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultOverallRatingContainer,
		"viewContainer":defaultOverallRatingContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var value = content['Rating'].toFixed(defaultDecimalOptions["overall"]);
	var valueRange = content['RatingRange'].toFixed(defaultDecimalOptions["overallRange"]);
	var labelText = "Overall Rating";
	// add rating template
	$container.append($template);
	// set star value
	setStarRating ($template, value, valueRange);
	// set rating label (title)
	$($template).find(defaultOverallRatingLabelTextContainer).andSelf().filter(defaultOverallRatingLabelTextContainer).html(labelText);
	// set rating value
	$($template).find(defaultOverallRatingValueContainer).andSelf().filter(defaultOverallRatingValueContainer).html(value);
	// set rating range value
	$($template).find(defaultOverallRatingRangeContainer).andSelf().filter(defaultOverallRatingRangeContainer).html(valueRange);
}

function loadReviewSecondaryRatings (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultSecondaryRatingGroupContainer,
		"viewContainer":defaultSecondaryRatingIndividualContainerView,
		"loadOrder":content["SecondaryRatingsOrder"],
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(index) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// current iteration of loop
			var cur = settings["loadOrder"][index];
			// set text variables
			var id = content["SecondaryRatings"][cur]["Id"];
			var value = content["SecondaryRatings"][cur]["Value"].toFixed(defaultDecimalOptions["secondary"]);
			var valueRange = content["SecondaryRatings"][cur]["ValueRange"].toFixed(defaultDecimalOptions["secondaryRange"]);
			var valueLabelText = content["SecondaryRatings"][cur]["ValueLabel"];
			var labelText = content["SecondaryRatings"][cur]["Label"];
			var labelMinText = content["SecondaryRatings"][cur]["MinLabel"];
			var labelMaxText = content["SecondaryRatings"][cur]["MaxLabel"];
			var displayType = content["SecondaryRatings"][cur]["DisplayType"];
			// set class variables
			var labelClass = "BVRating" + id;
			var valueClass = "BVRating" + value;
			// add rating template
			$container.append($template);
			// set star value
			setStarRating ($template, value, valueRange);
			// set rating label (title)
			$($template).find(defaultSecondaryRatingLabelTextContainer).andSelf().filter(defaultSecondaryRatingLabelTextContainer).html(labelText);
			// set rating value
			$($template).find(defaultSecondaryRatingValueContainer).andSelf().filter(defaultSecondaryRatingValueContainer).html(value);
			// set rating range value
			$($template).find(defaultSecondaryRatingRangeContainer).andSelf().filter(defaultSecondaryRatingRangeContainer).html(valueRange);
		});
	}
}

/* REVIEW TEXT DATA */

function loadReviewTitle (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewTitleContainer,
		"viewContainer":defaultReviewTitleContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var reviewTitleValue = content['Title'];
	// add title template
	$container.append($template);
	// set title value
	$($template).find(defaultReviewTitleTextContainer).andSelf().filter(defaultReviewTitleTextContainer).html(reviewTitleValue);
}

function loadReviewBody (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewBodyTextContainer,
		"viewContainer":defaultReviewBodyTextContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var bodyTextValue = content['ReviewText'];
	// add body template
	$container.append($template);
	// set body value
	$($template).find(defaultReviewBodyTextTextContainer).andSelf().filter(defaultReviewBodyTextTextContainer).html(bodyTextValue);
}

function loadReviewDate (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewDateContainer,
		"viewContainer":defaultReviewDateContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// format date
	var dateTextValue = $.format.date(content['SubmissionTime'], "MMMM dd, yyyy");
	// add date template
	$container.append($template);
	// set date value
	$($template).find(defaultReviewDateTextContainer).andSelf().filter(defaultReviewDateTextContainer).html(dateTextValue);
}

function loadReviewRecommended (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewRecommendedContainer,
		"viewContainer":defaultReviewRecommededContainerView,
	}, options);
	if (content['IsRecommended']) {
		// set container & template
		var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
		var $template = returnTemplate(settings["viewContainer"]);
		// set variables
		var isRecommendedValue = "I would recommend this to a friend!";
		var isNotRecommendedValue = "No, I do not recommend this product.";
		// add recommended template
		$container.append($template);
		// set value
		if (content['IsRecommended'] == true) {
			$($template).find(defaultIsRecommendedValueContainer).andSelf().filter(defaultIsRecommendedValueContainer).html(isRecommendedValue);
		} else if (content['IsRecommended'] == false) {
			$($template).find(defaultIsRecommendedValueContainer).andSelf().filter(defaultIsRecommendedValueContainer).html(isNotRecommendedValue);
		} else {
			return;
		}
	}
}

/* TAGS - (PROS/CONS) */

function loadReviewTagGroups (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewTagGroupContainer,
		"viewContainer":defaultReviewTagsContainerView,
		"loadOrder":content["TagDimensionsOrder"],
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(index) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// current iteration of loop
			var cur = settings["loadOrder"][index];
			// set variables
			var id = content["TagDimensions"][cur]["Id"];
			var labelText = content["TagDimensions"][cur]["Label"];
			var valuesArray = content["TagDimensions"][cur]["Values"];
			// set class variables
			var labelClass = "BVTags" + id;
			// add tag group template
			$container.append($template);
			// set tag label (title)
			$($template).find(defaultReviewTagLabelTextContainer).andSelf().filter(defaultReviewTagLabelTextContainer).html(labelText);
			// load tags
			$.each(valuesArray, function(index) {
				if ((index + 1) == valuesArray.length) {
					loadReviewTagIndividual (this, {
						"parentContainer":$template,
						"viewContainer":defaultReviewTagLastContainerView,
					});
				} else {
					loadReviewTagIndividual (this, {
						"parentContainer":$template,
					});

				}
			});
		});
	}
}

function loadReviewTagIndividual (content, options) {
	// content expected [<review content>]["TagDimensions"][<tag name>]["Values"]
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewTagIndividualContainer,
		"viewContainer":defaultReviewTagContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var tagText = content;
	// add tag template
	$container.append($template);
	// set tag text
	$($template).find(defaultReviewTagTextContainer).andSelf().filter(defaultReviewTagTextContainer).html(tagText);
}

/* USER DATA */

function loadReviewUserNickname (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewUserNicknameContainer,
		"viewContainer":defaultReviewUserNicknameContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var userNicknameText = content['UserNickname'];
	// add nickname template
	$container.append($template);
	// set nickname value
	$($template).find(defaultReviewUserNicknameTextContainer).andSelf().filter(defaultReviewUserNicknameTextContainer).html(userNicknameText);
}

function loadReviewUserLocation (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewUserLocationContainer,
		"viewContainer":defaultReviewUserLocationContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var userLocationText = content['UserLocation'];
	// add location template
	$container.append($template);
	// set location value
	$($template).find(defaultReviewUserLocationTextContainer).andSelf().filter(defaultReviewUserLocationTextContainer).html(userLocationText);
}

/* CONTEXT DATA VALUES (CDVs) */

function loadReviewContextDataValuesGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewContextDataValueGroupContainer,
		"viewContainer":defaultReviewContextDataValueContainerView,
		"loadOrder":content["ContextDataValuesOrder"],
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(index) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
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
			$($template).find(defaultReviewContextDataValueLabelTextContainer).andSelf().filter(defaultReviewContextDataValueLabelTextContainer).html(labelText);
			// set cdv value
			$($template).find(defaultReviewContextDataValueTextContainer).andSelf().filter(defaultReviewContextDataValueTextContainer).html(valueText);
		});
	} else {
		$(settings["targetContainer"]).remove();
	}
}

/* ADDITIONAL FIELDS */

function loadReviewAdditionalFieldsGroups (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewAdditionalFieldGroupContainer,
		"viewContainer":defaultReviewAdditionalFieldContainerView,
		"loadOrder":content["AdditionalFieldsOrder"],
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(index) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// current iteration of loop
			var cur = settings["loadOrder"][index];
			// set variables
			var id = content["AdditionalFields"][cur]["Id"];
			var valueText = content["AdditionalFields"][cur]["Value"];
			var labelText = content["AdditionalFields"][cur]["Label"];
			// set class variables
			var labelClass = "BVAdditionalFields" + id;
			var valueClass = "BVAdditionalFields" + valueText;
			// add additional field template
			$container.append($template);
			// set additional field label (title)
			$($template).find(defaultReviewAdditionalFieldLabelTextContainer).andSelf().filter(defaultReviewAdditionalFieldLabelTextContainer).html(labelText);
			// set additional field value
			$($template).find(defaultReviewAdditionalFieldTextContainer).andSelf().filter(defaultReviewAdditionalFieldTextContainer).html(valueText);
		});
	}
}

/* MEDIA - PHOTO & VIDEO */

function loadReviewPhotosGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewPhotoGroupContainer,
		"viewContainer":defaultReviewPhotoContainerView,
		"loadOrder":content["Photos"],
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(index) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
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
			$($template).find(defaultReviewPhotoThumbnailContainer).andSelf().filter(defaultReviewPhotoThumbnailContainer).html(thumbnail).attr({"href":photoUrl,"title":captionText});
			// set photo
			//$($template).find(defaultReviewPhotoIndividualContainer).andSelf().filter(defaultReviewPhotoIndividualContainer).html(photo);
			// set caption
			//$($template).find(defaultReviewPhotoCaptionContainer).andSelf().filter(defaultReviewPhotoCaptionContainer).html(captionText);
		});
	}
}

function loadReviewVideosGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // template must be defined in call
		"targetContainer":defaultReviewVideoGroupContainer,
		"viewContainer":defaultReviewVideoContainerView,
		"loadOrder":content["Videos"],
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(index) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
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
			$($template).find(defaultReviewVideoThumbnailContainer).andSelf().filter(defaultReviewVideoThumbnailContainer).html(thumbnail).attr({"href":videoUrl,"title":captionText});
			// set video
			//$($template).find(defaultReviewVideoIndividualContainer).andSelf().filter(defaultReviewVideoIndividualContainer).html(video);
			// set caption
			//$($template).find(defaultReviewVideoCaptionContainer).andSelf().filter(defaultReviewVideoCaptionContainer).html(captionText);
		});
	}
}
