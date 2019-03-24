//const fs = require('fs');
import fs from 'fs';

fs.appendFile('myText.txt', 'this is from node\n',(err) => {
    if(err) throw err;
    console.log('write in the file from')
})

