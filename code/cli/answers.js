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
    "TIP: use &#8216bluemix -help&#8217; to continue troubleshooting<br />" +
    "<br />";

var ansFour = "BLUEMIX TROUBLESHOOTER<br /><br />" +
    "1. Type &#8216bluemix [ERROR CODE] -description&#8217; for a description from documentation<br />" +
    "2. Type &#8216bluemix [ERROR CODE] -solutions&#8217; for a list of possible solutions<br />" +
    "3. Type &#8216bluemix [ERROR CODE] -wiki&#8217; for a community sourced answer<br />" +
    "4. Type &#8216bluemix [ERROR CODE] -all&#8217; for all the above<br />" +
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

    //cf help
    var ansTen = "Usage: [environment variables] cf [global options] command [arguments...] [command options]<br><br>" +
        "Type 'cf help [command]' for more details. Type 'cf help --admin' for a list of admin-only commands.<br><br>" +
        "api                     / Set or view target api url<br>" +
        "app                    / Display health and status for app<br>" +
        "apps                   / List all apps in the target space<br>" +
        "auth                   / Authenticate user non-interactively<br>" +
        "config                 / Write default values to CF CLI configuration<br>" +
        "copy-source            / Make a copy of app source code from one application to another<br>" +
        "curl                   / Execute a raw request<br>" +
        "delete                 / Delete an app<br>" +
        "env                    / Show all env variables for an app<br>" +
        "events                 / Show recent app events<br>" +
        "files                  / Print out a list of files in a directory or the contents of a specific file<br>" +
        "help                   / Show this help<br>" +
        "login, l               / Log in to a specific CF API endpoint<br>" +
        "logs                   / Tail or show recent logs for an app<br>" +
        "marketplace, m         / List available offerings in the marketplace<br>" +
        "org                    / Show org info<br>" +
        "plugins                / List all available plugin commands<br>" +
        "push, p                / Push a new app or sync changes to an existing app<br>" +
        "rename                 / Rename an app<br>" +
        "rename-org             / Rename an org<br>" +
        "restage, rg            / Restage an app<br>" +
        "restart, rs            / Restart an app<br>" +
        "routes, r              / List all routes in the current space<br>" +
        "scale                  / Set or view app instance count, disk space, and memory limit<br>" +
        "services, s            / List all service instances in the target space<br>" +
        "service-auth-tokens    / List service auth tokens<br>" +
        "set-env                / Set an environment variable for an app<br>" +
        "space                  / Show space info<br>" +
        "stacks                 / List all stacks<br>" +
        "start                  / Start an app<br>" +
        "stop                   / Stop an app<br>" +
        "target                 / Set or view the targeted org or space<br>" +
        "unset-env              / Remove an env variable<br><br>" +
        "--version, -v          / Print the version<br>" +
        "--help, -h             / Show help<br><br>" +
        "CF_COLOR=false                    / Do not colorize output<br>" +
        "CF_HOME=path/to/dir/              / Override path to default config directory<br>" +
        "CF_PLUGIN_HOME=path/to/dir/       / Override path to default plugin config directory<br>" +
        "CF_STAGING_TIMEOUT=15             / Max wait time for buildpack staging, in minutes<br>" +
        "CF_STARTUP_TIMEOUT=5              / Max wait time for app instance startup, in minutes<br>" +
        "CF_TRACE=true                     / Print API request diagnostics to stdout<br>" +
        "CF_TRACE=path/to/trace.log        / Append API request diagnostics to a log file<br>" +
        "HTTP_PROXY=proxy.example.com:8080 / Enable HTTP proxying for API requests";

    // cf help --admin
    var ansEleven = "Usage: [environment variables] cf [global options] command [arguments...] [command options]<br><br>" +
        "Type 'cf help [command]'' for more details.<br><br>" +
        "Admin-only commands:<br><br>" +
        "orgs, o                / List all orgs<br>" +
        "create-org, co         / Create an org<br>" +
        "delete-org, co         / Delete an org<br>" +
        "spaces<br>" +
        "create-space<br>" +
        "delete-space<br>" +
        "domains<br>" +
        "create-domain<br>" +
        "delete-domain<br>" +
        "create-shared-domain<br>" +
        "delete-shared-domain<br>" +
        "buildpacks<br>" +
        "create-buildpack<br>" +
        "etc<br><br>" +
        "--version, -v          / Print the version<br>" +
        "--help, -h             / Show help<br><br>" +
        "CF_COLOR=false                    / Do not colorize output<br>" +
        "CF_HOME=path/to/dir/              / Override path to default config directory<br>" +
        "CF_PLUGIN_HOME=path/to/dir/       / Override path to default plugin config directory<br>" +
        "CF_STAGING_TIMEOUT=15             / Max wait time for buildpack staging, in minutes<br>" +
        "CF_STARTUP_TIMEOUT=5              / Max wait time for app instance startup, in minutes<br>" +
        "CF_TRACE=true                     / Print API request diagnostics to stdout<br>" +
        "CF_TRACE=path/to/trace.log        / Append API request diagnostics to a log file<br>" +
        "HTTP_PROXY=proxy.example.com:8080 / Enable HTTP proxying for API requests<br>";

        // cf help space
        var ansTwelve = "NAME:<br>" +
            "   space - Show space info<br><br>" +
            "USAGE:<br>" +
            "   cf space SPACE<br><br>" +
            "RELATED COMMANDS:<br>" +
            "   spaces                                        List all spaces in an org<br>" +
            "   create-space                                  Create a space<br>" +
            "   delete-space                                  Delete a space<br>" +
            "   rename-space                                  Rename a space<br>" +
            "   routes, r                                     List all routes in the current space<br>" +
            "   create-route                                  Create a url route in a space for later use<br>" +
            "   space-users                                   Show space users by role<br>" +
            "   set-space-role                                Assign a space role to a user<br>" +
            "   unset-space-role                              Remove a space role from a user<br>" +
            "   space-quota                                   Show space quota info<br>" +
            "   space-quotas                                  List available space resource quotas<br>" +
            "   create-space-quota                            Define a new space resource quota<br>" +
            "   update-space-quota                            update an existing space quota<br>" +
            "   delete-space-quota                            Delete a space quota definition and unassign the space quota from all spaces<br>" +
            "   set-space-quota                               Assign a space quota definition to a space<br>" +
            "   unset-space-quota                             Unassign a quota from a space<br>" +
            "   bind-security-group                           Bind a security group to a space<br>" +
            "   unbind-security-group                         Unbind a security group from a space";

        // cf help routes
        var ansThirteen = "NAME:<br>" +
        "   routes - List all routes in the current space<br><br>" +
        "ALIAS:<br>" +
        "   r<br><br>" +
        "USAGE:<br>" +
        "   cf routes<br><br>" +
        "RELATED COMMANDS:<br>" +
        "   create-route                                  Create a url route in a space for later use<br>" +
        "   check-route                                   Perform a simple check to determine whether a route currently exists or not.<br>" +
        "   map-route                                     Add a url route to an app<br>" +
        "   unmap-route                                   Remove a url route from an app<br>" +
        "   delete-route                                  Delete a route<br>" +
        "   delete-orphaned-routes                        Delete all orphaned routes (e.g.: those that are not mapped to an app)";

        // cf help env
        var ansFourteen = "NAME:<br>" +
            "   env - Show all environment variables for an app<br><br>" +
            "ALIAS:<br>" +
            "   e<br><br>" +
            "USGAE:<br>" +
            "   cf env APP<br><br>" +
            "RELATED COMMANDS:<br>" +
            "   set-env, se                                   Set an env variable for an app<br>" +
            "   unset-env                                     Remove an env variable<br>" +
            "   running-environment-variable-group, revg      Retrieve the contents of the running environment variable group<br>" +
            "   staging-environment-variable-group, sevg      Retrieve the contents of the staging environment variable group<br>" +
            "   set-staging-environment-variable-group, ssevg Pass parameters as JSON to create a staging environment variable group<br>" +
            "   set-running-environment-variable-group, srevg Pass parameters as JSON to create a running environment variable group";

        // cf help orgs
        var ansFifteen;