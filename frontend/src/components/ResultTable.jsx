export function ResultTable() {
    return (
        <td colSpan="10">
            <h4>
                <span className="outputStub notification">Нет результатов</span>

                <table className="history" id="outputContainer">
                    <tbody>
                    <tr>
                        <th>Попытка:</th>
                        <th>X:</th>
                        <th>Y:</th>
                        <th>R:</th>
                        <th>Попадание:</th>
                        <th>Время:</th>
                        <th>Точное время:</th>
                    </tr>
                    <tr id="Number"></tr>
                    <tr id="XHistory"></tr>
                    <tr id="YHistory"></tr>
                    <tr id="RHistory"></tr>
                    <tr id="hit"></tr>
                    <tr id="time"></tr>
                    <tr id="run"></tr>
                    </tbody>
                </table>
            </h4>
        </td>
    )
}