let num = [5,2,9,3]
num[4] = 6
num.push(7)
num.sort()
console.log(`Seu vetor é: ${num}`)
/*console.log(` o tamanho do vetor é: ${num.length}`)
console.log(`posição 3 do vetor é : ${num[3]}`)
for(let pos = 0; pos <= num.length ; pos++){
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
}*/
let s = num.indexOf(10)

if (s == -1 ){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 7 entá no indice ${s}`)
}

/*for(let pos in num){
    console.log(`Na posição ${pos} tem o valor ${num[pos]}q`)
}*/