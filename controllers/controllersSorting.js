var defaultReviewSortLoadOrder = [
	// blank option to start
	{
		"SortParameter":"",
		"Label": labelsSortReviewOptions["default"],
		"Selected": false,
		"Value": ""
	},
	// lowest overall rating
	{
		"SortParameter":"rating",
		"Label": labelsSortReviewOptions["ratingAsc"],
		"Selected": false,
		"Value": "asc"
	},
	// highest overall rating
	{
		"SortParameter":"rating",
		"Label": labelsSortReviewOptions["ratingDesc"],
		"Selected": false,
		"Value": "desc"
	},
	// oldest reviews
	{
		"SortParameter":"submissiontime",
		"Label": labelsSortReviewOptions["submissiontimeAsc"],
		"Selected": false,
		"Value": "asc"
	},
	// newest reviews
	{
		"SortParameter":"submissiontime",
		"Label": labelsSortReviewOptions["submissiontimeDesc"],
		"Selected": false,
		"Value": "desc"
	},
	// least helpful reviews reviews
	{
		"SortParameter":"totalnegativefeedbackcount",
		"Label": labelsSortReviewOptions["totalnegativefeedbackcountDesc"],
		"Selected": false,
		"Value": "desc"
	},
	// most helpful reviews reviews
	{
		"SortParameter":"totalpositivefeedbackcount",
		"Label": labelsSortReviewOptions["totalpositivefeedbackcountDesc"],
		"Selected": false,
		"Value": "desc"
	},
	// featured reviews first
	{
		"SortParameter":"isfeatured",
		"Label": labelsSortReviewOptions["isfeaturedDesc"],
		"Selected": false,
		"Value": "desc"
	},
	// photo reviews first
	{
		"SortParameter":"hasphotos",
		"Label": labelsSortReviewOptions["hasphotosDesc"],
		"Selected": false,
		"Value": "desc"
	},
	// video reviews first
	{
		"SortParameter":"hasvideos",
		"Label": labelsSortReviewOptions["hasvideosDesc"],
		"Selected": false,
		"Value": "desc"
	},
];

var defaultQuestionSortLoadOrder = [];
var defaultStorySortLoadOrder = [];

function loadSortDropdown (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultSortInputWrapperContainer,
		"viewContainer":defaultInputSelectContainerView,
		"loadOrder":"",
		"productId":"",
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllerSettings":""
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// set variables
			var inputRequired = false; // required boolean
			var inputOptions = settings["loadOrder"]; // options to be loaded in the dropdown
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load select options
			$.each(inputOptions, function(key, value) {
				// add selected state
				if (settings["viewReloadOptions"]["controllerSettings"]["modelLocalDefaultSettings"]["Parameters"]["sort"][value["SortParameter"]] == value["Value"]) {
					//$container..addClass("BVSelected");
					this["Selected"] = true;
				}
				// load sort option
				loadSortSelectOptionsInput(this, {
					"parentContainer":$container
				});
			});
			// sort option functionality
			if (!$container.data("disabled")) {
				$container.change(function(){
					// container info to refresh
					var refreshContainer = $(settings["viewReloadOptions"]["controllerSettings"]["parentContainer"]).find(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]).andSelf().filter(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]);
					var selected = $(this.options[this.selectedIndex]).attr("data-sort-parameter");
					var selectedValue = this.options[this.selectedIndex].value;
					// check to make sure selected option has a sorting parameter and value
					if (selected && selectedValue) {
						// load new content based off of sorting selection and current settings
						loadingContainerAnimation(refreshContainer, function() {
							// update parameters for new api call
							// reset and add selected sort
							settings["viewReloadOptions"]["modelSettings"]["Parameters"]["sort"] = {};
							settings["viewReloadOptions"]["modelSettings"]["Parameters"]["sort"][selected] = selectedValue;
							// reset offset to start from the beginning - 
							settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = 0;
							// make new api call
							settings["viewReloadOptions"]["model"] (
								// product id
								settings["productId"],
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
						});
					}
				});
			};
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// generic option inpute
function loadSortSelectOptionsInput (content, options) {
	// content expected ["Data"]["Fields"][<contextdatavalue_Value>]["Options"]
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultFormSelectInputContainer,
		"viewContainer":defaultInputSelectOptionContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputValue":content["Value"],
			"inputSelected":content["Selected"],
			"inputLabel":content["Label"]
		}
	}, options);
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// set variables
				var inputValue = settings["inputSettings"]["inputValue"]; // option value
				var inputLabel = settings["inputSettings"]["inputLabel"]; // option label text
				var inputSelected = settings["inputSettings"]["inputSelected"]; // option selected boolean
				var sortParameter = content["SortParameter"]; // option selected boolean
				// set input attributes
				$container.find(defaultFormSelectOptionInputContainer).andSelf().filter(defaultFormSelectOptionInputContainer).html(inputLabel).attr({
					"label":inputLabel,
					"value":inputValue,
					"selected":inputSelected,
					"data-sort-parameter":sortParameter
				});
				// add input template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
}