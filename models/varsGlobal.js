/***** CLIENT DEFAULTS *****/

// url path for staging site
var stagingURL = stagingURL || (location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/bvSDKFramework/");
var stagingSubmissionURL = stagingSubmissionURL || (location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/submission.html?");
// url pate for production site
var productionURL = productionURL || (location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/bvSDKFramework/");
var productionSubmissionURL = productionSubmissionURL || (location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/submission.html?");

// api parameter defaults
var apiDefaults = {
	"stagURL": "stg.api.bazaarvoice.com/",
	"prodURL": "api.bazaarvoice.com/",
	"stagSubmissionURL": "stg.api.bazaarvoice.com/",
	"prodSubmissionURL": "api.bazaarvoice.com/",
	"customerName": "cssandbox.ugc",
	// "customerName": "bvpstemplates.ugc",
	"format": "json",
	"apiVersion": "5.4",
	"passkey": "iwmji1d018b62e3fshc70qaj8",
	// "passkey": "56m3b2rfbcquf5j6fejjuu3w", //cssandbox apikey: iwmji1d018b62e3fshc70qaj8
	"offset": 0,
	"limitReviews": 10,
	"limitReviewComments": 2,
	"limitQuestions": 10,
	"limitAnswers": 2,
	"limitStories": 10,
	"limitStoryComments": 2,
	"page": 1
};

var bvUserDefaults = {
	"bvUAS": typeof userToken != 'undefined' ? userToken : "", // encoded user string, or userToken if set
	"userId": "testuser",
	"userEmail":"bvspambox@gmail.com", //User's email address
	"userLocation":null, //User location text
	"userNickname":"testuser", //User nickname display text
};

var controllerSubmissionDefaults = {
	"minimumCharacterCounter": 50
};

/***** SET SITE TO PRODUCTION *****/
// true = production
// false = staging

var production = false;



/***** SET SITE URLS *****/

var apiBaseURL;
var apiBaseSubmissionURL;
	if (production) {
		apiBaseURL = apiDefaults["prodURL"];
		apiBaseSubmissionURL = apiDefaults["prodSubmissionURL"];
	} else {
		apiBaseURL = apiDefaults["stagURL"];
		apiBaseSubmissionURL = apiDefaults["stagSubmissionURL"];
};

var siteBaseURL;
var siteBaseSubmissionURL;
	if (production) {
		siteBaseURL = productionURL;
		siteBaseSubmissionURL = productionSubmissionURL;
	} else {
		siteBaseURL = stagingURL;
		siteBaseSubmissionURL = stagingSubmissionURL;
};


/***** TOGGLE OPTIONS *****/
var defaultToggleOptions = {
	duration: 300,
	easing: "swing",
	queue: true
};

/***** INLINE VALIDATION OPTIONS *****/
var requiredClass = "BVRequired";

var defaultInlineValidationOption = {
	successClass: 'BVSuccess',
	errorClass: 'BVError',
	messages: {
		"required":"This is a required field",
		"alphanum":"You may not enter spaces or special characters, numbers and letters only.",
	},
	errors: {
		container: function (elem, isRadioOrCheckbox) {
			return $(elem).closest(".BVField");
		},
		classHandler: function (elem, isRadioOrCheckbox) {
			return $(elem).closest(".BVField");
		},
		errorsWrapper:"<div class='BVErrorContainerInline'></div>",
		errorElem:"<div class='BVErrorInline'></div>",
	}
};

/***** DECIMAL TRUNCATION OPTIONS *****/
var defaultDecimalOptions = {
	"overallAverage": 1,
	"secondaryAverage": 1,
	"overall": 1,
	"secondary": 1,
	"overallRange": 0,
	"secondaryRange": 0
};

/***** SERVER SIDE URLS *****/

var defaultServerSideLanguage = "php";

var defaultReviewSubmissionFormProcessingFile = siteBaseURL + "php/bvReviewSubmissionProcess.php";
var defaultReviewCommentSubmissionFormProcessingFile = siteBaseURL + "php/bvReviewCommentSubmissionProcess.php";
var defaultQuestionSubmissionFormProcessingFile = siteBaseURL + "php/bvQuestionSubmissionProcess.php";
var defaultAnswerSubmissionFormProcessingFile = siteBaseURL + "php/bvAnswerSubmissionProcess.php";
var defaultStorySubmissionFormProcessingFile = siteBaseURL + "php/bvStorySubmissionProcess.php";
var defaultStoryCommentSubmissionFormProcessingFile = siteBaseURL + "php/bvStoryCommentSubmissionProcess.php";

var defaultFeedbackFormProcessingFile = siteBaseURL + "php/bvFeedbackProcess.php";

var defaultPhotoUploadProcessingFile = siteBaseURL + "php/bvPhotoUploadProcess.php";
var defaultVideoUploadFormProcessingFile = siteBaseURL + "php/bvVideoUploadProcess.php";



