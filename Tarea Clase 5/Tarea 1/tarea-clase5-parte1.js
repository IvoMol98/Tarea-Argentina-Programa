//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

document.querySelector('#calcular-sueldo-mensual').onclick = function(){
    const sueldoAnual = Number(document.querySelector('#sueldo-anual').value);
    const sueldoMensual = calcularSueldoMensual(sueldoAnual);
  
    document.querySelector('#sueldo-mensual').value = sueldoMensual;
  
    return false;
  }
  
  function calcularSueldoMensual(sueldoAnual){
    return sueldoAnual / 12;
  }