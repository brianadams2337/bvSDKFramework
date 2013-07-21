
function loadEventListeners(content, options) {
	//event listener character counter
	if(options["textFieldCounter"] !== 'undefined') {
		$(defaultFormCharacterCounterTextContainer).html(controllerSubmissionDefaults["minimumCharacterCounter"]);
		$(options["textFieldCounter"]["textField"]).bind('input', function(e) {
			if(controllerSubmissionDefaults["minimumCharacterCounter"] >= e["currentTarget"]["textLength"]) {
		    	$(defaultFormCharacterCounterTextContainer).html(controllerSubmissionDefaults["minimumCharacterCounter"]-e["currentTarget"]["textLength"]);
			}
			else {
				$(defaultFormCharacterCounterTextContainer).html("0");
			}
		}); 
	}
	else {
		console.log(options["textFieldCounter"]);
	}
}