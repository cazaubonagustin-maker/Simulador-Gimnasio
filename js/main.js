
const nombre = prompt("¿Cómo te llamás?");

const minutosPorDia = parseInt(prompt("¿Cuántos minutos entrenás por día?"));

const diasPorSemana = parseInt(prompt("¿Cuántos días entrenás por semana?"));


const minutosSemanales = minutosPorDia * diasPorSemana;

const horasSemanales = minutosSemanales / 60;


const mensaje = "Hola " + nombre + ", entrenás " + minutosSemanales + " minutos por semana, equivalentes a " + horasSemanales + " horas.";

alert(mensaje);

console.log(mensaje);
