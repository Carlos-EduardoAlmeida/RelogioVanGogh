const hora = document.getElementById("horas")
const minuto = document.getElementById("minutos")
const segundo = document.getElementById("segundos")

const horario = setInterval(function time(){
    let datahoje = new Date()
    let hr = datahoje.getHours()
    let min = datahoje.getMinutes()
    let seg = datahoje.getSeconds()

    if(seg < 10){
        seg = "0" + seg
    }

    if(min < 10){
        min = "0" + min
    }

    if(hr < 10){
        hr = "0" + hr
    }

    hora.innerHTML = hr
    minuto.innerHTML = min
    segundo.innerHTML = seg
})

var num = 0
function executar(){
    if(num>2){
        num = 0

        if(num == 0){
            document.body.style.background = "url(./quadros/vanNoiteEstrelado.jpg)"
        }
        num ++
    }else{
        if(num == 0){
            document.body.style.background = "url(./quadros/vanNoiteEstrelado.jpg)"
        }else if(num == 1){
            document.body.style.background = "url(./quadros/Avg.jpg) "
        }else if(num == 2){
            document.body.style.background = "url(./quadros/amendoeira.jpg)"
        }
        num ++
    }
}