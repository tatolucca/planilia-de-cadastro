var locais = document.querySelectorAll('.local')
var jogador_vez = 'x'
var jogadas = 9
var reset = document.querySelectorAll('.reset')

locais.forEach((local, index) => {
    local.addEventListener('click', () => {
        if (local.innerHTML != '') {
            alert('ta doido')
        } else {
            local.innerHTML = jogador_vez
            troca_jogador()
            ver_ganhador()
            ver_seempatou()
        }
    }
    )
})





function troca_jogador() {
    if (jogador_vez == 'x') {
        jogador_vez = '0'
    } else {
        jogador_vez = 'x'
    }
}
function ver_seempatou() {  

    if (jogadas == 1) {
        alert('acabou deu velha')
    } else {
        jogadas--
    }
}

function ver_ganhador() {
    let ganhador = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]

    ]
    for (let index = 0; index < ganhador.length; index++) {
        console.log(ganhador[index])


        let p1 = ganhador[index][0]
        let p2 = ganhador[index][1]
        let p3 = ganhador[index][2]



console.log(locais[p1])


        if (locais[p1].innerHTML == jogador_vez && locais[p2].innerHTML == jogador_vez && locais[p3].innerHTML == jogador_vez){
            alert(jogador_vez + 'ganhou')
        }else{
            // console.log('nao ganhou')
        }
            
    }


}
