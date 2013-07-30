/* DEFAULT REVIEWS FUNCTION */

function loadReviewWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"body",
		"targetContainer":defaultReviewsParentContainer,
		"viewContainer":"views/reviews/display/reviewWidgetContainer.html",
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);

			// add review widget template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);

			// set content variables
			var reviewsStatisticsToLoad = content["Includes"]["Products"][settings["productId"]]['ReviewStatistics']; // review stats
			var reviewsToLoad = content["Results"]; // reviews

			// load quick take
			loadQuickTake (reviewsStatisticsToLoad, {
				"parentContainer":$container,
				"productId":settings["productId"]
			});
			// load reviews
			$.each (reviewsToLoad, function(key) {
				loadIndividualReview (reviewsToLoad[key], {
					"parentContainer":$container,
					"productId":settings["productId"]
				});
			});
			// pagination
			loadNumberedPagination (content, {
				"parentContainer":$container,
				"targetContainer":"._BVReviewPaginationContainer",
				"viewReloadOptions":{
					"model":getAllReviews,
					"modelSettings":settings["modelLocalDefaultSettings"],
					"controller":loadReviewWidget,
					"controllerSettings":settings
				}
			});
			// sorting dropdown
			loadSortDropdown (content, {
				"parentContainer":$container,
				"loadOrder":defaultReviewSortLoadOrder,
				"viewReloadOptions":{
					"model":getAllReviews,
					"modelSettings":settings["modelLocalDefaultSettings"],
					"controller":loadReviewWidget,
					"controllerSettings":settings
				}
			});
			// filters
			loadFiltersOverallRating (content["Includes"]["Products"][settings["productId"]]['ReviewStatistics'], {
				"parentContainer":$container,
				"viewReloadOptions":{
					"model":getAllReviews,
					"modelSettings":settings["modelLocalDefaultSettings"],
					"controller":loadReviewWidget,
					"controllerSettings":settings
				}
			});
/*
			loadFiltersSecondaryRatings (content["Includes"]["Products"][settings["productId"]]['ReviewStatistics'], {
				"parentContainer":$container,
				"viewReloadOptions":{
					"model":getAllReviews,
					"modelSettings":settings["modelLocalDefaultSettings"],
					"controller":loadReviews,
					"controllerSettings":settings
				}
			});
			loadFiltersContextDataValues (content["Includes"]["Products"][settings["productId"]]['ReviewStatistics'], {
				"parentContainer":$container,
				"viewReloadOptions":{
					"model":getAllReviews,
					"modelSettings":settings["modelLocalDefaultSettings"],
					"controller":loadReviews,
					"controllerSettings":settings
				}
			});
			loadFiltersTags (content["Includes"]["Products"][settings["productId"]]['ReviewStatistics'], {
				"parentContainer":$container,
				"viewReloadOptions":{
					"model":getAllReviews,
					"modelSettings":settings["modelLocalDefaultSettings"],
					"controller":loadReviews,
					"controllerSettings":settings
				}
			});
*/
			// set classes
			addOddEvenClasses (defaultReviewContainer);
			addFirstLastClasses (defaultReviewContainer);
	
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadIndividualReview (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewsParentContainer,
		"targetContainer":defaultReviewsBodyContainer,
		"viewContainer":defaultReviewContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	// get a new id for the review container using review id - this will be needed for reference on child elements
	var contentId = content["Id"]
	var newID = "BVReviewContainer" + contentId;
	// inject review content
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add review template container
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).attr("id", newID));
			// load review rating
			loadReviewRating (content, {
				"parentContainer":$container
			});
			// load review secondary ratings
			loadReviewSecondaryRatings (content, {
				"parentContainer":$container
			});
			// load review recommended
			loadReviewRecommended (content, {
				"parentContainer":$container
			});
			// load review date
			loadReviewDate (content, {
				"parentContainer":$container
			});
			// load review title
			loadReviewTitle (content, {
				"parentContainer":$container
			});
			// load review text
			loadReviewBody (content, {
				"parentContainer":$container
			});
			// load review user nickname
			loadReviewUserNickname (content, {
				"parentContainer":$container
			});
			// load review user location
			loadReviewUserLocation (content, {
				"parentContainer":$container
			});
			// load review cdvs
			loadReviewContextDataValuesGroup (content, {
				"parentContainer":$container
			});
			// load review tags
			loadReviewTagGroups(content, {
				"parentContainer":$container
			});
			// load review photos
			loadReviewPhotosGroup(content, {
				"parentContainer":$container
			});
			// load review videos
			loadReviewVideosGroup(content, {
				"parentContainer":$container
			});
			// load review badges
			loadReviewBadges(content, {
				"parentContainer":$container
			});

			// load review feedback
			loadFeedback(content, {
				"parentContainer":$container,
				"productId":settings["productId"],
				"contentId":contentId,
				"feedbackSettings":{
					"contentType":"review"
				}
			});

			// load comments if available
			if (content["TotalCommentCount"] != undefined) {
				getAllReviewComments (contentId, function(content, modelLocalDefaultSettings) {
					loadReviewCommentsWidget (content, {
						"parentContainer":$container,
						"productId":settings["productId"],
						"contentId":contentId,
						"modelLocalDefaultSettings":modelLocalDefaultSettings
					});
				}, {
					"Parameters":{
						"filter":{
							//"hasvideos":false
						}
					}
				});
			} 
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

/* DEFAULT QUICKTAKE FUNCTION */

function loadQuickTake (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewsParentContainer,
		"targetContainer":defaultQuickTakeContainer,
		"viewContainer":defaultQuickTakeContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$(settings["targetContainer"]).hide();
	$.when(
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async:false,
			success: function(container) {
				var $container = $(container);
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
				
				// overall rating average
				loadReviewRatingAverage (content, {
					"parentContainer":$container
				});

				// recommended average
				loadReviewRecommendedAverage (content, {
					"parentContainer":$container
				});

				// write review button
				loadWriteReviewButton ("Review This Product", {
					"parentContainer":$container,
					"productId":settings["productId"]
				});

			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		})
	).done(function(){
		$(settings["targetContainer"]).show();
		$(settings["parentContainer"]).removeClass("_BVContentLoadingContainer");
	});
}

/* OVERALL AVERAGES DATA */

function loadReviewRatingAverage (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewsParentContainer,
		"targetContainer":defaultOverallRatingContainer,
		"viewContainer":defaultOverallRatingContainerView,
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
			var averageOverallRating = content['AverageOverallRating'];
			var overallRatingRange = content['OverallRatingRange'];
			// set rating value
			$container.find(defaultOverallRatingValueContainer).andSelf().filter(defaultOverallRatingValueContainer).text(averageOverallRating);
			// set rating range value
			$container.find(defaultOverallRatingRangeContainer).andSelf().filter(defaultOverallRatingRangeContainer).text(overallRatingRange);
			// add rating template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// set star value
			setStarRating ($container, averageOverallRating, overallRatingRange);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadReviewRecommendedAverage (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewsParentContainer,
		"targetContainer":defaultRecommendedAverageContainer,
		"viewContainer":defaultReviewRecommededContainerView,
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
			var recommendedYesCount = content['RecommendedCount'];
			var recommendedNoCount = content['NotRecommendedCount'];
			var recommendedTotalCount = (recommendedYesCount + recommendedNoCount);
			var recommendedPercentage = (recommendedYesCount/recommendedTotalCount);
			var recommendedPercentageFormatted = convertDecimalToPercentage(recommendedPercentage);
			// set text variable_BVReviewContainer
			var recommendedAverageText = recommendedPercentageFormatted + "% of reviewers would recommeded this product to a friend (" + recommendedYesCount + " out of " + recommendedTotalCount + ")";
			// set average recommended text
			$container.find(defaultIsRecommendedValueContainer).andSelf().filter(defaultIsRecommendedValueContainer).text(recommendedAverageText);
			// add average recommended template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

/* REVIEW RATINGS DATA */

function loadReviewRating (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer, // this should be set to the id of the review container to ensure it does not override ratings section on all reviews
		"targetContainer":defaultOverallRatingContainer,
		"viewContainer":defaultOverallRatingContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// variables
			var id = "Overall";				
			var value = content['Rating'];
			var valueRange = content['RatingRange'];
			var labelText = "Overall Rating";
			// set rating label (title)
			$container.find(defaultOverallRatingLabelTextContainer).andSelf().filter(defaultOverallRatingLabelTextContainer).text(labelText);
			// set rating value
			$container.find(defaultOverallRatingValueContainer).andSelf().filter(defaultOverallRatingValueContainer).text(value);
			// set rating range value
			$container.find(defaultOverallRatingRangeContainer).andSelf().filter(defaultOverallRatingRangeContainer).text(valueRange);
			// add rating template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// set star value
			setStarRating ($container, value, valueRange);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadReviewSecondaryRatings (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultSecondaryRatingGroupContainer,
		"viewContainer":defaultSecondaryRatingIndividualContainerView,
		"loadOrder":content["SecondaryRatingsOrder"],
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
				var id = content["SecondaryRatings"][cur]["Id"];
				var value = content["SecondaryRatings"][cur]["Value"];
				var valueRange = content["SecondaryRatings"][cur]["ValueRange"];
				var valueLabelText = content["SecondaryRatings"][cur]["ValueLabel"];
				var labelText = content["SecondaryRatings"][cur]["Label"];
				var labelMinText = content["SecondaryRatings"][cur]["MinLabel"];
				var labelMaxText = content["SecondaryRatings"][cur]["MaxLabel"];
				var displayType = content["SecondaryRatings"][cur]["DisplayType"];
				// set class variables
				var labelClass = "BVRating" + id;
				var valueClass = "BVRating" + value;
				// set rating label (title)
				$container.find(defaultSecondaryRatingLabelTextContainer).andSelf().filter(defaultSecondaryRatingLabelTextContainer).text(labelText);
				// set rating value
				$container.find(defaultSecondaryRatingValueContainer).andSelf().filter(defaultSecondaryRatingValueContainer).text(value);
				// set rating range value
				$container.find(defaultSecondaryRatingRangeContainer).andSelf().filter(defaultSecondaryRatingRangeContainer).text(valueRange);
				// add ratings container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
				// set star value
				setStarRating ($container, value, valueRange);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

/* REVIEW TEXT DATA */

function loadReviewTitle (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewTitleContainer,
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
			var reviewTitleValue = content['Title'];
			// set title value
			$container.find(defaultReviewTitleTextContainer).andSelf().filter(defaultReviewTitleTextContainer).text(reviewTitleValue);
			// add title template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadReviewBody (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewBodyTextContainer,
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
			var bodyTextValue = content['ReviewText'];
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

function loadReviewDate (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewDateContainer,
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

function loadReviewRecommended (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewRecommendedContainer,
		"viewContainer":defaultReviewRecommededContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	if (content['IsRecommended']) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			success: function(container) {
				var $container = $(container);
				// set variables
				var isRecommendedValue = "I would recommend this to a friend!";
				var isNotRecommendedValue = "No, I do not recommend this product.";
				// set value
				if (content['IsRecommended'] == true) {
					$container.find(defaultIsRecommendedValueContainer).andSelf().filter(defaultIsRecommendedValueContainer).text(isRecommendedValue);
				} else if (content['IsRecommended'] == false) {
					$container.find(defaultIsRecommendedValueContainer).andSelf().filter(defaultIsRecommendedValueContainer).text(isNotRecommendedValue);
				} else {
					return;
				}
				// add recommended template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	}
}

/* TAGS - (PROS/CONS) */

function loadReviewTagGroups (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewTagGroupContainer,
		"viewContainer":defaultReviewTagsContainerView,
		"loadOrder":content["TagDimensionsOrder"],
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
				// set variables
				var id = content["TagDimensions"][cur]["Id"];
				var labelText = content["TagDimensions"][cur]["Label"];
				var valuesArray = content["TagDimensions"][cur]["Values"];
				// set class variables
				var labelClass = "BVTags" + id;
				// set tag label (title)
				$container.find(defaultReviewTagLabelTextContainer).andSelf().filter(defaultReviewTagLabelTextContainer).text(labelText);
				// add tags container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
				// load tags
				loadReviewTagIndividual (valuesArray, {
					"parentContainer":settings["parentContainer"],
					"targetContainer":$container
				});
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

function loadReviewTagIndividual (content, options) {
	// content expected [<review content>]["TagDimensions"][<tag name>]["Values"]
	var settings = $.extend(true, {
		"parentContainer":defaultReviewTagGroupContainer,
		"targetContainer":defaultReviewTagIndividualContainer,
		"viewContainer":defaultReviewTagContainerView,
		"loadOrder":content,
		"productId":""
	}, options);
	$.each(settings["loadOrder"], function(key) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// set variables
				var tagText = content[key];
				// set tag text
				$container.find(defaultReviewTagTextContainer).andSelf().filter(defaultReviewTagTextContainer).text(tagText);
				// add tag container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);				
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

/* USER DATA */

function loadReviewUserNickname (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewUserNicknameContainer,
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
			$container.find(defaultReviewUserNicknameTextContainer).andSelf().filter(defaultReviewUserNicknameTextContainer).text(userNicknameText);
			// add nickname template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadReviewUserLocation (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewUserLocationContainer,
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
			// set location value
			$container.find(defaultReviewUserLocationTextContainer).andSelf().filter(defaultReviewUserLocationTextContainer).text(userLocationText);
			// add location template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

/* CONTEXT DATA VALUES (CDVs) */

function loadReviewContextDataValuesGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewContextDataValueGroupContainer,
		"viewContainer":defaultReviewContextDataValueContainerView,
		"loadOrder":content["ContextDataValuesOrder"],
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
				// set variables
				var id = content["ContextDataValues"][cur]["Id"];
				var value = content["ContextDataValues"][cur]["Value"];
				var valueText = content["ContextDataValues"][cur]["ValueLabel"];
				var labelText = content["ContextDataValues"][cur]["DimensionLabel"];
				// set class variables
				var labelClass = "BVContextDataValue" + id;
				var valueClass = "BVContextDataValue" + value;
				// set CDV label (title)
				$container.find(defaultReviewContextDataValueLabelTextContainer).andSelf().filter(defaultReviewContextDataValueLabelTextContainer).text(labelText);
				// set CDV value
				$container.find(defaultReviewContextDataValueTextContainer).andSelf().filter(defaultReviewContextDataValueTextContainer).text(valueText);
				// add CDVs container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).addClass(labelClass));
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

/* ADDITIONAL FIELDS */

function loadReviewAdditionalFieldsGroups (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewAdditionalFieldGroupContainer,
		"viewContainer":defaultReviewAdditionalFieldContainerView,
		"loadOrder":content["AdditionalFieldsOrder"],
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
				// set variables
				var id = content["AdditionalFields"][cur]["Id"];
				var value = content["AdditionalFields"][cur]["Value"];
				var valueText = content["AdditionalFields"][cur]["ValueLabel"];
				var labelText = content["AdditionalFields"][cur]["DimensionLabel"];
				// set class variables
				var labelClass = "BVAdditionalFields" + id;
				var valueClass = "BVAdditionalFields" + value;
				// set additional field label (title)
				$container.find(defaultReviewAdditionalFieldLabelTextContainer).andSelf().filter(defaultReviewAdditionalFieldLabelTextContainer).text(labelText);
				// set additional field value
				$container.find(defaultReviewAdditionalFieldTextContainer).andSelf().filter(defaultReviewAdditionalFieldTextContainer).text(valueText);
				// add additional fields container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).addClass(labelClass));
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

/* MEDIA - PHOTO & VIDEO */

function loadReviewPhotosGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewPhotoGroupContainer,
		"viewContainer":defaultReviewPhotoContainerView,
		"loadOrder":content["Photos"],
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
				$container.find(defaultReviewPhotoThumbnailContainer).andSelf().filter(defaultReviewPhotoThumbnailContainer).html(thumbnail).attr({"href":photoUrl,"title":captionText});
				// set photo
				//$container.find(defaultReviewPhotoIndividualContainer).andSelf().filter(defaultReviewPhotoIndividualContainer).html(photo);
				// set caption
				//$container.find(defaultReviewPhotoCaptionContainer).andSelf().filter(defaultReviewPhotoCaptionContainer).text(captionText);
				// add photo container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).addClass(labelClass));
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

function loadReviewVideosGroup (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultReviewVideoGroupContainer,
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
				$container.find(defaultReviewVideoThumbnailContainer).andSelf().filter(defaultReviewVideoThumbnailContainer).html(thumbnail).attr({"href":videoUrl,"title":captionText});
				// set video
				//$container.find(defaultReviewVideoIndividualContainer).andSelf().filter(defaultReviewVideoIndividualContainer).html(video);
				// set caption
				//$container.find(defaultReviewVideoCaptionContainer).andSelf().filter(defaultReviewVideoCaptionContainer).text(captionText);
				// add video container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).addClass(labelClass));
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}


