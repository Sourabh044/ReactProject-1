import React,{useState} from 'react'
import Spinload from './Spinload';

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        if(newText===''){
            props.showAlert('Enter Text To Convert','warning')
        }
        else{
            props.showAlert('Converted to Uppercase','success')
        }
    }
    const handleloClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        if(text ===''){
            props.showAlert('Enter Text To Convert','warning')
        }
        else{
            props.showAlert('Converted to Lowercase','success')
        }
    }
    
    const ClearText = () =>{
        let newText = text
        if(newText===''){
            props.showAlert('Text Box is already Empty !!','info')
            setresult('')
        }
        else{
            setText('');
            props.showAlert('Cleared','success')
            setresult('')

        }
    }
    
    const changeupperclick = (event) =>{
        console.log('TextBox changed.');
        setText(event.target.value);
    }

    function Predict(){
        if(text ===''){
            props.showAlert('Enter Text To Analyze!!','warning')
        }
        else{
        console.log(text);
        setloading(true);
        fetch('https://stress-detection-api.herokuapp.com/check',{
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text : text})
        }).then(response => response.json()).then(
            responseJson => {
                console.log(responseJson);
                setresult(responseJson.result);
                setloading(false);
            }
        )
        }}


    const [result, setresult] = useState('');
    const [text, setText] = useState('');
    const [loading, setloading] = useState(false);

    // const style = {
    //     color : 'grey',
    // }
    
    return (
        <div style={!props.darkMode?{color:'black'}:{color:'white'}} >
            <br />
            <h1>Enter Text To Analyze Stress!!</h1>
            <div className="mb-3 my-3">
                {/* <textarea className="form-control" value={text} onChange={changeupperclick} style={props.mode?{backgroundColor:'grey',color:'white'}:{backgroundColor:'white'}} id="mybox" rows="10"></textarea> */}
                <textarea className="form-control" value={text} onChange={changeupperclick} style={props.mode==='light'?{backgroundColor:'#d7c2a8'}:{backgroundColor:'#3f3d52',color:'white'}} id="mybox" rows="10"></textarea>
            </div>
                <hr />
            <a href={() => false}>|</a>
            <button disabled className='btn btn-outline-primary mx-2 my-1'>Add to List</button>
            <a href={() => false} >|</a>
            <button className='btn btn-outline-success mx-2 my-1' onClick={Predict}>Detect</button>
            <a href={() => false} >|</a>
            <button  className='btn btn-danger mx-2 my-1'  onClick={ClearText}>Clear</button>
            <a href={() => false} >|</a>
            <button  className='btn btn-dark mx-2 my-1' onClick={handleUpClick} >Upper Case</button>
            <a href={() => false} >|</a>
            <button  className='btn btn-warning mx-2 my-1' onClick={handleloClick} >Lower Case</button>
            <a href={() => false} >|</a>
            <div>
                <hr />
                <p className="text-body-light my-1">Characters = {text.length}</p>
                <p className="text-body-light">Words = {text.split(' ').filter((ele)=>{return ele.length!==0}).length}</p>
            </div>

            <div className='text-center text-uppercase' style={result==='stress'?{color:'red'}:{color:'green'}}>
                <hr />
                {loading && <Spinload/>}
                <h1>{result}</h1>
                <hr />
            </div>

        </div>
    )
}
