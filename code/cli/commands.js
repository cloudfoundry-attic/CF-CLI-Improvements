

$(document).ready(function($) {
    function lastLogin() {
        var now = Date.now();
    }
    var push = 0;
    var greeting = 'Last login: Tue Jun  2 16:18:21 on ttys000\n\n######                                       \n#     # #      #    # ###### #    # # #    # \n#     # #      #    # #      ##  ## #  #  #  \n######  #      #    # #####  # ## # #   ##   \n#     # #      #    # #      #    # #   ##   \n#     # #      #    # #      #    # #  #  #  \n######  ######  ####  ###### #    # # #    # \n';
    var prompt = '~ > ';

    $('#cfTerm').terminal(function(command, term) {

        // answers will appear in the same order as below
        switch(command) {
            case('cf api'):
                term.echo(ansOne, {raw:true});
                break;
            case('cf login'):
                term.echo(ansTwo, {raw:true});
                break;
            case('cf push'):
                if(push === 0) {
                    push++;
                    console.log(push);
                    term.error('FAILED');
                    term.echo(ansThree, {raw:true});
                } else if (push > 0) {
                    term.echo(ansNine,{raw:true});
                }
                break;
            case('cf help'):
                term.echo(cf_help, {raw:true});
                break;
            case('cf help --admin'):
                term.echo(cf_help_admin, {raw:true});
                break;
            case('cf help space'):;
            case('cf space --help'):;
            case('cf space -h'):
                term.echo(cf_help_space, {raw:true});
                break;
            case('cf help routes'):;
            case('cf routes --help'):;
            case('cf routes -h'):
                term.echo(cf_help_routes, {raw:true});
                break;
            case('cf help env'):;
            case('cf env --help'):;
            case('cf env -h'):
                term.echo(cf_help_env, {raw:true});
                break;
            case('cf help orgs'):;
            case('cf orgs --help'):;
            case('cf orgs -h'):
                term.echo(cf_help_orgs, {raw:true});
                break;
            case('bluemix -help'):
                term.echo(ansFour, {raw:true});
                break;
            case('bluemix 170001 -description'):
                term.echo(ansFive,{ raw:true});
                break;
            case('bluemix 170001 -solutions'):
                term.echo(ansSix,{ raw:true});
                break;
            case('bluemix 170001 -wiki'):
                term.echo(ansSeven,{ raw:true});
                break;
            case('bluemix 170001 -all'):
                term.echo(ansEight,{ raw:true});
                break;
            default:
                term.echo("unknown command " + command);
        }

    }, {
        greetings: greeting,
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        name: 'Bluemix Terminal Emulator',
        prompt: prompt
    });
});

