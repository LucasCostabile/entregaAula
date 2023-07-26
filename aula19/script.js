// Aula 19 

//console.log("teste teste");
//alert("teste alert")

const subtrair = (num1, num2) => {
    const result = num1 - num2

    if(num1 > num2) return result

    return "Não foi possivel subtrair"
}

//console.log(subtrair(1,2))


const divisao = (num1, num2) => {
    const resultado = num1/num2

    if(num2 > 0) return resultado

    return "Não foi possivel dividir"
}

//console.log(divisao(1,2))


const frutas = ["pera","morango", "kiwi", "maçã"]
const bebidas = ["Suco", "Cerveja", "Whisky", "agua"]

listaDeCompras = ["Leite", "Pão",frutas , bebidas]

console.log(listaDeCompras[2][1])