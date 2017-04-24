// console.log(process);
// console.log(Object.keys(process))

var commands = require("./commands")
process.stdout.write('prompt > ');

process.stdin.on ('data', function(data){
  var cmd = data.toString().trim();
  if (cmd === 'pwd'){
    commands.pwd();
  }
  else if (cmd === 'Date'){
      commands.date();
    }
  else if (cmd === 'ls'){
    commands.ls();
  }
  else if (cmd.slice(0,3) === 'cat'){
    commands.cat(cmd.split(4,cmd.length));
  }
  else if (cmd.split(" ")[0] === 'echo'){
    commands.echo(cmd.replace(/^echo +/,""));
  }
  else {
    process.stdout.write('you typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    }
  }
  );
