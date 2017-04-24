var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline

  // This could be restructured to a switch statement
  if(cmd === 'pwd') {
    commands.pwd();
  } else if (cmd === 'date') {
    process.stdout.write(Date().trim());
  } else if (cmd === 'ls') {
    commands.ls();
	} else if (cmd.match(/^cat +/)) {
    commands.cat(cmd.replace(/^cat +/,''));
  } else if (cmd.match(/^head +/)) {
    commands.head(cmd.replace(/^head +/,''));
  } else if (cmd.match(/^tail +/)) {
    commands.tail(cmd.replace(/^tail +/,''));
  } else {
  process.stdout.write('You typed: ' + cmd);
  };
  process.stdout.write('\nprompt > ');
});
