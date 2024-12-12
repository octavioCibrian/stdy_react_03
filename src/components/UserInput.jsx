/**TODO: Crea un componente funcional llamado UserInput que cumpla con los siguientes requisitos:
 * 
	1.	Props:
	•	Recibe dos props:
	•	onChangeInput: una función que se ejecutará cuando cambie el valor de un campo.
	•	userInput: un objeto que contiene los siguientes valores:
	•	initialInvestment
	•	annualInvestment
	•	expectedReturn
	•	duration
	2.	Estructura HTML:
	•	Usa una etiqueta <section> con el atributo id igual a user-input.
	•	Dentro de la <section>, crea dos grupos de entradas utilizando una clase input-group.
	3.	Primer grupo:
	•	Contiene dos campos <input> con etiquetas <label> asociadas:
	•	Uno para “Initial Investment”, vinculado a userInput.initialInvestment.
	•	Uno para “Annual Investment”, vinculado a userInput.annualInvestment.
	4.	Segundo grupo:
	•	Contiene dos campos <input> con etiquetas <label> asociadas:
	•	Uno para “Expected Return”, vinculado a userInput.expectedReturn.
	•	Uno para “Duration”, vinculado a userInput.duration.
	5.	Comportamiento de los inputs:
	•	Cada <input> debe:
	•	Tener el atributo type="number".
	•	Mostrar su valor desde userInput correspondiente.
	•	Ejecutar la función onChangeInput con los argumentos adecuados al cambiar su valor.
	6.	Requerimientos adicionales:
	•	Todos los campos <input> deben ser obligatorios (required).
	7.	Exportación:
	•	Asegúrate de exportar el componente como predeterminado. 
*/