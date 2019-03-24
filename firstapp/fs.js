var fs = require('fs');


fs.appendFile('myText.txt', 'this is from node fs code  file jj\n',function(err){
    if(err){
        console.log(err)
    } else {
        console.log('write in the file from')
    }
})
fs.writeFile('myText.txt', 'this is from node fs code' ,function(err){
    if(err){
        console.log(err)
    } else {
        console.log('write in the file from')
    }
})

fs.readFile('myText.txt', function(err,data){
    if (err){
        return console.log(err)
    }else {
        console.log(data.toString())
    }

})


fs.unlink('myText2.txt',function(err){
    if(err){
        console.log(err)
    } else {
        console.log('file deleted')
    }
})
