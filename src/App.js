import React from 'react';
import './App.css';
import OutputScreen from './components/OutputScreen';
import Button from './components/Buttons';
class Calculator extends React.Component { 
    render()
    {
        return (
            <div className="frame" style={{border:"1px solid black", width:"402px"}}>
                <div className="mainCalc">
                    <OutputScreen /> 
                    <table cellPadding={0} cellSpacing={0}>
                    <tr>
                        <td><Button className="btn" label={'AC'}/></td>
                        <td><Button className="btn" label={'+/-'}/></td>
                        <td><Button className="btn" label={'%'}/></td>
                        <td><Button className="btnaction" label={'÷'}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btnlbl" label={'7'} /></td>
                        <td><Button className="btnlbl" label={'8'} /></td>
                        <td><Button className="btnlbl" label={'9'} /></td>
                        <td><Button className="btnaction" label={'x'} /></td>
                    </tr>
                    <tr>
                        <td><Button className="btnlbl" label={'4'} /></td>   
                        <td><Button className="btnlbl" label={'5'} /></td>
                        <td><Button className="btnlbl" label={'6'} /></td>
                        <td><Button className="btnaction" label={'-'} /></td>
                    </tr>
                    <tr>
                        <td><Button className="btnlbl" label={'1'} /></td>
                        <td><Button className="btnlbl" label={'2'} /></td>
                        <td><Button className="btnlbl" label={'3'} /></td>
                        <td><Button className="btnaction" label={'+'} /></td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}><Button className="btnlbl0" label={'0'} /></td>
                        

                        <td><Button className="btnlbl" label={','} /></td>
                        <td><Button className="btnaction" label={'='}/></td>
                    </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Calculator;
