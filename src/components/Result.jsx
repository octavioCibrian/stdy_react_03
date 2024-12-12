import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({userInput}) {
    const resultData = calculateInvestmentResults(userInput);
    console.table(resultData);
    
    return (
        <table id="result">
            <thead>
                <th>year</th>
                <th>interest</th>
                <th>value End of the year</th>
                <th>Annual investment</th>
            </thead>

            <tbody>
                {resultData.map(data=>
                    <tr key={data.year}>
                        <td>
                            {data.year}
                        </td>
                        <td>
                            {formatter.format(data.interest)}
                        </td>
                        <td>
                            {formatter.format(data.valueEndOfYear)}
                        </td>
                        <td>
                            {data.annualInvestment}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
    
}