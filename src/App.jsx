/*
TODO: Crea un componente funcional llamado App que cumpla con los siguientes requisitos:
	1.	Estado inicial:
	•	Usa el hook useState para definir un estado userInput, que es un objeto con los siguientes valores iniciales:
	•	initialInvestment: 1000
	•	annualInvestment: 1200
	•	expectedReturn: 6
	•	duration: 10
	2.	Validación:
	•	Define una constante inputIsValid que sea true solo si userInput.duration es mayor a 0.
	3.	Manejo de eventos:
	•	Crea una función handleChange(inputIdentifier, newValue) que actualice el estado userInput. La función debe:
	•	Usar setUserInput para actualizar el valor del campo identificado por inputIdentifier.
	•	Asegúrate de convertir newValue a un número antes de actualizar el estado.
	4.	Renderizado:
	•	En el JSX, incluye:
	•	El componente Header.
	•	El componente UserInput, pasándole las siguientes props:
	•	onChangeInput: referencia a la función handleChange.
	•	userInput: el estado userInput.
	•	Si inputIsValid es true, renderiza el componente Result, pasándole userInput como prop.
	•	Si inputIsValid es false, muestra un mensaje <p> centrado con el texto: “Please enter a duration greater than Zero”.
	5.	Estructura:
	•	Asegúrate de usar la etiqueta <></> (fragmento) para envolver los elementos retornados.
*/

function App() {
  
}

export default App
