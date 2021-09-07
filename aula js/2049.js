var a = require('fs').readFileSync('/dev/stdin', 'utf8');
var h = 1
/*While(a!== 0){
    var a = input()
    if(0<=a<=1000000){
        console.log(`Instancia ${h}`)
        h ++
        if(a == 23034){
            console.log("Verdadeiro")
        }else{
            console.log("Falso")
        }
}}*/
while(a !==0 ){
    

    if(0<=a<=1000000){
        console.log(`Instancia ${h}`)
        h ++
        if(a == 23034){
            console.log("Verdadeiro")
            break
        }else{
            console.log("Falso")
            break
        }
    break}
}