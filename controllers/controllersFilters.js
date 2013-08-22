/***** FILTERS *****/



function loadFiltersOverallRating (content, options) {
	var defaultLoadOrder = new Array();
	var defaultLoadOrder = content["RatingDistribution"]; // review stats
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
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
			"controllerSettings":""
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// create ratings distribution to match other distribution objects from json repsonse
	var ratingsDistribution = {
		"Id":"rating",
		"Label":"Star rating...",
		"TotalResults":content["TotalReviewCount"],
		"Values":[]
	};
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function() {
			var obj = new Object;
			obj["Count"] = this["Count"];
			obj["Value"] = this["RatingValue"];
			obj["Label"] = labelsFilterOverallRating[this["RatingValue"]];
			ratingsDistribution["Values"].push(obj);
		});
	}
	// set variables
	var id = ratingsDistribution["Id"];
	var labelText = ratingsDistribution["Label"];
	var valuesArray = ratingsDistribution["Values"];
	// set class variables
	var labelClass = "BVFilters" + id;
	// add filter template
	$container.append($template);
	// set filter label (title)
	$($template).find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).html(labelText);
	// load filters
	loadIndividualFilters (ratingsDistribution, {
		"parentContainer":$template,
		"viewContainer":defaultFilterIndividualHistogramContainerView,
		"loadOrder":ratingsDistribution["Values"].reverse(),
		"viewReloadOptions":settings["viewReloadOptions"],
		"filterSettings":{
			"showHistogramBool":true,
		},
	});
}

function loadFiltersSecondaryRatings (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
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
			"controllerSettings":""
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each (settings["loadOrder"], function(key) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
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
			// add filter template
			$container.append($template);
			// set filter label (title)
			$($template).find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).html(labelText);
			// load filters
			loadIndividualFilters (secondaryRatingsDistribution, {
				"parentContainer":$template,
				"loadOrder":valuesArray,
				"viewReloadOptions":settings["viewReloadOptions"]
			});
		});
	}
}

function loadFiltersContextDataValues (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
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
			"controllerSettings":""
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each (settings["loadOrder"], function(key) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
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
			// add filter template
			$container.append($template);
			// set filter label (title)
			$($template).find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).html(labelText);
			// load filters
			loadIndividualFilters (content["ContextDataDistribution"][cur], {
				"parentContainer":$template,
				"loadOrder":valuesArray,
				"viewReloadOptions":settings["viewReloadOptions"]
			});
		});
	}
}

function loadFiltersAdditionalFields (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
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
			"controllerSettings":""
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each (settings["loadOrder"], function(key) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
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
			// add filter template
			$container.append($template);
			// set filter label (title)
			$($template).find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).html(labelText);
			// load filters
			loadIndividualFilters (content["AdditionalFieldDistribution"][cur], {
				"parentContainer":$template,
				"loadOrder":valuesArray,
				"viewReloadOptions":settings["viewReloadOptions"]
			});
		});
	}
}

function loadFiltersTags (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
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
			"controllerSettings":""
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each (settings["loadOrder"], function(key) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
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
			// add filter template
			$container.append($template);
			// set filter label (title)
			$($template).find(defaultReviewFilterLabelTextContainer).andSelf().filter(defaultReviewFilterLabelTextContainer).html(labelText);
			// load filters
			loadIndividualFilters (content["TagDistribution"][cur], {
				"parentContainer":$template,
				"loadOrder":valuesArray,
				"viewReloadOptions":settings["viewReloadOptions"]
			});
		});
	}
}

function loadIndividualFilters (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFilterIndividualContainer,
		"viewContainer":defaultFilterIndividualContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":"",
		"filterSettings":{
			"displayCount":5,
			"popinBool":false,
			"onClickBool":false,
			"showCountBool":true,
			"showHistogramBool":false
		},
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllerSettings":""
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// set variables
			var filterText = new String();
			if (content["Values"][key]["Label"]) {
				var filterText = content["Values"][key]["Label"];
			} else {
				var filterText = content["Values"][key]["Value"];
			}
			var filterCountText = content["Values"][key]["Count"];
			// add filter template
			$container.append($template);
			// set filter data attributes
			$($template).attr({
				"data-filter-parameter":content["Id"],
				"data-filter-value":content["Values"][key]["Value"],
				"data-selected":"false",
				"data-disabled":"false"
			});
			// set selected/disabled state data attribute
			if (settings["viewReloadOptions"]["controllerSettings"]["modelLocalDefaultSettings"]["Parameters"]["filter"][content["Id"]] == content["Values"][key]["Value"]) {
				$($template).attr({
					"data-selected":"true",
				}).addClass("BVSelected");
			}
			// set filter text
			$($template).find(defaultReviewFilterTextContainer).andSelf().filter(defaultReviewFilterTextContainer).html(filterText);
			// set filter count text
			if (settings["filterSettings"]["showCountBool"]) {
				$($template).find(defaultReviewFilterCountTextContainer).andSelf().filter(defaultReviewFilterCountTextContainer).text(filterCountText);
			}
			// set histogram
			if (settings["filterSettings"]["showHistogramBool"]) {
				var histogramWidth = (filterCountText/content["TotalResults"]) * 100;
				$($template).find(defaultHistogramIndividualContainer).andSelf().filter(defaultHistogramIndividualContainer).css({
					"width":histogramWidth+"%",
				});
			}
			// filter option functionality
				$($template).click(function(){
					if ($(this).attr("data-selected") == "false") {
						var refreshContainer = $(settings["viewReloadOptions"]["controllerSettings"]["parentContainer"]).find(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]).andSelf().filter(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]);
						var selected = $(this).attr("data-filter-parameter");
						var selectedValue = $(this).attr("data-filter-value");
						// load new content based off of filter selection and current settings
						// update parameters for new api call
						// add selected filter
						settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = selectedValue;
						// reset offset to start from the beginning - 
						settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = 0;
						// make new api call
						settings["viewReloadOptions"]["model"] (
							// product id
							settings["productId"],
							// container to load
							refreshContainer,
							// controller callback
							function(content, modelLocalDefaultSettings) {
								// update model settings to represent new data (needed for selcted/disabled states for filters, sorting, and pagination)
								settings["viewReloadOptions"]["controllerSettings"]["modelLocalDefaultSettings"]["Parameters"] = modelLocalDefaultSettings;
								// callback function
								settings["viewReloadOptions"]["controller"](content, settings["viewReloadOptions"]["controllerSettings"]);
							},
							// api call parameters
							settings["viewReloadOptions"]["modelSettings"]
						);
					} else if ($(this).attr("data-selected") == "true") {
						var refreshContainer = $(settings["viewReloadOptions"]["controllerSettings"]["parentContainer"]).find(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]).andSelf().filter(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]);
						var selected = $(this).attr("data-filter-parameter");
						var selectedValue = null;
						// load new content based off of filter selection and current settings
						// update parameters for new api call
						// add selected filter
						settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = selectedValue;
						// reset offset to start from the beginning
						settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = 0;
						// make new api call
						settings["viewReloadOptions"]["model"] (
							// product id
							settings["productId"],
							// container to load
							refreshContainer,
							// controller callback
							function(content, modelLocalDefaultSettings) {
								// update model settings to represent new data (needed for selcted/disabled states for filters, sorting, and pagination)
								settings["viewReloadOptions"]["controllerSettings"]["modelLocalDefaultSettings"]["Parameters"] = modelLocalDefaultSettings;
								// callback function
								settings["viewReloadOptions"]["controller"](content, settings["viewReloadOptions"]["controllerSettings"]);
							},
							// api call parameters
							settings["viewReloadOptions"]["modelSettings"]
						);
					}
				});
		});
	}
}