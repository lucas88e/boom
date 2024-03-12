
let numComputer = parseInt(Math.random() * (4 - 1) + 1)
let selectNumber = document.getElementById("userInput");
const result = document.getElementById("result")
const restart = document.getElementById("restart")
const countdown = document.getElementById("countdown")
const comparation = document.getElementById("comparation")



function promesass() {
    const promesa0 = new Promise((resolve) => {
        setTimeout(() => {
            countdown.innerHTML = "<div id=count>Cuenta atrás: 0 segundos</div>";
            // result.innerHTML = resultado();
            resolve(countdown)
        }, 5800)
    })

    const promesa5 = new Promise((resolve) => {
        setTimeout(() => {
            countdown.innerHTML = "<div id=count>Cuenta atrás: 5 segundos</div>";
            
            resolve(countdown)
        }, 1000)
    })

    const promesa4 = new Promise((resolve) => {
        setTimeout(() => {
            countdown.innerHTML = "<div id=count>Cuenta atrás: 4 segundos</div>";
            ;
            resolve(countdown)
        }, 2000)
    })
    const promesa3 = new Promise((resolve) => {
        setTimeout(() => {
            countdown.innerHTML = "<div id=count>Cuenta atrás: 3 segundos</div>";
            ;
            resolve(countdown)
        }, 3000)
    })
    const promesa2 = new Promise((resolve) => {
        setTimeout(() => {
            countdown.innerHTML = "<div id=count>Cuenta atrás: 2 segundos</div>";
            ;
            resolve(countdown)
        }, 4000)
    })
    const promesa1 = new Promise((resolve) => {
        setTimeout(() => {
            countdown.innerHTML = "<div id=count>Cuenta atrás: 1 segundos</div>";
           ;
            resolve(countdown)
        }, 5000)
    })
    const promesaResultado = new Promise((resolve) => {
        setTimeout(() => {
            resultado();

            resolve(selectNumber);

        }, 7000)
      
    })

}
function promesaMundo() {
    const promesasMundo = new Promise((resolve) => {
        setTimeout(() => {
            result.innerHTML = "<div class =green>Enhorabuena, has salvado el mundo 👑</div>"
            comparation.innerHTML = `<div id ="comparation"> Tu numero ${selectNumber.value} es el mismo que el número  ${numComputer}</div>`

        }, 7000

        )
    })
}

function promesaBomba() {
    const promesasBomba = new Promise((resolve) => {
        setTimeout(() => {
            result.innerHTML = "<div class = red> La bomba ha estallado, has destruido el mundo💥</div>"
            comparation.innerHTML = `Tu numero ${selectNumber.value} es distinto que el número ${numComputer}`

        }, 7000

        )
    })
}


function resultado() {
    selectNumber.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {

            promesass()
      
            // comparation.innerHTML= `${selectNumber.value} y ${numComputer}`
            if
                (parseInt(selectNumber.value) === (parseInt(numComputer))) {

                promesaMundo()
            }
            else if((selectNumber.value >= 4)){

                comparation.innerHTML="ERROR EL NUMERO TIENE QUE SER 1, 2 o 3"
            
            }
            else {
                promesaBomba()
            }
         

        }
    })
    document.addEventListener("click", (event) => {
        if (event.target !== selectNumber && !selectNumber.contains(event.target)) {

            promesass()
           
        
            if
                (parseInt(selectNumber.value) === (parseInt(numComputer))) {

                promesaMundo()

            }
            else if((selectNumber.value >= 4)){

                comparation.innerHTML="ERROR EL NUMERO TIENE QUE SER 1, 2 o 3"}
            else {
                promesaBomba()
            }
           
        }
    })
}
restart.addEventListener("click", () => {
    result.innerHTML = "";
    location.reload()
    resultado()
  
})

resultado()
