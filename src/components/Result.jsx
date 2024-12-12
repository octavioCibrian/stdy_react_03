/**
 * TODO: Crea un componente funcional llamado Result que cumpla con los siguientes requisitos:
	1.	Props:
	•	Recibe un prop llamado userInput, que contiene los datos de entrada necesarios para calcular los resultados.
	2.	Uso de funciones auxiliares:
	•	Importa dos funciones desde "../util/investment":
	•	calculateInvestmentResults(userInput): una función que recibe userInput y devuelve un arreglo con los datos calculados para cada año.
	•	formatter: un formato de moneda para mostrar los valores con el estilo adecuado.
	3.	Cálculo y visualización de datos:
	•	Usa calculateInvestmentResults(userInput) para obtener los datos de resultados y almacénalos en una constante llamada resultData.
	•	Muestra el contenido de resultData en la consola usando console.table().
	4.	Estructura de la tabla:
	•	Renderiza una tabla HTML con id="result". La tabla debe incluir:
	•	Un <thead> con los encabezados: “Year”, “Interest”, “Value End of the Year”, y “Annual Investment”.
	•	Un <tbody> con una fila (<tr>) por cada elemento del arreglo resultData.
	5.	Contenido de cada fila:
	•	Para cada fila, muestra los siguientes datos:
	•	Año (data.year).
	•	Interés calculado (formatter.format(data.interest)).
	•	Valor al final del año (formatter.format(data.valueEndOfYear)).
	•	Inversión anual (data.annualInvestment).
	•	Usa el atributo key en cada fila, con el valor de data.year.
	6.	Exportación:
	•	Asegúrate de exportar el componente como predeterminado.
 */