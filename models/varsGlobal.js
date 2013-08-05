/***** CLIENT DEFAULTS *****/

// url path for staging site
var stagingURL = "http://localhost:8888/bvSDKFramework/";
var stagingSubmissionURL = "http://localhost:8888/bvSDKFramework/submission.html?";
// url pate for production site
var productionURL = "http://localhost:8888/bvSDKFramework/";
var productionSubmissionURL = "http://localhost:8888/bvSDKFramework/submission.html?";

// api parameter deautls
var apiDefaults = {
	"stagURL": "bazaarvoice.com/",
	"prodURL": "bazaarvoice.com/",
	"stagSubmissionURL": "stg.api.bazaarvoice.com/",
	"prodSubmissionURL": "api.bazaarvoice.com/",
	"customerName": "stg.api",
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
	"bvUAS": typeof userToken != 'undefined' ? userToken : "3130699631fd89ad48010ddf8851aee55573657249643d627674657374657231323326646174653d3230313330373031266d61786167653d333030", // encoded user string, or userToken if set
	"userId": "testuser",
	"userEmail":"bvspambox@gmail.com", //User's email address
	"userLocation":"austin, tx", //User location text
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



/***** SERVER SIDE URLS *****/

var defaultServerSideLanguage = "php";

var defaultReviewSubmissionFormProcessingFile = defaultServerSideLanguage + "/" + "bvReviewSubmissionProcess" + "." + defaultServerSideLanguage;
var defaultReviewCommentSubmissionFormProcessingFile = defaultServerSideLanguage + "/" + "bvReviewCommentSubmissionProcess" + "." + defaultServerSideLanguage;
var defaultQuestionSubmissionFormProcessingFile = defaultServerSideLanguage + "/" + "bvQuestionSubmissionProcess" + "." + defaultServerSideLanguage;
var defaultAnswerSubmissionFormProcessingFile = defaultServerSideLanguage + "/" + "bvAnswerSubmissionProcess" + "." + defaultServerSideLanguage;
var defaultStorySubmissionFormProcessingFile = defaultServerSideLanguage + "/" + "bvStorySubmissionProcess" + "." + defaultServerSideLanguage;
var defaultStoryCommentSubmissionFormProcessingFile = defaultServerSideLanguage + "/" + "bvStoryCommentSubmissionProcess" + "." + defaultServerSideLanguage;

var defaultFeedbackFormProcessingFile = defaultServerSideLanguage + "/" + "bvFeedbackProcess" + "." + defaultServerSideLanguage;

var defaultPhotoUploadProcessingFile = defaultServerSideLanguage + "/" + "bvPhotoUploadProcess" + "." + defaultServerSideLanguage;
var defaultVideoUploadFormProcessingFile = defaultServerSideLanguage + "/" + "bvVideoUploadProcess" + "." + defaultServerSideLanguage;



