

    $(document).ready(function($) {
        var push = 0;
        $('#cfTerm').terminal(function(command, term) {

            // answers will appear in the same order as below
            if (command == 'cf api') {
                term.echo(ansOne,{ raw:true});
            } else if (command == 'cf login'){
                term.echo(ansTwo,{ raw:true});
            } else if (command == 'cf push' && push == 0){
                push++;
                console.log(push);
                term.error("FAILED");
                term.echo(ansThree,{ raw:true});
            } else if (command == 'cf push' && push > 0){
                term.echo(ansNine,{ raw:true});
            }
            else if (command == 'bm -help'){
                term.echo(ansFour,{ raw:true});
            } else if (command == 'bm 170001 -description'){
                term.echo(ansFive,{ raw:true});
            } else if (command == 'bm 170001 -solutions'){
                term.echo(ansSix,{ raw:true});
            } else if (command == 'bm 170001 -wiki'){
                term.echo(ansSeven,{ raw:true});
            } else if (command == 'bm 170001 -all'){
                term.echo(ansEight,{ raw:true});
            }


            else {
                term.echo("unknown command " + command);
            }
        }, {
            greetings: "Bluemix Terminal Emulator",
            onBlur: function() {
                // prevent loosing focus
                return false;
            }
        });
    });

