var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tag = lines.shift();
while(tag){
    let novo = lines.shift();
    let line = lines.shift;
    let dentro = false;
    let output = "";
    let tmp = "";
    let j = 0;
    for(let i = 0; i < line.length; i++){
        if(line[i] == "<") dentro = true;
        else if(line[i] == ">") dentro = false;
        if(dentro){
            if(line[i].toUpperCase() == tag[j].toUpperCase){
                j++;
                tmp+=line[i];
            } else if(j !== 0){
                output += tmp + line[i];
                j = 0;
                tmp = "";
            } else{
                output += tmp + line[i];
            }
            if(j == tag.length){
                output += novo;
                j = 0;
                tmp = "";
            }
        } else{
            output+= line[i];
        }
    console.log(output);
    tag = lines.shift();
}}