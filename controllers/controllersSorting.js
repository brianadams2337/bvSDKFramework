var defaultReviewSortLoadOrder = [
	// lowest overall rating
	{
		"SortParameter":"rating",
		"Label": "Lowest Rating",
		"Selected": false,
		"Value": "asc"
	},
	// highest overall rating
	{
		"SortParameter":"rating",
		"Label": "Highest Rating",
		"Selected": false,
		"Value": "desc"
	},
	// oldest reviews
	{
		"SortParameter":"submissiontime",
		"Label": "Oldest",
		"Selected": false,
		"Value": "asc"
	},
	// newest reviews
	{
		"SortParameter":"submissiontime",
		"Label": "Newest",
		"Selected": false,
		"Value": "desc"
	},
	// least helpful reviews reviews
	{
		"SortParameter":"totalnegativefeedbackcount",
		"Label": "Least Helpful",
		"Selected": false,
		"Value": "desc"
	},
	// most helpful reviews reviews
	{
		"SortParameter":"totalpositivefeedbackcount",
		"Label": "Most Helpful",
		"Selected": false,
		"Value": "desc"
	},
	// featured reviews first
	{
		"SortParameter":"isfeatured",
		"Label": "Featured Reviews",
		"Selected": false,
		"Value": "desc"
	},
	// photo reviews first
	{
		"SortParameter":"hasphotos",
		"Label": "Photo Reviews",
		"Selected": false,
		"Value": "desc"
	},
	// video reviews first
	{
		"SortParameter":"hasvideos",
		"Label": "Video Reviews",
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
			loadSortSelectOptionsInput(inputOptions, {
				"parentContainer":$container
			});
			// sort option functionality
			$container.change(function(){
				var selected = $(this.options[this.selectedIndex]).attr("data-sort-parameter");
				var selectedValue = this.options[this.selectedIndex].value;
				settings["viewReloadOptions"]["modelSettings"]["Parameters"]["sort"] = {};
				settings["viewReloadOptions"]["modelSettings"]["Parameters"]["sort"][selected] = selectedValue;
				settings["viewReloadOptions"]["model"] (
					settings["productId"],
					function(content) {
						// callback function
						settings["viewReloadOptions"]["controller"](content, settings["viewReloadOptions"]["controllerSettings"]);
					},
					settings["viewReloadOptions"]["modelSettings"]
				);
			});

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
		"loadOrder":content,
		"productId":"",
		"inputSettings":{
			"inputValue":content["Value"],
			"inputSelected":content["Selected"],
			"inputLabel":content["Label"]
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
				var inputValue = settings["loadOrder"][key]["Value"]; // option value
				var inputLabel = settings["loadOrder"][key]["Label"]; // option label text
				var inputSelected = settings["loadOrder"][key]["Selected"]; // option selected boolean
				// set input attributes
				$container.find(defaultFormSelectOptionInputContainer).andSelf().filter(defaultFormSelectOptionInputContainer).html(inputLabel).attr({
					"label":"",
					"value":inputValue,
					"selected":inputSelected,
					"disabled":false,
					"data-sort-parameter":settings["loadOrder"][key]["SortParameter"]
				});
				// add input template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}