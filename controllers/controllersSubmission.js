/***** USER INFO *****/



// user nickname
function loadUserNicknameInput (content, options) {
	var content = content["Data"]["Fields"]["usernickname"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultUserNicknameInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// user email
function loadUserEmailInput (content, options) {
	var content = content["Data"]["Fields"]["useremail"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultUserEmailInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// user location
function loadUserLocationInput (content, options) {
	var content = content["Data"]["Fields"]["userlocation"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultUserLocationInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// user id
function loadUserIDInput (content, options) {
	var content = content["Data"]["Fields"]["userid"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultUserIdInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":"userid",
			"inputType":"hidden",
			"inputLabel":"User Id",
			"inputPlaceholder":"",
			"inputHelperText":"",
			"inputValue":"",
			"inputMinLength":"",
			"inputMaxLength":"",
			"inputRequired":true,
			"inputDefault":"",
			"inputOptionsArray":""
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** ADDITIONAL FIELDS *****/



// additional fields group container
function loadAdditionalFieldGroupInput (content, options) {
	var defaultLoadOrder = new Array();
	$.each(content["Data"]["Groups"]["additionalfield"]["SubElements"], function() {
		defaultLoadOrder.push(this["Id"]);
	});
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultAdditionalFieldGroupInputContainer,
		"viewContainer":defaultAdditionalFieldContainerView,
		"loadOrder":defaultLoadOrder,
		"productId":"",
		"inputSettings":{
			"inputType":content["Type"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	$.each(settings["loadOrder"], function(key) {
		var fieldContent = content["Data"]["Fields"][this];
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// add individual additional field template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
				// load additional field input container
				loadAdditionalFieldIndividualInput(fieldContent, {
					"parentContainer":$container
				});
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

// additional field individual container
function loadAdditionalFieldIndividualInput (content, options) {
	// content is expecting ["Data"]["Fields"][<contextdatavalue_Value>]
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultAdditionalFieldIndividualInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
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
			var inputId = settings["inputSettings"]["inputName"] + "WrapperID"; // id attribute
			var inputName = settings["inputSettings"]["inputName"]; // name of input
			var inputLabel = settings["inputSettings"]["inputLabel"]; // input label text
			var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
			var inputType = settings["inputSettings"]["inputType"]; // input type (radio or select dropdown)
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(inputLabel).attr({
				"for":(inputName + "ID")
			});
			// add additional field template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).attr({
				"id":inputId
			}).append($container);
			// load text field
			loadTextFieldInput(content, {
				"parentContainer":$container
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** CONTEXT DATA VALUES *****/



// cdv group container
function loadContextDataValueGroupInput (content, options) {
	var defaultLoadOrder = new Array();
	$.each(content["Data"]["Groups"]["contextdatavalue"]["SubElements"], function() {
		defaultLoadOrder.push(this["Id"]);
	});
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultContextDataValueGroupInputContainer,
		"viewContainer":defaultContextDataValueContainerView,
		"loadOrder":defaultLoadOrder,
		"productId":"",
		"inputSettings":{
			"inputType":content["Type"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	$.each(settings["loadOrder"], function(key) {
		var fieldContent = content["Data"]["Fields"][this];
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// add individual context data value template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
				// load context data value input container
				loadContextDataValueIndividualInput(fieldContent, {
					"parentContainer":$container
				});
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

// cdv individual container
function loadContextDataValueIndividualInput (content, options) {
	// content is expecting ["Data"]["Fields"][<contextdatavalue_Value>]
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultContextDataValueIndividualInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
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
			var inputId = settings["inputSettings"]["inputName"] + "WrapperID"; // id attribute
			var inputName = settings["inputSettings"]["inputName"]; // name of input
			var inputLabel = settings["inputSettings"]["inputLabel"]; // input label text
			var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
			var inputType = settings["inputSettings"]["inputType"]; // input type (radio or select dropdown)
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(inputLabel).attr({
				"for":(inputName + "ID")
			});
			// add context data value template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).attr({
				"id":inputId
			}).append($container);
			// load select/radio input
			if (inputType == "SelectInput") {
				// load select(dropdown)
				loadSelectInput(content, {
					"parentContainer":$container
				});
			} else {
				// set radio button load order
				var defaultLoadOrder = new Array();
				$.each(content["Options"], function(index) {
					if (this["Label"]) {
						var obj = {};
						obj[this["Value"]] = this["Label"];
						defaultLoadOrder[index] = obj;
					};
				});
				// load radio buttons
				loadRadioInputIndividual (content, {
					"parentContainer":$container,
					"targetContainer":defaultFormInputWrapperContainer,
					"loadOrder":defaultLoadOrder
				});
			}
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** TAGS *****/



function loadTagGroupInput (content, options) {
	var defaultLoadOrder = new Array();
	$.each(content["Data"]["Groups"]["tag"]["SubElements"], function() {
		defaultLoadOrder.push(this["Id"]);
	});
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultTagGroupInputContainer,
		"viewContainer":defaultTagIndividualGroupContainerView,
		"loadOrder":defaultLoadOrder,
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	$.each(settings["loadOrder"], function(key, value) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// set variables
				var inputLabel = content["Data"]["Groups"][value]["Label"];
				// set label
				$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(inputLabel);
				// add input template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
				// set order to load inputs
				// pre-defined tags load order
				var tagLoadOrder = new Array ();
				// open text field tags load order
				var tagOpenFieldLoadOrder = new Array ();
				// sort tag into their respective load order arrays
				$.each(content["Data"]["Groups"][value]["SubElements"], function() {
					$.each(content["Data"]["Groups"][this["Id"]]["SubElements"], function() {
						// check if field type is TextInput (open text) or Boolean (pre-defined)
						if (content["Data"]["Fields"][this["Id"]]["Type"] == "TextInput") {
							tagOpenFieldLoadOrder.push(this["Id"]);
						} else {
							tagLoadOrder.push(this["Id"]);
						}
					})
				});
				// load pre-defined tags
				$.each(tagLoadOrder, function() {
					// load inputs
					loadTagIndividualInput (content, {
						"parentContainer":$container,
						"loadOrder":this,
					});
				});
				// load open text field tags
				$.each(tagOpenFieldLoadOrder, function(key, value) {
					// only show first open text feild tag
					if ((key + 1) == 1) {
						settings["inputSettings"]["inputHidden"] = false;
					} else {
						settings["inputSettings"]["inputHidden"] = true;
					}
					// load inputs
					loadTagIndividualInput (content, {
						"parentContainer":$container,
						"loadOrder":this,
						"inputSettings":{
							"inputHidden":settings["inputSettings"]["inputHidden"],
						},
					});
				});
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

function loadTagIndividualInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultCheckboxGroupInputContainer,
		"viewContainer":defaultTagIndividualContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputHidden":false,
			"inputLabel":content["Label"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// check if input should be hidden
			if (settings["inputSettings"]["inputHidden"]) {
				$container.hide();
			}
			// add tag template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load checkbox
			loadCheckboxInputField (content["Data"]["Fields"][settings["loadOrder"]], {
				"parentContainer":$container,
			});
			if (content["Data"]["Fields"][settings["loadOrder"]]["Type"] == "TextInput") {
				// run once user clicks outside of text field
				$container.focusout( function() {
					// check to see if this field has any text (no need to show a new field if this field can still be used)
					if ($("input[type='text'][name='" + content["Data"]["Fields"][settings["loadOrder"]]["Id"] + "']").val().trim().length > 0) {
						// array of open text tag values (used to see if a new empty field is needed)
						var tagOpenTextValues = new Array();
						$($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).find("input[type='text']").andSelf().filter("input[type='text']").not(":hidden").each(function() {
							tagOpenTextValues.push($(this).val().trim());
						});
						// check to see if an empty text field tag is already showing
						if ($.inArray("", tagOpenTextValues) == -1) {
							// loop through all tags within this target container (use target to keep your search localized to this group)
							$($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).children(":hidden:first").each(function() {
								// move element to last position and show
								$(this).detach().appendTo($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).show();
							});
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



/***** FORM CHECKBOXES *****/



function loadTermsAndConditionsInput (content, options) {
	var content = content["Data"]["Fields"]["agreedtotermsandconditions"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultTermsConditionsInputContainer,
		"viewContainer":defaultTermsConditionsContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load checkbox
			loadCheckboxInputField (content, {
				"parentContainer":$container,
				"inputSettings":{
					"inputLabel":labelsSubmissionOptIns["termsAndConditions"],
					"inputValue":true,
				}
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadSendEmailAlertWhenCommentedInput (content, options) {
	content = content["Data"]["Fields"]["sendemailalertwhencommented"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultEmailAlertWhenCommentedInputContainer,
		"viewContainer":defaultEmailWhenCommentedContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load checkbox
			loadCheckboxInputField (content, {
				"parentContainer":$container,
				"inputSettings":{
					"inputLabel":labelsSubmissionOptIns["emailAlertWhenCommented"],
					"inputValue":true,
				}
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadSendEmailAlertWhenPublishedInput (content, options) {
	var content = content["Data"]["Fields"]["sendemailalertwhenpublished"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultEmailAlertWhenPublishedInputContainer,
		"viewContainer":defaultEmailAlertWhenPublishedContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load checkbox
			loadCheckboxInputField (content, {
				"parentContainer":$container,
				"inputSettings":{
					"inputLabel":labelsSubmissionOptIns["emailAlertWhenPublished"],
					"inputValue":true,
				}
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** GENERIC INPUTS *****/
/***** TEXT FIELDS *****/



// generic text field
function loadTextFieldInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultFormInputWrapperContainer,
		"viewContainer":defaultInputTextFieldContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var inputId = settings["inputSettings"]["inputName"];
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set input attributes
			$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
				"id":inputId,
				"name":settings["inputSettings"]["inputName"],
				"value":settings["inputSettings"]["inputValue"],
				"placeholder":settings["inputSettings"]["inputPlaceholder"],
				"data-required":settings["inputSettings"]["inputRequired"]
			});
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// generic text area
function loadTextAreaInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultFormInputWrapperContainer,
		"viewContainer":defaultInputTextAreaContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
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
			var inputId = settings["inputSettings"]["inputName"];
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set input attributes
			$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
				"id":inputId,
				"name":settings["inputSettings"]["inputName"],
				"value":settings["inputSettings"]["inputValue"],
				"placeholder":settings["inputSettings"]["inputPlaceholder"],
				"data-required":settings["inputSettings"]["inputRequired"]
			});
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** RADIO BUTTONS ******/



// load an individual radio button
function loadRadioInputIndividual (content, options) {
	// object containing value and label text [<value>:<lable text>]
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer, // needs to be given a more specific container if called more than once
		"targetContainer":defaultRadioButtonGroupInputContainer,
		"viewContainer":defaultInputRadioContainerView,
		"loadOrder":"", // this must be defined in the call
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	$.each (settings["loadOrder"], function(key, value) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// set variables
				var inputValue = key; // radio value
				var inputLabel = value; // radio label text
				var inputName = settings["inputSettings"]["inputName"]; // input name attribute
				var inputId = inputName + inputValue; // id attribute
				var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
				var inputSelected = settings["inputSettings"]["inputValue"]; // selected value
				// set label
				$container.find(defaultFormRadioLabelTextContainer).andSelf().filter(defaultFormRadioLabelTextContainer).text(inputLabel).attr({
					"for":inputId
				});
				// set input attributes
				$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
					"id":inputId,
					"name":inputName,
					"value":inputValue
				});
				// selected value
				if (inputValue == inputSelected) {
					$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
						"checked":"checked",
					});
				}
				// required
				if (inputRequired == true) {
					$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass("required");
				}
				// add input template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}



/***** SELECT DROPDOWNS *****/



// generic select(dropdown) input
function loadSelectInput (content, options) {
	// content expected ["Data"]["Fields"][<contextdatavalue_Value>]
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultFormInputWrapperContainer,
		"viewContainer":defaultInputSelectContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
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
			var inputId = settings["inputSettings"]["inputName"] + "ID"; // id attribute
			var inputName = settings["inputSettings"]["inputName"]; // name of select input
			var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
			var inputOptions = settings["inputSettings"]["inputOptionsArray"]; // options to be loaded in the dropdown
			// set input attributes
			$container.find(defaultFormSelectInputContainer).andSelf().filter(defaultFormSelectInputContainer).attr({
				"id":inputId,
				"name":inputName
			});
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load select options
			loadSelectOptionsInput(inputOptions, {
				"parentContainer":$container
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// generic option input
function loadSelectOptionsInput (content, options) {
	// content expected ["Data"]["Fields"][<contextdatavalue_Value>]["Options"]
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
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
					"disabled":false
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

function loadCheckboxInputField (content, options) {
	// content expected ["Data"]["Fields"][<fieldname>]
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer, // needs to be given a more specific container if called more than once
		"targetContainer":defaultCheckboxIndividualInputContainer,
		"viewContainer":defaultInputCheckboxIndividualContainerView,
		"loadOrder":"", // this must be defined in the call
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHidden":false, // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
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
			var inputValue = settings["inputSettings"]["inputValue"]; // checkbox value
			var inputLabel = settings["inputSettings"]["inputLabel"]; // checkbox label text
			var inputName = settings["inputSettings"]["inputName"]; // input name attribute
			var inputId = settings["inputSettings"]["inputName"]; // id attribute
			var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
			var inputType = settings["inputSettings"]["inputType"];
			var inputPlaceholder = settings["inputSettings"]["inputPlaceholder"];
			// set label
			if (inputType !== "TextInput") {
				$container.find(defaultFormCheckboxLabelTextContainer).andSelf().filter(defaultFormCheckboxLabelTextContainer).text(inputLabel).attr({
					"for":inputId
				});
			} else {
				loadTextFieldInput(content, {
					"parentContainer":$container,
					"targetContainer":$container.find(defaultFormCheckboxLabelTextContainer).andSelf().filter(defaultFormCheckboxLabelTextContainer).attr({
						"for":inputId
					}),
					"inputSettings":{
						"inputName":inputName,
						"inputPlaceholder":inputPlaceholder
					}
				});
			}
			// set input attributes
			$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
				"id":inputId,
				"name":inputName,
				"value":inputValue,
			});
			/* may be needed for editing
			// selected value
			if (inputValue) {
				$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
					"checked":true,
				});
			}
			*/
			// add functionality to update checked attribute on change
			$container.change(function() {
				if (this.checked) {
					$(this).attr({
						"checked":true,
					});
				} else {
					$(this).attr({
						"checked":false,
					});
				}
			});
			// required
			if (inputRequired == true) {
				$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass("required");
			}
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}



/***** MEDIA UPLOAD *****/



function loadYoutubeUrlInput (content, options) {
	var content = content["Data"]["Fields"]["videourl_1"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultReviewVideoInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"targetContainer":defaultFormInputWrapperContainer,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadVideoCaptionInput (content, options) {
	var content = content["Data"]["Fields"]["videocaption_1"];
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultReviewVideoCaptionInputContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(settings["inputSettings"]["inputLabel"]).attr({
				"for":settings["inputSettings"]["inputName"]
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(settings["inputSettings"]["inputHelperText"]);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"targetContainer":defaultFormInputWrapperContainer,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadPhotoGroupInput (content, options) {
	var defaultLoadOrder = new Array();
	$.each(content["Data"]["Groups"]["photo"]["SubElements"], function() {
		defaultLoadOrder.push(this["Id"]);
	});
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultPhotoUploadGroupInputContainer,
		"viewContainer":defaultInputUploadGroupContainerView,
		"loadOrder":defaultLoadOrder,
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputHidden":false,
			"inputLabel":content["Label"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		},
		"mediaSettings":{
			"contentType":"",
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
			var inputLabel = settings["inputSettings"]["inputLabel"];
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(inputLabel);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load photo upload inputs
			$.each(settings["loadOrder"], function(key, value) {
				// set order to load inputs
				var photoLoadOrder = new Array ();
				$.each(content["Data"]["Groups"][value]["SubElements"], function() {
					photoLoadOrder.push(this["Id"]);
				});
				if ((key + 1) == settings["loadOrder"].length) {
					settings["inputSettings"]["inputHidden"] = false;
				} else {
					settings["inputSettings"]["inputHidden"] = true;
				}
				// load photo upload input
				loadPhotoFileUploadInput (content, {
					"parentContainer":$container,
					"loadOrder":photoLoadOrder,
					"inputSettings":{
						"inputHidden":settings["inputSettings"]["inputHidden"],
					},
					"mediaSettings":{
						"contentType":settings["mediaSettings"]["contentType"],
					}
				});
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadPhotoFileUploadInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultUploadGroupInputContainer,
		"viewContainer":defaultInputUploadIndividualContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputHidden":false,
			"inputLabel":content["Label"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		},
		"mediaSettings":{
			"contentType":"",
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			if (settings["inputSettings"]["inputHidden"]) {
				$container.hide();
			}
			// set variables
			var urlInputName = settings["loadOrder"][0];
			var uploadInputName = "photo"; // DO NOT CHANGE - must be photo for upload to work
			var inputLabel = settings["inputSettings"]["inputLabel"];
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(inputLabel);
			// add photo template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// load file upload input (this returns the url needed to submit the photo)
			loadUploadInput (content["Data"]["Fields"][urlInputName], {
				"parentContainer":$container,
				"inputSettings":{
					"inputName":uploadInputName
				}
			});
			// load photo url input (this is what actually submits the photo)
			loadPhotoUploadPreviewInput (content, {
				"parentContainer":$container,
				"loadOrder":settings["loadOrder"]
			});
			// set functionality for upload input
			postPhotoSubmissionForm (settings["productId"], function(data) {
				// set variables
				var uploadInput = "input[name='" + uploadInputName + "']";
				// submit photo using the jquery.fileupload.js plugin to allow ajax submission without embedding a form
				$($container).find(uploadInput).andSelf().filter(uploadInput).fileupload({
					type: "POST",
					enctype: 'multipart/form-data',
					url: data["url"],
					formData: data["params"],
					dataType: "json",
			        done: function (e, data) {
						// array to hold photo response in json. needed to replicate object sent on json response for display
						var arrPhoto = new Array ();
						arrPhoto.push(data["result"]["Photo"]);
						// load photo thumbnail
						loadReviewPhotosGroup (data["result"]["Photo"], {
							"parentContainer":$container,
							"loadOrder":arrPhoto
						});
						// set value on photo url input
						var urlInput = "input[name='" + urlInputName + "']";
						var urlPhotoNormal = data["result"]["Photo"]["Sizes"]["normal"]["Url"];
						$($container).find(urlInput).andSelf().filter(urlInput).attr({
							"value":urlPhotoNormal
						});
						// hide file upload input
						$container.find(defaultPhotoUploadInputContainer).andSelf().filter(defaultPhotoUploadInputContainer).hide();
						// find next hidden upload input and show if available
						$($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).children(":hidden:first").each(function() {
							// move element to last position and show
							$(this).detach().prependTo($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).show();
						})
			        	// show uploaded image preview container
			        	$($container).find(defaultPhotoUploadPreviewContainer).andSelf().filter(defaultPhotoUploadPreviewContainer).show();
			        }
			    });
			}, {
				"Parameters":{
					"contenttype":settings["mediaSettings"]["contentType"],
				}
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadPhotoUploadPreviewInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultPhotoUploadPreviewContainer,
		"viewContainer":defaultInputUploadPhotoPreviewContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
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
			var urlInputName = settings["loadOrder"][0];
			var captionInputName = settings["loadOrder"][1];
			var inputName = settings["inputSettings"]["inputName"];
			// add photo template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			// hide photo preview container on load
			$(defaultPhotoUploadPreviewContainer).hide();
			// load photo caption input
			loadPhotoCaptionInput (content["Data"]["Fields"][captionInputName], {
				"parentContainer":$container,
				"inputSettings":{
					"inputLabel":"Add Caption",
				}
			});
			// load photo url input (hidden)
			loadPhotoUrlInput (content["Data"]["Fields"][urlInputName], {
				"parentContainer":$container,
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadPhotoCaptionInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultFormPhotoCaptionInputWrapperContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
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
			inputLabel = settings["inputSettings"]["inputLabel"];
			inputName = settings["inputSettings"]["inputName"];
			inputHelperText = settings["inputSettings"]["inputHelperText"];
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(inputLabel).attr({
				"for":inputName,
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(inputHelperText);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load input
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadPhotoUrlInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defaultFormPhotoUrlInputWrapperContainer,
		"viewContainer":defaultInputContainerView,
		"loadOrder":"",
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputHelperText":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
		}
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// hide container
			$container.hide();
			// set variables
			inputLabel = settings["inputSettings"]["inputLabel"];
			inputName = settings["inputSettings"]["inputName"];
			inputHelperText = settings["inputSettings"]["inputHelperText"];
			// set label
			$container.find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).text(inputLabel).attr({
				"for":inputName,
			});
			// set helper text
			$container.find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(inputHelperText);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
			// load photo url input (hidden)
			loadTextFieldInput (content, {
				"parentContainer":$container,
				"viewContainer":defaultInputTextFieldHiddenContainerView,
				"inputSettings":settings["inputSettings"]
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// load an upload input
function loadUploadInput (content, options) {
	// content expected ["Data"]["Fields"][<fieldname>]
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer, // needs to be given a more specific container if called more than once
		"targetContainer":defaultUploadIndividualInputContainer,
		"viewContainer":defaultInputUploadPhotoContainerView,
		"loadOrder":"", // this must be defined in the call
		"productId":"",
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputPlaceholder":"", // user defined
			"inputValue":content["Value"],
			"inputMinLength":content["MinLength"],
			"inputMaxLength":content["MaxLength"],
			"inputRequired":content["Required"],
			"inputDefault":content["Default"],
			"inputOptionsArray":content["Options"]
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
			var inputLabel = settings["inputSettings"]["inputLabel"]; // input label text
			var inputName = settings["inputSettings"]["inputName"]; // input name attribute
			var inputId = settings["inputSettings"]["inputName"]; // id attribute
			var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
			var inputType = settings["inputSettings"]["inputType"];
			var inputPlaceholder = settings["inputSettings"]["inputPlaceholder"];
			// set label
			$container.find(defaultFormUploadLabelTextContainer).andSelf().filter(defaultFormUploadLabelTextContainer).text(inputLabel).attr({
				"for":inputId
			});
			// set input attributes
			$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
				"id":inputId,
				"name":inputName,
			});
			// required
			if (inputRequired == true) {
				$container.find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass("required");
			}
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}