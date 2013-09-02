/***** HISTOGRAM *****/



function loadHistogramOverallRating (content, options) {
	var defaultLoadOrder = new Array();
	var defaultLoadOrder = content["RatingDistribution"]; // review stats
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultHistogramWidgetContainer,
		"viewContainer":defaultHistogramWidgetContainerView,
		"loadOrder":defaultLoadOrder,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add histogram template
	$container.append($template);
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
	// load histogram
	loadIndividualHistogram (ratingsDistribution, {
		"parentContainer":$template,
		"loadOrder":ratingsDistribution["Values"].reverse(),
	});
}

function loadIndividualHistogram (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultHistogramGroupContainer,
		"viewContainer":defaultHistogramIndividualContainerView,
		"loadOrder":"",
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// set variables
			var labelText = new String();
			if (content["Values"][key]["Label"]) {
				var labelText = content["Values"][key]["Label"];
			} else {
				var labelText = content["Values"][key]["Value"];
			}
			var histogramCountText = content["Values"][key]["Count"];
			// add histogram template
			$container.append($template);
			// set label text
			$($template).find(defaultHistogramLabelTextContainer).andSelf().filter(defaultHistogramLabelTextContainer).text(labelText);
			// set histogram count text
			$($template).find(defaultHistogramCountTextContainer).andSelf().filter(defaultHistogramCountTextContainer).text(histogramCountText);
			// set histogram
			var histogramWidth = (histogramCountText/content["TotalResults"]) * 100;
			$($template).find(defaultHistogramIndividualContainer).andSelf().filter(defaultHistogramIndividualContainer).css({
				"width":histogramWidth+"%",
			});
		});
	}
}