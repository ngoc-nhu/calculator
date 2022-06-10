import React from 'react';
import './App.css';
import OutputScreen from './components/OutputScreen';
import Button from './components/Buttons';
import OutputScreenRow from './components/OutputScreenRow';

class Calculator extends React.Component { 
    
constructor(props) {
    super(props);
    this.state = {
        question: '',
       
    }
    this.handleClick = this.handleClick.bind(this);
}
handleClick(event){
    const value = event.target.value;
           if (value =='=')
           {
            if (this.state.question!=='')
            {
                var ans='';
                    try
                    {
                        ans = eval(((((this.state.question).replace(/x/g,'*')).replace(/,/g,'.')).replace(/÷/g,'/')).replace(/%/g,'/100'));
                    }
                    catch(err)
                    {
                       ans="Math Error"
                    }
                   
                        this.setState({ question: ans.toString()});
                
            
            }
        }
        else if (value==='AC')
        
          {
            this.setState({ question: '' });
            
        }
        else if (value==='+/-')
        
          {
            var str = this.state.question;
            str = str.slice(0,-1);
            this.setState({question: str});
            
        }
        else
        
          {
            
            if(this.state.question !== "Math Error")
            {
                //Kiểm tra các trường hợp nhập vào 1 dãy phép tính +++++++,----------
                if((this.state.question).slice(-1) === "+" )
                {
                    if (value!=='+'&&value!=='-'&&value!=='x'&&value!=='÷')
                    this.setState({ question: (this.state.question += value)})
                }
                else 
                if((this.state.question).slice(-1) === "-" )
                {
                    if (value!=='+'&&value!=='-'&&value!=='x'&&value!=='÷')
                    this.setState({ question: (this.state.question += value)})
                }
                else 
                if((this.state.question).slice(-1) === "x" )
                {
                    if (value!=='+'&&value!=='-'&&value!=='x'&&value!=='÷')
                    this.setState({ question: (this.state.question += value)})
                }
                else 
                if((this.state.question).slice(-1) === "÷" )
                {
                    if (value!=='+'&&value!=='-'&&value!=='*'&&value!=='÷')
                    this.setState({ question: (this.state.question += value)})
                }


                //Kiểm tra không được nhập vào một dãy 000000000
                
                else if((this.state.question) === "0"){
                    if(value!=="0" )
                   this.setState({ question: (this.state.question += value)})

                }
                //Kiểm tra khi nhập vào phép tính 1+ 01 
                else if((this.state.question).slice(-1) === "0" &&this.state.question.slice(-2,-1) ==="+"){
                    {
                        var str = this.state.question;
                        str = str.slice(0,-1);
                        this.setState({question: str + value});
                    }
                }
                else if((this.state.question).slice(-1) === "0" &&this.state.question.slice(-2,-1) ==="-"){
                    {
                        var str = this.state.question;
                        str = str.slice(0,-1);
                        this.setState({question: str + value});
                    }
                }
                else if((this.state.question).slice(-1) === "0" &&this.state.question.slice(-2,-1) ==="x"){
                    {
                        var str = this.state.question;
                        str = str.slice(0,-1);
                        this.setState({question: str + value});
                    }
                }
                else if((this.state.question).slice(-1) === "0" &&this.state.question.slice(-2,-1) ==="÷"){
                    {
                        var str = this.state.question;
                        str = str.slice(0,-1);
                        this.setState({question: str + value});
                    }
                }
                
                //Không cho nhập vào một dãy dấu ,,,,,,,,,  
                else
                if((this.state.question).slice(-1) === "," ){
                    if (value!==','&&value!=='+'&&value!=='-'&&value!=='*'&&value!=='÷')
                    this.setState({ question: (this.state.question += value)})
                }
                else

                this.setState({ question: (this.state.question += value)})

               
            }
            else
            {
                this.setState({question: value })
            }
            
        }
    }

    render()
    {
        return (
            <div className="frame" style={{border:"1px solid black", width:"402px"}}>
                <div className="mainCalc" >
                    <OutputScreen question={this.state.question}  /> 
                    <table cellPadding={0} cellSpacing={0}>
                    <tr>
                        <td><Button className="btn" label={'AC'}  handleClick = {this.handleClick} /></td>
                        <td><Button className="btn" label={'+/-'}  handleClick = {this.handleClick}/></td>
                        <td><Button className="btn" label={'%'}  handleClick = {this.handleClick}/></td>
                        <td><Button className="btnaction" label={'÷'}  handleClick = {this.handleClick}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btnlbl" label={'7'}  handleClick = {this.handleClick}/></td>
                        <td><Button className="btnlbl" label={'8'}  handleClick = {this.handleClick}/></td>
                        <td><Button className="btnlbl" label={'9'}  handleClick = {this.handleClick}/></td>
                        <td><Button className="btnaction" label={'x'}  handleClick = {this.handleClick} /></td>
                    </tr>
                    <tr>
                        <td><Button className="btnlbl" label={'4'}  handleClick = {this.handleClick} /></td>   
                        <td><Button className="btnlbl" label={'5'} handleClick = {this.handleClick} /></td>
                        <td><Button className="btnlbl" label={'6'} handleClick = {this.handleClick} /></td>
                        <td><Button className="btnaction" label={'-'}  handleClick = {this.handleClick}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btnlbl" label={'1'}  handleClick = {this.handleClick}/></td>
                        <td><Button className="btnlbl" label={'2'}  handleClick = {this.handleClick}/></td>
                        <td><Button className="btnlbl" label={'3'}  handleClick = {this.handleClick}/></td>
                        <td><Button className="btnaction" label={'+'}  handleClick = {this.handleClick}/></td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}><Button className="btnlbl0" label={'0'} handleClick = {this.handleClick} /></td>
                        

                        <td><Button className="btnlbl" label={','} handleClick = {this.handleClick} /></td>
                        <td><Button className="btnaction" label={'='} handleClick = {this.handleClick}/></td>
                    </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Calculator;
