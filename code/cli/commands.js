

    $(document).ready(function($) {
        function lastLogin() {
            var now = Date.now();
        }
        var push = 0;
        var greeting = 'Last login: Tue Jun  2 16:18:21 on ttys000\n\n######                                       \n#     # #      #    # ###### #    # # #    # \n#     # #      #    # #      ##  ## #  #  #  \n######  #      #    # #####  # ## # #   ##   \n#     # #      #    # #      #    # #   ##   \n#     # #      #    # #      #    # #  #  #  \n######  ######  ####  ###### #    # # #    # \n';

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



            // if (command == 'cf api') {
            //     term.echo(ansOne,{ raw:true});
            // } else if (command == 'cf login'){
            //     term.echo(ansTwo,{ raw:true});
            // } else if (command == 'cf push' && push == 0){
            //     push++;
            //     console.log(push);
            //     term.error("FAILED");
            //     term.echo(ansThree,{ raw:true});
            // } else if (command == 'cf push' && push > 0){
            //     term.echo(ansNine,{ raw:true});
            // }
            // else if (command == 'bm -help'){
            //     term.echo(ansFour,{ raw:true});
            // } else if (command == 'bm 170001 -description'){
            //     term.echo(ansFive,{ raw:true});
            // } else if (command == 'bm 170001 -solutions'){
            //     term.echo(ansSix,{ raw:true});
            // } else if (command == 'bm 170001 -wiki'){
            //     term.echo(ansSeven,{ raw:true});
            // } else if (command == 'bm 170001 -all'){
            //     term.echo(ansEight,{ raw:true});
            // } else {
            //     term.echo("unknown command " + command);
            // }

        }, {
            greetings: greeting,
            onBlur: function() {
                // prevent loosing focus
                return false;
            },
            name: 'Bluemix Terminal Emulator',
            prompt: '~ > '
        });
    });

