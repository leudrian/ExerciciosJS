var agora = new Date()
var hora = agora.getHours()
console.log(`A hora é ${hora}`)
if(hora >= 0 && hora < 6){
    console.log("Badrugada")
}else if (hora <12){
    console.log("Bundinha")
}else if(hora< 18){
    console.log("Batarde")
}else if (hora <= 23){
    console.log("Banocthe")
}else{
    console.log("Não existe")
}