import React, { useState } from 'react';
import {InputX} from "./InputX";
import {InputY} from "./InputY";
import {InputR} from "./InputR";
import {Graph} from "./Graph";
import popal from '../images/krya.mp3';
import mimo from '../images/lego-breaking.mp3';
import attention from '../images/reserve.mp3';
import {ResultTable} from "./ResultTable";
export function Body(){
    const [selectedX, setSelectedX] = useState('-4');
    const [selectedY, setSelectedY] = useState('0');
    return (
        <table id="mainTable">
            <thead>
            <div id="popup" className="popup"></div>
            <tr>
                <th>Валидация введённых значений:</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td colSpan="4">
                    <hr/>
                </td>
            </tr>
            <tr>
                <td>Выберите X:</td>
                <InputX/>
            </tr>
            <tr>
                <td>Введите Y:</td>
                <InputY/>
            </tr>
            <tr>
                <td>Выберите R:</td>
                <InputR/>
                <Graph/>
            </tr>
            <tr>
                <td colSpan="3">
                    <button id="checkButton">Проверить</button>
                    <audio id="audioPlayer" src={popal} preload="auto"></audio>
                    <audio id="audioPlayer2" src={mimo} preload="auto"></audio>
                    <audio id="audioPlayer4" src={attention} preload="auto"></audio>
                </td>
            </tr>
            <tr>
                <td colSpan="15">
                    <hr/>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <ResultTable/>
            </tr>
            </tfoot>
        </table>

    )
}