var ansOne = "<br/>" + "Setting api endpoint to https://api.ng.bluemix.net... <br />" +
    "<div style='color:#00CA00'>OK</div> <br />" +

    "API endpoint:   https://api.ng.bluemix.net (API version: 2.4.0)<br />" +
    "User:           lynnbrook@posthaste.com<br />" +
    "Org:            lynnbrook@posthaste.com <br />" +
    "Space:          dev<br />" +
    "<br />";
/*Second output*/
var ansTwo = "API endpoint: https://api.ng.bluemix.net<br /><br />" +
    "Password> <br />" +
    "Authenticating...<br /><br />" +
    "<div style='color:#00CA00'>OK</div><br />" +
    "Targeted org lynnbrook@posthaste.com<br />" +
    "Targeted space dev<br /><br />" +
    "API endpoint:   https://api.ng.bluemix.net (API version: 2.4.0)<br />" +
    "User:           lynnbrook@posthaste.com<br />" +
    "Org:            lynnbrook@posthaste.com<br />" +
    "Space:          dev<br />" +
    "<br />";

var ansThree =
    "<br />Server error, status code: 400, error code: 170001, message: Staging error: cannot get instances since staging failed<br /><br />" +
    "ERROR DESCRIPTION<br />" +
    "A staging error occurs during a push to Bluemix, during this time servers and services are being configured. A staging error could mean that the files did not finish uploading, the push ran out of time or the push is exceeding max size.<br /><br />" +

    "FREQUENCY<br />" +
    "high<br />" +
    "SOURCE<br />" +
    "This information is taken from the CloudFoundry Docs. http://docs.cloudfoundry.org/devguide/deploy-apps/troubleshoot-app-health.html#trace<br />" +
    "<br />" +
    "TIP: use &#8216bm -help&#8217; to continue troubleshooting<br />" +
    "<br />";

var ansFour = "BLUEMIX TROUBLESHOOTER<br /><br />" +
    "1. Type &#8216bm [ERROR CODE] -description&#8217; for a description from documentation<br />" +
    "2. Type &#8216bm [ERROR CODE] -solutions&#8217; for a list of possible solutions<br />" +
    "3. Type &#8216bm [ERROR CODE] -wiki&#8217; for a community sourced answer<br />" +
    "4. Type &#8216bm [ERROR CODE] -all&#8217; for all the above<br />" +
    "<br />";

var ansFive = "ERROR DESCRIPTION<br />" +
    "A staging error occurs during a push to Bluemix, during this time servers and services are being configured. A staging error could mean that the files did not finish uploading, the push ran out of time or the push is exceeding max size.<br />" +

    "FREQUENCY<br />" +
    "high<br />" +
    "SOURCE<br />" +
    "This information is taken from the CloudFoundry Docs. http://docs.cloudfoundry.org/devguide/deploy-apps/troubleshoot-app-health.html#trace<br />" +
    "<br />";

var ansSix = "POSSIBLE SOLUTIONS<br />" +
    "A cf push can time out during an upload or a staging. <br /><br />" +

    "#1 PUSH REPEATEDLY. If your app contains a large number of files, try pushing the app repeatedly. Each push uploads a few more files. Eventually, all files have uploaded and the push succeeds. This is less likely to work if your app has many small files.<br />" +
    "#2 REDUCE SIZE OF UPLOAD. If your application is too large, or if it has many small files, Cloud Foundry may time out during the upload.  Remove unneeded files or specify files to be ignored.  You can also reduce the size of the upload by removing unneeded files or specifying files to be ignored in the .cfignore file. <br />" +
    "#3 INCREASE STAGING TIME. Set the CF_STAGING_TIMEOUT and CF_STARTUP_TIMEOUT environment variables. By default your app has 15 minutes to stage and 5 minutes to start. You can increase these times by setting CF_STAGING_TIMEOUT and CF_STARTUP_TIMEOUT. Type cf help at the command line for more information.<br /><br />" +
    "SOURCE<br />" +
    "This information is taken from the CloudFoundry Docs. http://docs.cloudfoundry.org/devguide/deploy-apps/troubleshoot-app-health.html#trace<br />" +
    "<br />";

var ansSeven = "COMMUNITY ANSWER<br />" +
    "# this error is really vague. best thing to do is keep pushing 170001 http://bropages.org<br /><br />" +

    "useful      to upvote (68)<br />" +
    "...no       to downvote (5)<br />" +
    "<br />" +
    "...........................................................................<br /><br />" +
    "# I just waited an hour and it worked fine 170001 http://bropages.org <br /><br />" +

    "useful      to upvote (68)<br />" +
    "...no       to downvote (5)<br />" +
    "<br />"

var ansEight = "ERROR DESCRIPTION<br />" +
    "A staging error occurs during a push to Bluemix, during this time servers and services are being configured. A staging error could mean that the files did not finish uploading, the push ran out of time or the push is exceeding max size.<br />" +

    "FREQUENCY<br />" +
    "high<br />" +
    "SOURCE<br />" +
    "This information is taken from the CloudFoundry Docs. http://docs.cloudfoundry.org/devguide/deploy-apps/troubleshoot-app-health.html#trace<br />" +
    "<br /><br /><br />" +

    "POSSIBLE SOLUTIONS<br />" +
    "A cf push can time out during an upload or a staging. <br /><br />" +

    "#1 PUSH REPEATEDLY. If your app contains a large number of files, try pushing the app repeatedly. Each push uploads a few more files. Eventually, all files have uploaded and the push succeeds. This is less likely to work if your app has many small files.<br />" +
    "#2 REDUCE SIZE OF UPLOAD. If your application is too large, or if it has many small files, Cloud Foundry may time out during the upload.  Remove unneeded files or specify files to be ignored.  You can also reduce the size of the upload by removing unneeded files or specifying files to be ignored in the .cfignore file. <br />" +
    "#3 INCREASE STAGING TIME. Set the CF_STAGING_TIMEOUT and CF_STARTUP_TIMEOUT environment variables. By default your app has 15 minutes to stage and 5 minutes to start. You can increase these times by setting CF_STAGING_TIMEOUT and CF_STARTUP_TIMEOUT. Type cf help at the command line for more information.<br /><br />" +
    "SOURCE<br />" +
    "This information is taken from the CloudFoundry Docs. http://docs.cloudfoundry.org/devguide/deploy-apps/troubleshoot-app-health.html#trace<br />" +
    "<br /><br /><br />" +

    "COMMUNITY ANSWER<br />" +
    "# this error is really vague. best thing to do is keep pushing 170001 http://bluemix.org<br /><br />" +

    "useful      to upvote (68)<br />" +
    "...no       to downvote (5)<br />" +
    "<br />" +
    "...........................................................................<br /><br />" +

    "# I just waited an hour and it worked fine 170001 http://bluemix.org <br /><br />" +

    "useful      to upvote (68)<br />" +
    "...no       to downvote (5)<br />" +
    "<br />"

var ansNine = "Using manifest file /Users/lbrooke/Documents/postehaste/manifest.yml<br /><br />" +
    "Updating app postehaste in org lynnbrooke@postehaste.com / space dev as lynnbrooke@postehaste.com...<br />" +

    "<div style='color:#00CA00'>OK</div><br /><br />" +
    "Using route postehaste.stage1.mybluemix.net<br />" +
    "Uploading postehaste...<br />" +
    "Uploading app files from: /Users/lbrooke/Documents/postehaste<br />" +
    "Uploading 184.6K, 32 files<br />" +
    "<div style='color:#00CA00'>OK</div><br />" +
    "Binding service postehaste:cloudantNoSQLDB to app postehaste in org lynnbrooke@postehaste.com / space dev as lynnbrooke@postehaste.com...<br />" +
    "<div style='color:#00CA00'>OK</div><br />" +
    "<br /><br />" +

    "Stopping app postehaste in org lynnbrooke@postehaste.com / space dev as lynnbrooke@postehaste.com...<br />" +
    "<div style='color:#00CA00'>OK</div> <br /><br />" +

    "Starting app postehaste in org lynnbrooke@postehaste.com / space dev as lynnbrooke@postehaste.com...<br />" +
    " <br />" +

    "-----> Downloaded app package (3.8M)<br />" +
    "-----> Downloaded app buildpack cache (1.4M)<br />" +
    "-----> Downloaded app buildpack cache (1.4M)<br />" +
    "-----> Resolving node version by IBM<br />" +
    "PRO TIP: Specify a node version in package.json<br />" +
    "-----> Installing IBM SDK for Node.js from admin cache<br />" +
    "-----> Checking and configuring service extensions<br />" +
    "-----> Application bound service: [cloudantNoSQLDB]<br />" +
    "-----> Add service extension at the start of the application staging<br />" +

    "-----> Copy resources/sqldb/set_ibm_db_home.sh to application directory <br />" +
    "-----> Set staging env: source set_ibm_db_home.sh<br />" +
    "-----> Set boot env: export LD_LIBRARY_PATH=HOME/clidriver/lib:$LD_LIBRARY_PATH for application<br />" +
    "-----> Restoring node_modules directory from cache<br />" +
    "-----> Installing dependencies npm WARN package.json cradle@0.6.7 No repository field.<br />" +
    "-----> Writing a custom .npmrc to circumvent npm bugs<br />" +
    "-----> Checking and configuring service extensions<br />" +
    "-----> Checking and configuring service extensions<br />" +
    "-----> Uploading droplet (37M)<br /><br />" +


    "0 of 1 instances running, 1 starting<br />" +
    "1 of 1 instances running<br /><br />" +

    "App started<br /><br />" +
    "Showing health and status for app posthaste in org lynnbrook@posthaste.com / space dev as<br />" +
    "lynnbrook@posthaste.com...<br />" +
    "<div style='color:#00CA00'>OK</div><br /><br />" +
    "instances: 1/1<br />" +
    "usage: 512M x 1 instances<br />" +
    "urls: posthaste.mybluemix.net<br /><br />" +

    "     state     since                    cpu    memory          disk   <br />" +
    "#0   running   2014-08-07 09:55:17 PM   0.0%   30.4M of 512M   117.1M of 1G  <br />" +
    "urls: posthaste.mybluemix.net<br />";