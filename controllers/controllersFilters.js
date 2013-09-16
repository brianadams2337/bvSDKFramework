/***** FILTERS *****/



function loadFiltersOverallRating (content, options) {
	var defaultLoadOrder = new Array();
	// var defaultLoadOrder = content["RatingDistribution"]; // review stats
	var defaultLoadOrder = [
		{"Value":"5"},
		{"Value":"4"},
		{"Value":"3"},
		{"Value":"2"},
		{"Value":"1"},
	];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFilterGroupContainer,
		"viewContainer":defaultFilterGroupContainerView,
		"loadOrder":defaultLoadOrder,
		"productId":"",
		"modelLocalDefaultSettings":"",
		"filterSettings":{
			"displayCount":5,
			"multipleSelect":false,
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
		$.each(settings["loadOrder"], function(index) {
			var filterValue = this["Value"];
			var filter = $.grep(content["RatingDistribution"], function(filter) {
				return filter.RatingValue == filterValue;
			});
			if (filter.length > 0) {
				var obj = new Object;
				obj["Count"] = filter[0]["Count"];
				obj["Value"] = filter[0]["RatingValue"];
				obj["Label"] = labelsFilterOverallRating[filter[0]["RatingValue"]];
				ratingsDistribution["Values"].push(obj);
			} else {
				var obj = new Object;
				obj["Count"] = 0;
				obj["Value"] = filterValue;
				obj["Label"] = labelsFilterOverallRating[filterValue];
				ratingsDistribution["Values"].push(obj);
			}
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
		"loadOrder":ratingsDistribution["Values"],
		"viewReloadOptions":settings["viewReloadOptions"],
		"filterSettings":{
			"showHistogramBool":true,
			"multipleSelect":true,
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
			"multipleSelect":false,
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
			"multipleSelect":true,
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
			"multipleSelect":true,
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
			"multipleSelect":true,
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
			"multipleSelect":true,
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
			var multipleSelect = settings["filterSettings"]["multipleSelect"];
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
			// set selected filter
			if ((settings["viewReloadOptions"]["controllerSettings"]["modelLocalDefaultSettings"]["Parameters"]["filter"][content["Id"]] == content["Values"][key]["Value"]) || ($.inArray(content["Values"][key]["Value"], settings["viewReloadOptions"]["controllerSettings"]["modelLocalDefaultSettings"]["Parameters"]["filter"][content["Id"]]) > -1)) {
				$($template).attr({
					"data-selected":"true",
				}).addClass("BVSelected");
			}
			// set disabled filter
			if (filterCountText == 0) {
				$($template).attr({
					"data-disabled":"true",
				}).addClass("BVDisabled");
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
				if ($(this).attr("data-disabled") == "false") {
					if ($(this).attr("data-selected") == "false") {
						var refreshContainer = $(settings["viewReloadOptions"]["controllerSettings"]["parentContainer"]).find(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]).andSelf().filter(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]);
						var selected = $(this).attr("data-filter-parameter");
						var selectedValue = $(this).attr("data-filter-value");
						// load new content based off of filter selection and current settings
						// update parameters for new api call
						// add selected filter
						// check if multiple filter option can be selected
						if (multipleSelect) {
							// check if filter already exists
							if (settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected]) {
								// check if existing filter is a string or an array
								if (typeof settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] === "string") {
									// convert string into array
									settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = [settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected]];
									// add new option to filter array
									settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected].push(selectedValue);
								} else {
									// add new filter option to existing filter array
									settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected].push(selectedValue);								
								}
							} else {
								// create array from selected option and set filter
								settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = [selectedValue];
							}
						} else {
							// set filter as string
							settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = selectedValue;
						}
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
					} else if ($(this).attr("data-selected") == "true") {
						var refreshContainer = $(settings["viewReloadOptions"]["controllerSettings"]["parentContainer"]).find(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]).andSelf().filter(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]);
						var selected = $(this).attr("data-filter-parameter");
						var selectedValue = $(this).attr("data-filter-value");
						// load new content based off of filter selection and current settings
						// update parameters for new api call
						// add selected filter
						// check if multiple filter option can be selected
						if (multipleSelect) {
							// verify filter already exists
							if (settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected]) {
								// check if existing filter is a string or an array
								if (typeof settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] === "string") {
									// set filter to null since the value is a string
									settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = null;
								} else {
									// check if more than one value is in array
									if (settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected].length > 1) {
										// multiple values exist - remove filter option from existing filter array
										settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = $.grep(settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected], function(value) {
											return value != selectedValue;
										});
									} else {
										// set filter to null since filter already does not exist
										settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = null;
									}
								}
							} else {
								// set filter to null since filter already does not exist
								settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = null;
							}
						} else {
							// set filter to null since only one value is allowed and it is being removed
							settings["viewReloadOptions"]["modelSettings"]["Parameters"]["filter"][selected] = null;
						}
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
				}
			});
		});
	}
}