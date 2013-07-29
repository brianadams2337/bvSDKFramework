/***** FILTERS *****/



function loadFiltersOverallRating (content, options) {
	var filtersToLoad = content["RatingDistribution"]; // review stats
	var defaultLoadOrder = new Array();
	$.each(filtersToLoad, function() {
		defaultLoadOrder.push(this);
	});
	var settings = $.extend(true, {
		"parentContainer":"", // value needs to be set when called
		"targetContainer":defaultFilterGroupContainer,
		"viewContainer":defaultFilterGroupContainerView,
		"loadOrder":defaultLoadOrder,
		"productId":"",
		"modelLocalDefaultSettings":"",
		"filterSettings":{
			"displayCount":5,
			"popinBool":false,
			"onClickBool":false,
			"showCountBool":true
		},
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllercontrollerSettings":""
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async:false,
		success: function(container) {
			var $container = $(container);
			// create ratings distribution to match other distribution objects from json repsonse
			var ratingsDistribution = {
				"Id":"rating",
				"Label":"Overall Rating",
				"Values":[]
			};
			$.each(settings["loadOrder"], function() {
				var obj = new Object;
				obj["Count"] = this["Count"];
				obj["Value"] = this["RatingValue"];
				obj["Label"] = labelsFilterOverallRating[this["RatingValue"]];
				ratingsDistribution["Values"].push(obj);
			});
			// set variables
			var id = ratingsDistribution["Id"];
			var labelText = ratingsDistribution["Label"];
			var valuesArray = ratingsDistribution["Values"];
			// set class variables
			var labelClass = "BVFilters" + id;
			// set filter label (title)
			$container.find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).text(labelText);
			// load filters
			loadIndividualFilters (ratingsDistribution, {
				"parentContainer":$container,
				"loadOrder":ratingsDistribution["Values"],
				"viewReloadOptions":settings["viewReloadOptions"]
			});
			// add filters template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadFiltersSecondaryRatings (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // value needs to be set when called
		"targetContainer":defaultFilterGroupContainer,
		"viewContainer":defaultFilterGroupContainerView,
		"loadOrder":content["SecondaryRatingsAveragesOrder"],
		"productId":"",
		"modelLocalDefaultSettings":"",
		"filterSettings":{
			"displayCount":5,
			"popinBool":false,
			"onClickBool":false,
			"showCountBool":true
		},
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllercontrollerSettings":""
		}
	}, options);
	$.each (settings["loadOrder"], function(key) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			success: function(container) {
				var $container = $(container);
				// current iteration of loop
				var cur = settings["loadOrder"][key];
				// create secondary ratings distribution to match other distribution objects from json repsonse
				var secondaryRatingsDistribution = {
					"Id":content["SecondaryRatingsAverages"][cur]["Id"],
					"Label":content["SecondaryRatingsAverages"][cur]["Id"],
					"Values":[]
				};
				for (var i = 1; i <= 5; i++) {
					var obj = new Object;
					obj["Count"] = 0;
					obj["Value"] = i;
					secondaryRatingsDistribution["Values"].push(obj);
				}
				// add prefix to id
				secondaryRatingsDistribution["Id"] = "secondaryrating_" + secondaryRatingsDistribution["Id"];
				// set variables
				var id = secondaryRatingsDistribution["Id"];
				var labelText = secondaryRatingsDistribution["Label"];
				var valuesArray = secondaryRatingsDistribution["Values"];
				// set class variables
				var labelClass = "BVFilters" + id;
				// set filter label (title)
				$container.find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).text(labelText);
				// load filters
				loadIndividualFilters (secondaryRatingsDistribution, {
					"parentContainer":$container,
					"loadOrder":valuesArray,
					"viewReloadOptions":settings["viewReloadOptions"]
				});
				// add filters template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		})
	});
}

function loadFiltersContextDataValues (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // value needs to be set when called
		"targetContainer":defaultFilterGroupContainer,
		"viewContainer":defaultFilterGroupContainerView,
		"loadOrder":content["ContextDataDistributionOrder"],
		"productId":"",
		"modelLocalDefaultSettings":"",
		"filterSettings":{
			"displayCount":5,
			"popinBool":false,
			"onClickBool":false,
			"showCountBool":true
		},
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllercontrollerSettings":""
		}
	}, options);
	$.each (settings["loadOrder"], function(key) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			success: function(container) {
				var $container = $(container);
				// current iteration of loop
				var cur = settings["loadOrder"][key];
				// add prefix to id
				content["ContextDataDistribution"][cur]["Id"] = "contextdatavalue_" + content["ContextDataDistribution"][cur]["Id"];
				// set variables
				var id = content["ContextDataDistribution"][cur]["Id"];
				var labelText = content["ContextDataDistribution"][cur]["Label"];
				var valuesArray = content["ContextDataDistribution"][cur]["Values"];
				// set class variables
				var labelClass = "BVFilters" + id;
				// set filter label (title)
				$container.find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).text(labelText);
				// load filters
				loadIndividualFilters (content["ContextDataDistribution"][cur], {
					"parentContainer":$container,
					"loadOrder":valuesArray,
					"viewReloadOptions":settings["viewReloadOptions"]
				});
				// add filters template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		})
	});
}

function loadFiltersAdditionalFields (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // value needs to be set when called
		"targetContainer":defaultFilterGroupContainer,
		"viewContainer":defaultFilterGroupContainerView,
		"loadOrder":content["AdditionalFieldDistributionOrder"],
		"productId":"",
		"modelLocalDefaultSettings":"",
		"filterSettings":{
			"displayCount":5,
			"popinBool":false,
			"onClickBool":false,
			"showCountBool":true
		},
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllercontrollerSettings":""
		}
	}, options);
	$.each (settings["loadOrder"], function(key) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			success: function(container) {
				var $container = $(container);
				// current iteration of loop
				var cur = settings["loadOrder"][key];
				// add prefix to id
				content["AdditionalFieldDistribution"][cur]["Id"] = "additionalfield_" + content["AdditionalFieldDistribution"][cur]["Id"];
				// set variables
				var id = content["AdditionalFieldDistribution"][cur]["Id"];
				var labelText = content["AdditionalFieldDistribution"][cur]["Label"];
				var valuesArray = content["AdditionalFieldDistribution"][cur]["Values"];
				// set class variables
				var labelClass = "BVFilters" + id;
				// set filter label (title)
				$container.find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).text(labelText);
				// load filters
				loadIndividualFilters (content["AdditionalFieldDistribution"][cur], {
					"parentContainer":$container,
					"loadOrder":valuesArray,
					"viewReloadOptions":settings["viewReloadOptions"]
				});
				// add filters template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		})
	});
}

function loadFiltersTags (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // value needs to be set when called
		"targetContainer":defaultFilterGroupContainer,
		"viewContainer":defaultFilterGroupContainerView,
		"loadOrder":content["TagDistributionOrder"],
		"productId":"",
		"modelLocalDefaultSettings":"",
		"filterSettings":{
			"displayCount":5,
			"popinBool":false,
			"onClickBool":false,
			"showCountBool":true
		},
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllercontrollerSettings":""
		}
	}, options);
	$.each (settings["loadOrder"], function(key) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			success: function(container) {
				var $container = $(container);
				// current iteration of loop
				var cur = settings["loadOrder"][key];
				// add prefix to id
				content["TagDistribution"][cur]["Id"] = "tag_" + content["TagDistribution"][cur]["Id"];
				// set variables
				var id = content["TagDistribution"][cur]["Id"];
				var labelText = content["TagDistribution"][cur]["Label"];
				var valuesArray = content["TagDistribution"][cur]["Values"];
				// set class variables
				var labelClass = "BVFilters" + id;
				// set filter label (title)
				$container.find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).text(labelText);
				// load filters
				loadIndividualFilters (content["TagDistribution"][cur], {
					"parentContainer":$container,
					"loadOrder":valuesArray,
					"viewReloadOptions":settings["viewReloadOptions"]
				});
				// add filters template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		})
	});
}

function loadIndividualFilters (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // value needs to be set when called
		"targetContainer":defaultFilterIndividualContainer,
		"viewContainer":defaultFilterIndividualContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":"",
		"filterSettings":{
			"displayCount":5,
			"popinBool":false,
			"onClickBool":false,
			"showCountBool":true
		},
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllercontrollerSettings":""
		}
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
				var filterText = content["Values"][key]["Label"];
				var filterCountText = content["Values"][key]["Count"];
				// set filter text
				$container.attr({
					"data-filter-parameter":content["Id"],
					"data-filter-value":content["Values"][key]["Value"]
				});
				$container.find(defaultReviewFilterTextContainer).andSelf().filter(defaultReviewFilterTextContainer).text(filterText);
				$container.find(defaultReviewFilterCountTextContainer).andSelf().filter(defaultReviewFilterCountTextContainer).text(filterCountText);
				// filter option functionality
				$container.click(function(){
					var refreshContainer = $(settings["viewReloadOptions"]["controllerSettings"]["parentContainer"]).find(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]).andSelf().filter(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]);
					var selected = $(this).attr("data-filter-parameter");
					var selectedValue = $(this).attr("data-filter-value");
					loadingContainerAnimation(refreshContainer, function() {
						//settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"] = {};
						settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = selectedValue;
						settings["viewReloadOptions"]["model"] (
							settings["productId"],
							function(content) {
								// callback function
								settings["viewReloadOptions"]["controller"](content, settings["viewReloadOptions"]["controllerSettings"]);
							},
							settings["viewReloadOptions"]["modelSettings"]
						);
					});
				});
				// add filter container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);				
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}