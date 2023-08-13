// Obtenemos la referencia a la pantalla de la calculadora
const screen = document.querySelector('.screen')



// Obtenemos todos los botones de la calculadora
const buttons = document.querySelectorAll('button')

// Creamos una variable para almacenar el número actual que se muestra en la pantalla
let numPantalla = '0'
let mem = numPantalla
let operacion = ''
let segundoValor = false

// Función para actualizar el contenido de la pantalla con el número actual
function updateScreen() {
  screen.textContent = numPantalla
}
/*
Función validaAcción es la encargada de validar qué botón de la calculadora
ha sido presionado y, dependiendo del mismo se definen sus instrucciones por medio 
de un Switch.
Variables principales:
 - mem (memoria): para capturar el número en pantalla
 - numPantalla: acumula los números deseados en el display
 - operacion: captura el símbolo de la operación a realizar
 - segundoValor: indica si habrá o no un segundo valor para operar
 
 El Botón de Igual (Resultado) es donde se realiza los cálculos matemáticos entre el valor de mem
 y el valor en pantalla, según el símbolo de la variable operacion
*/
function validaAccion(keyValue){

  switch(keyValue){
    case 'C':
      numPantalla = '0'
      break
    case '0':
      if (numPantalla != '0'){
        numPantalla += keyValue;
      }
      break
    case '.':
      if(!numPantalla.includes('.')){
        numPantalla += keyValue
      }
      break 
    case 'DEL':
      numPantalla = numPantalla.substring(0,numPantalla.length-1)
      if (numPantalla ===''){
        numPantalla = '0'
      }
      break
    case '+':
      mem = numPantalla
      operacion = keyValue
      segundoValor = false
      break
    case '-':
      mem = numPantalla
      operacion = keyValue
      segundoValor = false
      break
    case '/':
      mem = numPantalla
      operacion = keyValue
      segundoValor = false
      break
    case '*':
      mem = numPantalla
      operacion = keyValue
      segundoValor = false
      break
    case 'R':
        numPantalla = String(Math.sqrt(Number(numPantalla))).substring(0,15)
        operacion = ''
        segundoValor = false
        break
    case 'NP':
      numPantalla = String((numPantalla)*-1)
      operacion = ''
      segundoValor = false
      break
    default:
      if (numPantalla==='0'){
        numPantalla = keyValue
      } else{
        numPantalla += keyValue
      }
  }

}

// Asociamos eventos de clic a los botones
buttons.forEach((button) => {

    
  button.addEventListener('click', () => {

    const keyValue = button.dataset.key;

    if(operacion != ''){
      if(keyValue === '='){   
        switch(operacion){
          case '+':
            numPantalla = String(Number(mem) + Number(numPantalla)).substring(0,15) 
            break
          case '-':
            numPantalla = String(Number(mem) - Number(numPantalla)).substring(0,15)
            break
          case '*':
            numPantalla = String(Number(mem) * Number(numPantalla)).substring(0,15)
            break
          case '/':
            numPantalla = String(Number(mem) / Number(numPantalla)).substring(0,15)
            break          
        }
        operacion = ''
      }else {
          if(!segundoValor){
            numPantalla = keyValue
            segundoValor = true
          } else {
            validaAccion(keyValue)
          }
      }
      
    } else {
      validaAccion(keyValue)
    }
    // Actualizamos la pantalla con el número actualizado
    updateScreen()
    })
})
