//var url = require('url');
import url from 'url';
var util = require('util')

var outurl = url.parse('https://gist.github.com/benpickles/b465db90ca11adc9ea0')
var outurl1 = url.parse('http://localhost:3000/movies')
console.log(outurl);
console.log(outurl1.pathname);
outurl1.pathname = '/orders';
outurl1.path = '/orders';
outurl1.href = 'http://localhost:3000/'+'orders'
console.log(outurl1);

var question= 'what do you understsand by %s and about %s';
var outxt = util.format(question, 'Node','Angular' )
console.log(outxt)