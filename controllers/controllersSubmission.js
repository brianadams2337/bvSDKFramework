/***** USER INFO *****/



// user nickname
function loadUserNicknameInput (content, options) {
	var content = content["Data"]["Fields"]["usernickname"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultUserNicknameInputContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}

// user email
function loadUserEmailInput (content, options) {
	var content = content["Data"]["Fields"]["useremail"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultUserEmailInputContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}

// user location
function loadUserLocationInput (content, options) {
	var content = content["Data"]["Fields"]["userlocation"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultUserLocationInputContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}

// user id
function loadUserIDInput (content, options) {
	var content = content["Data"]["Fields"]["userid"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultUserIdInputContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}



/***** ADDITIONAL FIELDS *****/



// additional fields group container
function loadAdditionalFieldGroupInput (content, options) {
	var defaultLoadOrder = new Array();
	if (content["Data"]["Groups"]["additionalfield"] != undefined) {
		$.each(content["Data"]["Groups"]["additionalfield"]["SubElements"], function() {
			defaultLoadOrder.push(this["Id"]);
		});
	}
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultAdditionalFieldGroupInputContainer,
		"viewContainer":defaultAdditionalFieldContainerView,
		"loadOrder":defaultLoadOrder,
		"inputSettings":{
			"inputType":content["Type"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			var fieldContent = content["Data"]["Fields"][this];
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// add individual additional field template
			$container.append($template);
			// load additional field input container
			loadAdditionalFieldIndividualInput(fieldContent, {
				"parentContainer":$template
			});
		});
	}
}

// additional field individual container
function loadAdditionalFieldIndividualInput (content, options) {
	// content is expecting ["Data"]["Fields"][<contextdatavalue_Value>]
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultAdditionalFieldIndividualInputContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputId = settings["inputSettings"]["inputName"] + "WrapperID"; // id attribute
	var inputName = settings["inputSettings"]["inputName"]; // name of input
	var inputLabel = settings["inputSettings"]["inputLabel"]; // input label text
	var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
	var inputType = settings["inputSettings"]["inputType"]; // input type (radio or select dropdown)
	// add title template
	$container.attr({"id":inputId}).append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":(inputName + "ID")
	});
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// load text field
	loadTextFieldInput(content, {
		"parentContainer":$template
	});
}



/***** CONTEXT DATA VALUES *****/



// cdv group container
function loadContextDataValueGroupInput (content, options) {
	var defaultLoadOrder = new Array();
	if (content["Data"]["Groups"]["contextdatavalue"] != undefined) {
		$.each(content["Data"]["Groups"]["contextdatavalue"]["SubElements"], function() {
			defaultLoadOrder.push(this["Id"]);
		});
	}
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultContextDataValueGroupInputContainer,
		"viewContainer":defaultContextDataValueContainerView,
		"loadOrder":defaultLoadOrder,
		"inputSettings":{
			"inputType":content["Type"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			var fieldContent = content["Data"]["Fields"][this];
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// set variables
			var inputHelperText = new String ();
			if (fieldContent["Id"] == "contextdatavalue_rewardZoneMembershipV3") {
				inputHelperText = "Reward Zone Members: Get bonus points for your approved review (see rules*)."
			}
			// add individual context data value template
			$container.append($template);
			// load context data value input container
			loadContextDataValueIndividualInput(fieldContent, {
				"parentContainer":$template,
				"inputSettings":{
					"inputHelperText":inputHelperText
				}
			});
		});
	}
}

// cdv individual container
function loadContextDataValueIndividualInput (content, options) {
	// content is expecting ["Data"]["Fields"][<contextdatavalue_Value>]
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultContextDataValueIndividualInputContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputId = settings["inputSettings"]["inputName"] + "WrapperID"; // id attribute
	var inputName = settings["inputSettings"]["inputName"]; // name of input
	var inputLabel = settings["inputSettings"]["inputLabel"]; // input label text
	var inputHelperText = settings["inputSettings"]["inputHelperText"]; // input helper text
	var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
	var inputType = settings["inputSettings"]["inputType"]; // input type (radio or select dropdown)
	// add context data value template
	$container.attr({"id":inputId}).append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":(inputName + "ID")
	});
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// if required field
	if (inputRequired) {
		$($template).parent().addClass(requiredClass);
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// load select/radio input
	if (inputType == "SelectInput") {
		// load select(dropdown)
		loadSelectInput(content, {
			"parentContainer":$template
		});
	} else {
		// set radio button load order
		var defaultLoadOrder = new Array();
		if (content["Options"] != undefined) {
			$.each(content["Options"], function(index) {
				if (this["Label"]) {
					var obj = {};
					obj[this["Value"]] = this["Label"];
					defaultLoadOrder[index] = obj;
				};
			});
		}
		// load radio buttons
		loadRadioInputIndividual (content, {
			"parentContainer":$template,
			"targetContainer":defaultFormInputWrapperContainer,
			"loadOrder":defaultLoadOrder
		});
	}
}



/***** TAGS *****/



function loadTagGroupInput (content, options) {
	var defaultLoadOrder = new Array();
	if (content["Data"]["Groups"]["tag"] != undefined) {
		$.each(content["Data"]["Groups"]["tag"]["SubElements"], function() {
			defaultLoadOrder.push(this["Id"]);
		});
	}
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultTagGroupInputContainer,
		"viewContainer":defaultTagIndividualGroupContainerView,
		"loadOrder":defaultLoadOrder,
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key, value) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// set variables
			var inputLabel = content["Data"]["Groups"][value]["Label"];
			// add input template
			$container.append($template);
			// set label
			$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
			// if required field
			if (settings["inputSettings"]["inputRequired"]) {
				$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
			}
			// set order to load inputs
			// pre-defined tags load order
			var tagLoadOrder = new Array ();
			// open text field tags load order
			var tagOpenFieldLoadOrder = new Array ();
			// sort tag into their respective load order arrays
			if (content["Data"]["Groups"][value] != undefined) {
				$.each(content["Data"]["Groups"][value]["SubElements"], function() {
					if (content["Data"]["Groups"][this["Id"]] != undefined) {
						$.each(content["Data"]["Groups"][this["Id"]]["SubElements"], function() {
							// check if field type is TextInput (open text) or Boolean (pre-defined)
							if (content["Data"]["Fields"][this["Id"]]["Type"] == "TextInput") {
								tagOpenFieldLoadOrder.push(this["Id"]);
							} else {
								tagLoadOrder.push(this["Id"]);
							}
						});
					}
				});
			}
			// load pre-defined tags
			if (tagLoadOrder != undefined) {
				$.each(tagLoadOrder, function() {
					// load inputs
					loadTagIndividualInput (content, {
						"parentContainer":$template,
						"loadOrder":this,
					});
				});
			}
			// load open text field tags
			if (tagOpenFieldLoadOrder != undefined) {
				$.each(tagOpenFieldLoadOrder, function(key, value) {
					// only show first open text feild tag
					if ((key + 1) == 1) {
						settings["inputSettings"]["inputHidden"] = false;
					} else {
						settings["inputSettings"]["inputHidden"] = true;
					}
					// load inputs
					loadTagIndividualInput (content, {
						"parentContainer":$template,
						"loadOrder":this,
						"inputSettings":{
							"inputHidden":settings["inputSettings"]["inputHidden"],
							"inputPlaceholder":"Add your own tag",
						},
					});
				});
			}
		});
	}
}

function loadTagIndividualInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultCheckboxGroupInputContainer,
		"viewContainer":defaultTagIndividualContainerView,
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputHidden":false,
			"inputLabel":content["Label"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputPlaceholder = settings["inputSettings"]["inputPlaceholder"];
	// add tag template
	$container.append($template);
	// check if input should be hidden
	if (settings["inputSettings"]["inputHidden"]) {
		$($template).hide();
	}
	// load checkbox
	loadCheckboxInputField (content["Data"]["Fields"][settings["loadOrder"]], {
		"parentContainer":$template,
		"inputSettings":{
			"inputPlaceholder":inputPlaceholder
		}
	});
	if (content["Data"]["Fields"][settings["loadOrder"]]["Type"] == "TextInput") {
		// run once user clicks outside of text field
		$($template).focusout( function() {
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
}



/***** FORM CHECKBOXES *****/



function loadTermsAndConditionsInput (content, options) {
	var content = content["Data"]["Fields"]["agreedtotermsandconditions"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultTermsConditionsInputContainer,
		"viewContainer":defaultTermsConditionsContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add input template
	$container.append($template);
	// load checkbox
	loadCheckboxInputField (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":labelsSubmissionOptIns["termsAndConditions"],
			"inputValue":true,
		}
	});
}

function loadSendEmailAlertWhenCommentedInput (content, options) {
	content = content["Data"]["Fields"]["sendemailalertwhencommented"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultEmailAlertWhenCommentedInputContainer,
		"viewContainer":defaultEmailWhenCommentedContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add input template
	$container.append($template);
	// load checkbox
	loadCheckboxInputField (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":labelsSubmissionOptIns["emailAlertWhenCommented"],
			"inputValue":true,
		}
	});
}

function loadSendEmailAlertWhenPublishedInput (content, options) {
	var content = content["Data"]["Fields"]["sendemailalertwhenpublished"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultEmailAlertWhenPublishedInputContainer,
		"viewContainer":defaultEmailAlertWhenPublishedContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add input template
	$container.append($template);
	// load checkbox
	loadCheckboxInputField (content, {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":labelsSubmissionOptIns["emailAlertWhenPublished"],
			"inputValue":true,
		}
	});
}



/***** GENERIC INPUTS *****/
/***** TEXT FIELDS *****/



// generic text field
function loadTextFieldInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFormInputWrapperContainer,
		"viewContainer":defaultInputTextFieldContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputId = settings["inputSettings"]["inputName"];
	var inputMinLength = settings["inputSettings"]["inputMinLength"];
	var inputMaxLength = settings["inputSettings"]["inputMaxLength"];
	var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
	// add input template
	$container.append($template);
	// set input attributes
	$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
		"id":inputId,
		"name":settings["inputSettings"]["inputName"],
		"value":settings["inputSettings"]["inputValue"],
		"placeholder":settings["inputSettings"]["inputPlaceholder"],
		"data-minlength":inputMinLength,
		"data-maxlength":inputMaxLength,
	});
	// if required field
	if (inputRequired == true) {
		$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass(requiredClass).attr({
			"data-required":inputRequired,
		});
	}
	if (inputId == "useremail") {
		$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
			"data-type":"email",
		});
	}
	if (inputId == "usernickname") {
		$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
			"data-type":"alphanum",
		});
	}
}

// generic text area
function loadTextAreaInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFormInputWrapperContainer,
		"viewContainer":defaultInputTextAreaContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputId = settings["inputSettings"]["inputName"];
	var inputMinLength = settings["inputSettings"]["inputMinLength"];
	var inputMaxLength = settings["inputSettings"]["inputMaxLength"];
	var inputRequired = settings["inputSettings"]["inputRequired"];
	// add title template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(settings["inputSettings"]["inputLabel"]).attr({
		"for":settings["inputSettings"]["inputName"]
	});
	// if required field
	if (inputRequired == true) {
		$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass(requiredClass).attr({
			"data-required":inputRequired,
		});
	}
	// set input attributes
	$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
		"id":inputId,
		"name":settings["inputSettings"]["inputName"],
		"value":settings["inputSettings"]["inputValue"],
		"placeholder":settings["inputSettings"]["inputPlaceholder"],
		"data-required":settings["inputSettings"]["inputRequired"],
		"data-minlength":inputMinLength,
		"data-maxlength":inputMaxLength,
	});
}



/***** RADIO BUTTONS ******/



// load an individual radio button
function loadRadioInputIndividual (content, options) {
	// object containing value and label text [<value>:<lable text>]
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultRadioButtonGroupInputContainer,
		"viewContainer":defaultInputRadioContainerView,
		"loadOrder":"", // this must be defined in the call
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
	if (settings["loadOrder"] != undefined) {
		$.each (settings["loadOrder"], function(key, value) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// set variables
			var inputValue = key; // radio value
			var inputLabel = value; // radio label text
			var inputName = settings["inputSettings"]["inputName"]; // input name attribute
			var inputId = inputName + inputValue; // id attribute
			var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
			var inputSelected = settings["inputSettings"]["inputValue"]; // selected value
			// add input template
			$container.append($template);
			// set label
			$($template).find(defaultFormRadioLabelTextContainer).andSelf().filter(defaultFormRadioLabelTextContainer).html(inputLabel).attr({
				"for":inputId
			});
			// set input attributes
			$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
				"id":inputId,
				"name":inputName,
				"value":inputValue
			});
			// if required field
			if (inputRequired == true) {
				$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass(requiredClass).attr({
					"data-required":inputRequired,
				});
			}
			// selected value
			if (inputValue == inputSelected) {
				$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
					"checked":"checked",
				});
			}
		});
	}
}



/***** SELECT DROPDOWNS *****/



// generic select(dropdown) input
function loadSelectInput (content, options) {
	// content expected ["Data"]["Fields"][<contextdatavalue_Value>]
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFormInputWrapperContainer,
		"viewContainer":defaultInputSelectContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputId = settings["inputSettings"]["inputName"] + "ID"; // id attribute
	var inputName = settings["inputSettings"]["inputName"]; // name of select input
	var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
	var inputOptions = settings["inputSettings"]["inputOptionsArray"]; // options to be loaded in the dropdown
	// add input template
	$container.append($template);
	// set input attributes
	$($template).find(defaultFormSelectInputContainer).andSelf().filter(defaultFormSelectInputContainer).attr({
		"id":inputId,
		"name":inputName
	});
	// if required field
	if (inputRequired == true) {
		$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass(requiredClass).attr({
			"data-required":inputRequired,
		});
	}
	// load select options
	loadSelectOptionsInput(inputOptions, {
		"parentContainer":$template
	});
}

// generic option input
function loadSelectOptionsInput (content, options) {
	// content expected ["Data"]["Fields"][<contextdatavalue_Value>]["Options"]
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFormSelectInputContainer,
		"viewContainer":defaultInputSelectOptionContainerView,
		"loadOrder":content,
		"inputSettings":{
			"inputValue":content["Value"],
			"inputSelected":content["Selected"],
			"inputLabel":content["Label"]
		}
	}, options);
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = returnTemplate(settings["viewContainer"]);
			// set variables
			var inputValue = settings["loadOrder"][key]["Value"]; // option value
			var inputLabel = settings["loadOrder"][key]["Label"]; // option label text
			var inputSelected = settings["loadOrder"][key]["Selected"]; // option selected boolean
			// add title template
			$container.append($template);
			// set input attributes
			$($template).find(defaultFormSelectOptionInputContainer).andSelf().filter(defaultFormSelectOptionInputContainer).html(inputLabel).attr({
				"label":"",
				"value":inputValue,
				"selected":inputSelected,
				"disabled":false
			});
		});
	}
}

function loadCheckboxInputField (content, options) {
	// content expected ["Data"]["Fields"][<fieldname>]
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultCheckboxIndividualInputContainer,
		"viewContainer":defaultInputCheckboxIndividualContainerView,
		"loadOrder":"", // this must be defined in the call
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputValue = settings["inputSettings"]["inputValue"]; // checkbox value
	var inputLabel = settings["inputSettings"]["inputLabel"]; // checkbox label text
	var inputName = settings["inputSettings"]["inputName"]; // input name attribute
	var inputId = settings["inputSettings"]["inputName"]; // id attribute
	var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
	var inputType = settings["inputSettings"]["inputType"];
	var inputPlaceholder = settings["inputSettings"]["inputPlaceholder"];
	// add input template
	$container.append($template);
	// set label
	if (inputType !== "TextInput") {
		$($template).find(defaultFormCheckboxLabelTextContainer).andSelf().filter(defaultFormCheckboxLabelTextContainer).text(inputLabel).attr({
			"for":inputId
		});
	} else {
		loadTextFieldInput(content, {
			"parentContainer":$template,
			"targetContainer":$($template).find(defaultFormCheckboxLabelTextContainer).andSelf().filter(defaultFormCheckboxLabelTextContainer).attr({
				"for":inputId
			}),
			"inputSettings":{
				"inputName":inputName,
				"inputPlaceholder":inputPlaceholder
			}
		});
	}
	// set input attributes
	$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
		"id":inputId,
		"name":inputName,
		"value":inputValue,
	});
	// may be needed for editing
	// // selected value
	// if (inputValue) {
	// 	$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
	// 		"checked":true,
	// 	});
	// }
	
	// add functionality to update checked attribute on change
	$($template).change(function() {
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
	// if required field
	if (inputRequired == true) {
		$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass(requiredClass).attr({
			"data-required":inputRequired,
		});
	}
}



/***** MEDIA UPLOAD *****/



function loadYoutubeUrlInput (content, options) {
	var content = content["Data"]["Fields"]["videourl_1"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewVideoInputContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// if required field
	if (settings["inputSettings"]["inputRequired"]) {
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}

function loadVideoCaptionInput (content, options) {
	var content = content["Data"]["Fields"]["videocaption_1"];
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultReviewVideoCaptionInputContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputName = settings["inputSettings"]["inputName"];
	var inputLabel = settings["inputSettings"]["inputLabel"];
	var inputHelperText = settings["inputSettings"]["inputHelperText"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName
	});
	// if required field
	if (settings["inputSettings"]["inputRequired"]) {
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).html(inputHelperText);
	// load input
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"targetContainer":defaultFormInputWrapperContainer,
		"inputSettings":settings["inputSettings"]
	});
}

function loadPhotoGroupInput (content, options) {
	var defaultLoadOrder = new Array();
	if (content["Data"]["Groups"]["photo"] != undefined) {
		$.each(content["Data"]["Groups"]["photo"]["SubElements"], function() {
			defaultLoadOrder.push(this["Id"]);
		});
	}
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultPhotoUploadGroupInputContainer,
		"viewContainer":defaultInputUploadGroupContainerView,
		"loadOrder":defaultLoadOrder,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputLabel = settings["inputSettings"]["inputLabel"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
	// if required field
	if (settings["inputSettings"]["inputRequired"]) {
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// load photo upload inputs
	if (settings["loadOrder"] != undefined) {
		$.each(settings["loadOrder"], function(key, value) {
			// set order to load inputs
			var photoLoadOrder = new Array ();
			if (content["Data"]["Groups"][value] != undefined) {
				$.each(content["Data"]["Groups"][value]["SubElements"], function() {
					photoLoadOrder.push(this["Id"]);
				});
			}
			if ((key + 1) == settings["loadOrder"].length) {
				settings["inputSettings"]["inputHidden"] = false;
			} else {
				settings["inputSettings"]["inputHidden"] = true;
			}
			// load photo upload input
			loadPhotoFileUploadInput (content, {
				"parentContainer":$template,
				"loadOrder":photoLoadOrder,
				"inputSettings":{
					"inputHidden":settings["inputSettings"]["inputHidden"],
				},
				"mediaSettings":{
					"contentType":settings["mediaSettings"]["contentType"],
				}
			});
		});
	}
}

function loadPhotoFileUploadInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultUploadGroupInputContainer,
		"viewContainer":defaultInputUploadIndividualContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	if (settings["inputSettings"]["inputHidden"]) {
		$($template).hide();
	}
	// set variables
	var urlInputName = settings["loadOrder"][0];
	var uploadInputName = "photo"; // DO NOT CHANGE - must be photo for upload to work
	var inputLabel = settings["inputSettings"]["inputLabel"];
	// add photo template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel);
	// if required field
	if (settings["inputSettings"]["inputRequired"]) {
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// load file upload input (this returns the url needed to submit the photo)
	loadUploadInput (content["Data"]["Fields"][urlInputName], {
		"parentContainer":$template,
		"inputSettings":{
			"inputName":uploadInputName
		}
	});
	// set functionality for upload input
	postPhotoSubmissionForm (settings["productId"], function(data) {
		// set variables
		var uploadInput = "input[name='" + uploadInputName + "']";
		// submit photo using the jquery.fileupload.js plugin to allow ajax submission without embedding a form
		$($template).find(uploadInput).andSelf().filter(uploadInput).fileupload({
			type: "POST",
			//enctype: 'multipart/form-data',
			// url: data["url"],
			url: defaultPhotoUploadProcessingFile,
			//multipart: false,
			formData: data["params"],
			dataType: "json",
	        done: function (e, result) {
				// load photo url input (this is what actually submits the photo)
				loadPhotoUploadPreviewInput (content, {
					"parentContainer":$template,
					"loadOrder":settings["loadOrder"]
				});
				// array to hold photo response in json. needed to replicate object sent on json response for display
				var arrPhoto = new Array ();
				arrPhoto.push(result["result"]["Photo"]);
				// load photo thumbnail
				loadReviewPhotosGroup (result["result"]["Photo"], {
					"parentContainer":$template,
					"loadOrder":arrPhoto
				});
				// set value on photo url input
				var urlInput = "input[name='" + urlInputName + "']";
				var urlPhotoNormal = result["result"]["Photo"]["Sizes"]["normal"]["Url"];
				$($template).find(urlInput).andSelf().filter(urlInput).attr({
					"value":urlPhotoNormal
				});
				// load close button
				loadCloseButton ("remove", {
					"parentContainer":$template,
				})
				// close button functionality
				$($template).find(defaultButtonCloseContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonCloseContainer + " " + defaultButtonContainer).click(function() {
					// close container
					$($template).addClass("_BVContentLoadingContainer").find(defaultPhotoUploadInputContainer).andSelf().filter(defaultPhotoUploadInputContainer).show();
					$($template).removeClass("_BVContentLoadingContainer").find(defaultPhotoUploadPreviewContainer).andSelf().filter(defaultPhotoUploadPreviewContainer).empty();
					$($template).hide();
					console.log($($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).children(":hidden").length);
					if ($($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).children(":hidden").length == 1) {
						// find next hidden upload input and show if available
						$($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).children(":hidden:first").each(function() {
							// move element to last position and show
							$(this).detach().prependTo($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).show();
						})
					}
				});
				// find next hidden upload input and show if available
				$($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).children(":hidden:first").each(function() {
					// move element to last position and show
					$(this).detach().prependTo($(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"])).show();
				})
	        	// show uploaded image preview container
	        	$($($template).removeClass("_BVContentLoadingContainer")).find(defaultPhotoUploadPreviewContainer).andSelf().filter(defaultPhotoUploadPreviewContainer).show();
	        },
			fail: function(e) {
				console.log("there was an error. please try again.", data);
	        	// show uploaded image preview container
	        	$($($template).removeClass("_BVContentLoadingContainer")).find(defaultPhotoUploadInputContainer).andSelf().filter(defaultPhotoUploadInputContainer).show();
				defaultAjaxErrorFunction(e);
			},
			beforeSend: function() {
				// hide file upload input
				$($template).addClass("_BVContentLoadingContainer").find(defaultPhotoUploadInputContainer).andSelf().filter(defaultPhotoUploadInputContainer).hide();
	        }
	    });
	}, {
		"Parameters":{
			"contenttype":settings["mediaSettings"]["contentType"],
		}
	});
}

function loadPhotoUploadPreviewInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultPhotoUploadPreviewContainer,
		"viewContainer":defaultInputUploadPhotoPreviewContainerView,
		"inputSettings":{
			"inputName":content["Id"],
			"inputType":content["Type"],
			"inputLabel":content["Label"],
			"inputRequired":content["Required"],
			"inputSubElements":content["SubElements"]
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var urlInputName = settings["loadOrder"][0];
	var captionInputName = settings["loadOrder"][1];
	var inputName = settings["inputSettings"]["inputName"];
	// add photo template
	$container.append($template);
	// hide photo preview container on load
	$($template).find(defaultPhotoUploadPreviewContainer).andSelf().filter(defaultPhotoUploadPreviewContainer).hide();
	// load photo caption input
	loadPhotoCaptionInput (content["Data"]["Fields"][captionInputName], {
		"parentContainer":$template,
		"inputSettings":{
			"inputLabel":"Add Caption",
		}
	});
	// load photo url input (hidden)
	loadPhotoUrlInput (content["Data"]["Fields"][urlInputName], {
		"parentContainer":$template,
	});
}

function loadPhotoCaptionInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFormPhotoCaptionInputWrapperContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	inputLabel = settings["inputSettings"]["inputLabel"];
	inputName = settings["inputSettings"]["inputName"];
	inputHelperText = settings["inputSettings"]["inputHelperText"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName,
	});
	// if required field
	if (settings["inputSettings"]["inputRequired"]) {
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(inputHelperText);
	// load input
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"inputSettings":settings["inputSettings"]
	});
}

function loadPhotoUrlInput (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFormPhotoUrlInputWrapperContainer,
		"viewContainer":defaultInputContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	inputLabel = settings["inputSettings"]["inputLabel"];
	inputName = settings["inputSettings"]["inputName"];
	inputHelperText = settings["inputSettings"]["inputHelperText"];
	// add input template
	$container.append($template);
	// hide container
	$($template).hide();
	// set label
	$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).html(inputLabel).attr({
		"for":inputName,
	});
	// if required field
	if (settings["inputSettings"]["inputRequired"]) {
		$($template).find(defaultFormLabelTextContainer).andSelf().filter(defaultFormLabelTextContainer).addClass(requiredClass);
	}
	// set helper text
	$($template).find(defaultFormHelperTextContainer).andSelf().filter(defaultFormHelperTextContainer).text(inputHelperText);
	// load photo url input (hidden)
	loadTextFieldInput (content, {
		"parentContainer":$template,
		"viewContainer":defaultInputTextFieldHiddenContainerView,
		"inputSettings":settings["inputSettings"]
	});
}

// load an upload input
function loadUploadInput (content, options) {
	// content expected ["Data"]["Fields"][<fieldname>]
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultUploadIndividualInputContainer,
		"viewContainer":defaultInputUploadPhotoContainerView,
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
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var inputLabel = settings["inputSettings"]["inputLabel"]; // input label text
	var inputName = settings["inputSettings"]["inputName"]; // input name attribute
	var inputId = settings["inputSettings"]["inputName"]; // id attribute
	var inputRequired = settings["inputSettings"]["inputRequired"]; // required boolean
	var inputType = settings["inputSettings"]["inputType"];
	var inputPlaceholder = settings["inputSettings"]["inputPlaceholder"];
	// add input template
	$container.append($template);
	// set label
	$($template).find(defaultFormUploadLabelTextContainer).andSelf().filter(defaultFormUploadLabelTextContainer).html(inputLabel).attr({
		"for":inputId
	});
	// set input attributes
	$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).attr({
		"id":inputId,
		"name":inputName,
	});
	// required
	if (inputRequired == true) {
		$($template).find(defaultFormInputContainer).andSelf().filter(defaultFormInputContainer).addClass(requiredClass);
	}
}

// load indicators for required input
function loadRequiredIndicators (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultFormRequiredLabelTextContainer,
		"viewContainer":defaultInputRequiredIndicatorContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add input template
	$container.append($template);
}