import React,{useState} from 'react'

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
        }
        else{
            setText('');
            props.showAlert('Cleared','success')
        }
    }
    
    const changeupperclick = (event) =>{
        console.log('TextBox changed.');
        setText(event.target.value);
    }

    

    const [text, setText] = useState('');

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
            <a href="">|</a>
            <button disabled className='btn btn-outline-primary mx-2 my-1'>Add to List</button>
            <a href="">|</a>
            <button disabled className='btn btn-outline-success mx-2 my-1'>Detect</button>
            <a href="">|</a>
            <button  className='btn btn-danger mx-2 my-1'  onClick={ClearText}>Clear</button>
            <a href="">|</a>
            <button  className='btn btn-dark mx-2 my-1' onClick={handleUpClick} >Upper Case</button>
            <a href="">|</a>
            <button  className='btn btn-warning mx-2 my-1' onClick={handleloClick} >Lower Case</button>
            <a href="">|</a>
            <div>
                <hr />
                <p className="text-body-light my-1">Characters = {text.length}</p>
                <p className="text-body-light">Words = {text.split(' ').filter((ele)=>{return ele.length!==0}).length}</p>
            </div>
        </div>
    )
}
