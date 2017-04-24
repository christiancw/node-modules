// var exports = module.exports;
var fs = require('fs');
module.exports = {
  pwd: function(path){
    process.stdout.write(process.cwd().trim());
  },
  date: function(string){
    process.stdout.write(Date().trim());
  },
  ls: function(path){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },
  echo: function(string){
    process.stdout.write(string);
  },
  cat: function(file){
    fs.readFile(file, function(err, data){
      if (err) throw err;
      proces.stdout.write(data.toString())
      }
    })
  },
  head: function(file){

  },
  tail: function(file){

  },
}

process.stdout.write('prompt > ');



// module.exports.pwd = function(){
//   // var cmd = data.toString().trim();
//   // if (cmd === 'pwd'){
//     process.stdout.write(process.cwd().trim());
//
// }
