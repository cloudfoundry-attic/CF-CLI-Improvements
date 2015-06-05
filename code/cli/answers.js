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
var cf_help = "Usage: [environment variables] cf [global options] command [arguments...] [command options]<br><br>" +
    "Type 'cf help [command]' for more details. Type 'cf help --admin' for a list of admin-only commands.<br><br>" +
    "<span class='cmdName'>api</span>/ Set or view target api url<br>" +
    "<span class='cmdName'>app</span>/ Display health and status for app<br>" +
    "<span class='cmdName'>apps</span>/ List all apps in the target space<br>" +
    "<span class='cmdName'>auth</span>/ Authenticate user non-interactively<br>" +
    "<span class='cmdName'>config</span>/ Write default values to CF CLI configuration<br>" +
    "<span class='cmdName'>copy-source</span>/ Make a copy of app source code from one application to another<br>" +
    "<span class='cmdName'>curl</span>/ Execute a raw request<br>" +
    "<span class='cmdName'>delete</span>/ Delete an app<br>" +
    "<span class='cmdName'>env</span>/ Show all env variables for an app<br>" +
    "<span class='cmdName'>events</span>/ Show recent app events<br>" +
    "<span class='cmdName'>files</span>/ Print out a list of files in a directory or the contents of a specific file<br>" +
    "<span class='cmdName'>help</span>/ Show this help<br>" +
    "<span class='cmdName'>login, l</span>/ Log in to a specific CF API endpoint<br>" +
    "<span class='cmdName'>logs</span>/ Tail or show recent logs for an app<br>" +
    "<span class='cmdName'>marketplace, m</span>/ List available offerings in the marketplace<br>" +
    "<span class='cmdName'>org</span>/ Show org info<br>" +
    "<span class='cmdName'>plugins</span>/ List all available plugin commands<br>" +
    "<span class='cmdName'>push, p</span>/ Push a new app or sync changes to an existing app<br>" +
    "<span class='cmdName'>rename</span>/ Rename an app<br>" +
    "<span class='cmdName'>rename-org</span>/ Rename an org<br>" +
    "<span class='cmdName'>restage, rg</span>/ Restage an app<br>" +
    "<span class='cmdName'>restart, rs</span>/ Restart an app<br>" +
    "<span class='cmdName'>routes, r</span>/ List all routes in the current space<br>" +
    "<span class='cmdName'>scale</span>/ Set or view app instance count, disk space, and memory limit<br>" +
    "<span class='cmdName'>services, s</span>/ List all service instances in the target space<br>" +
    "<span class='cmdName'>service-auth-tokens</span>/ List service auth tokens<br>" +
    "<span class='cmdName'>set-env</span>/ Set an environment variable for an app<br>" +
    "<span class='cmdName'>space</span>/ Show space info<br>" +
    "<span class='cmdName'>stacks</span>/ List all stacks<br>" +
    "<span class='cmdName'>start</span>/ Start an app<br>" +
    "<span class='cmdName'>stop</span>/ Stop an app<br>" +
    "<span class='cmdName'>target</span>/ Set or view the targeted org or space<br>" +
    "<span class='cmdName'>unset-env</span>/ Remove an env variable<br><br>" +
    "<span class='cmdName'>--version, -v</span>/ Print the version<br>" +
    "<span class='cmdName'>--help, -h</span>/ Show help<br><br>" +
    "<span class='envName'>CF_COLOR=false</span>/ Do not colorize output<br>" +
    "<span class='envName'>CF_HOME=path/to/dir/</span>/ Override path to default config directory<br>" +
    "<span class='envName'>CF_PLUGIN_HOME=path/to/dir/</span>/ Override path to default plugin config directory<br>" +
    "<span class='envName'>CF_STAGING_TIMEOUT=15</span>/ Max wait time for buildpack staging, in minutes<br>" +
    "<span class='envName'>CF_STARTUP_TIMEOUT=5</span>/ Max wait time for app instance startup, in minutes<br>" +
    "<span class='envName'>CF_TRACE=true</span>/ Print API request diagnostics to stdout<br>" +
    "<span class='envName'>CF_TRACE=path/to/trace.log</span>/ Append API request diagnostics to a log file<br>" +
    "<span class='envName'>HTTP_PROXY=proxy.example.com:8080</span>/ Enable HTTP proxying for API requests";

// cf help --admin
var cf_help_admin = "Usage: [environment variables] cf [global options] command [arguments...] [command options]<br><br>" +
    "Type 'cf help [command]'' for more details.<br><br>" +
    "Admin-only commands:<brcf ><br>" +
    "<span class='cmdName'>orgs, o</span>/ List all orgs<br>" +
    "<span class='cmdName'>create-org, co</span>/ Create an org<br>" +
    "<span class='cmdName'>delete-org, co</span>/ Delete an org<br>" +
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
    "<span class='envName'>--version, -v</span>/ Print the version<br>" +
    "<span class='envName'>--help, -h</span>/ Show help<br><br>" +
    "<span class='envName'>CF_COLOR=false</span>/ Do not colorize output<br>" +
    "<span class='envName'>CF_HOME=path/to/dir/</span>/ Override path to default config directory<br>" +
    "<span class='envName'>CF_PLUGIN_HOME=path/to/dir/</span>/ Override path to default plugin config directory<br>" +
    "<span class='envName'>CF_STAGING_TIMEOUT=15</span>/ Max wait time for buildpack staging, in minutes<br>" +
    "<span class='envName'>CF_STARTUP_TIMEOUT=5</span>/ Max wait time for app instance startup, in minutes<br>" +
    "<span class='envName'>CF_TRACE=true</span>/ Print API request diagnostics to stdout<br>" +
    "<span class='envName'>CF_TRACE=path/to/trace.log</span>/ Append API request diagnostics to a log file<br>" +
    "<span class='envName'>HTTP_PROXY=proxy.example.com:8080</span>/ Enable HTTP proxying for API requests<br>";

// cf help space
var cf_help_space = "NAME:<br>" +
    "   <span class='indent'></span>space - Show space info<br><br>" +
    "USAGE:<br>" +
    "   <span class='indent'></span>cf space SPACE<br><br>" +
    "RELATED COMMANDS:<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>spaces               </span> List all spaces in an org<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>create-space         </span> Create a space<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>delete-space         </span> Delete a space<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>rename-space         </span> Rename a space<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>routes, r            </span> List all routes in the current space<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>create-route         </span> Create a url route in a space for later use<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>space-users          </span> Show space users by role<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>set-space-role       </span> Assign a space role to a user<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>unset-space-role     </span> Remove a space role from a user<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>space-quota          </span> Show space quota info<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>space-quotas         </span> List available space resource quotas<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>create-space-quota   </span> Define a new space resource quota<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>update-space-quota   </span> update an existing space quota<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>delete-space-quota   </span> Delete a space quota definition and unassign the space quota from all spaces<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>set-space-quota      </span> Assign a space quota definition to a space<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>unset-space-quota    </span> Unassign a quota from a space<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>bind-security-group  </span> Bind a security group to a space<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>unbind-security-group</span> Unbind a security group from a space";

// cf help routes
var cf_help_routes = "NAME:<br>" +
    "   <span class='indent'></span>routes - List all routes in the current space<br><br>" +
    "ALIAS:<br>" +
    "   <span class='indent'></span>r<br><br>" +
    "USAGE:<br>" +
    "   <span class='indent'></span>cf routes<br><br>" +
    "RELATED COMMANDS:<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>create-route          </span> Create a url route in a space for later use<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>check-route           </span> Perform a simple check to determine whether a route currently exists or not.<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>map-route             </span> Add a url route to an app<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>unmap-route           </span> Remove a url route from an app<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>delete-route          </span> Delete a route<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>delete-orphaned-routes</span> Delete all orphaned routes (e.g.: those that are not mapped to an app)";

// cf help env
var cf_help_env = "NAME:<br>" +
    "   <span class='indent'></span>env - Show all environment variables for an app<br><br>" +
    "ALIAS:<br>" +
    "   <span class='indent'></span>e<br><br>" +
    "USGAE:<br>" +
    "   <span class='indent'></span>cf env APP<br><br>" +
    "RELATED COMMANDS:<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>set-env, se                                   </span> Set an env variable for an app<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>unset-env                                     </span> Remove an env variable<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>running-environment-variable-group, revg      </span> Retrieve the contents of the running environment variable group<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>staging-environment-variable-group, sevg      </span> Retrieve the contents of the staging environment variable group<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>set-staging-environment-variable-group, ssevg </span> Pass parameters as JSON to create a staging environment variable group<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>set-running-environment-variable-group, srevg </span> Pass parameters as JSON to create a running environment variable group";

// cf help orgs
var cf_help_orgs = "NAME:<br>" +
    "   <span class='indent'></span>orgs - List all orgs<br><br>" +
    "ALIAS:<br>" +
    "   <span class='indent'></span>o<br><br>" +
    "USAGE:<br>" +
    "   <span class='indent'></span>cf orgs<br><br>" +
    "RELATED COMMANDS:<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>target, t              </span> Set or view the targeted org or space<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>org                    </span> Show org info<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>create-org, co         </span> Create an org<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>delete-org             </span> Delete an org<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>rename-org             </span> Rename an org<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>spaces                 </span> List all spaces in an org<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>domains                </span> List domains in the target org<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>create-domain          </span> Create a domain in an org for later use<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>create-shared-domain   </span> Create a domain that can be used by all orgs (admin-only)<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>org-users              </span> Show org users by role<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>set-org-role           </span> Assign an org role to a user<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>unset-org-role         </span> Remove an org role from a user<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>set-quota              </span> Assign a quota to an org<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>enable-service-access  </span> Enable access to a service or service plan for one or all orgs<br>" +
    "   <span class='indent'></span> <span class='subCmdName'>disable-service-access </span> Disable access to a service or service plan for one or all orgs";
