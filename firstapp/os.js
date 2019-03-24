var os = require('os');
var util = require('util')

console.log(os.platform())
console.log(os.userInfo())
var oumarks = 89 +'%s'
var outmsg = 'Hi %s welcome to app. I understand you are using %s'
var respone = util.format(outmsg, os.userInfo().username,os.platform())
console.log(respone)
console.log(os.cpus())
console.log(os.arch())


