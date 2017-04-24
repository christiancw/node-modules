var fs = require('fs');

module.exports = {
  pwd: function() {
    process.stdout.write(process.cwd().trim());
  },

  ls: function(path) {
    if(!path) path = '.';
    fs.readdir(path, function(err,files) {
      if(err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + '\n');
      });
    });
  },

  cat: function(file) {
    fs.readFile(file, (err, data) => {
		  if (err) throw err;
		  process.stdout.write(data.toString());
		});
  },

  head: function(file) {
    fs.readFile(file, (err, data) => {
      if(err) throw err;
      process.stdout.write(data.toString().split('\n').slice(0,5).join('\n'));
    });
    //process.stdout.write(typeof headData)
    //headData = headData.split('\n').slice(0,5).join('\n');
    //process.stdout.write(headData);
  },

  tail: function(file) {
    fs.readFile(file, (err, data) => {
      if(err) throw err;
      process.stdout.write(data.toString().split('\n').slice(-5).join('\n'))
    })
  }
};
