
import React, {useState} from 'react'
 
export default function TextForm(props){
    // const handleUpClick = ()=>{
    //     console.log("Uppercase was Clicked" + text);
    //     let newText = text.toUpperCase();
    //     setText(newText);
    //     props.showAlert("Coverted to UpperCase","success")

    // }
    // const handleLoClick = ()=>{
    //     console.log("Lowercase was Clicked" + text);
    //     let newText = text.toLowerCase();
    //     setText(newText);
    //     props.showAlert("Coverted to LowerCase","success")
    // }
    // const Clear = ()=>{
    //     console.log("Clear Text" + text);
    //     let newText = ""
    //     setText(newText);
    //     props.showAlert("Text Clear","success")

    // }
    // const handleOnChange = (event)=>{
    //     console.log("On Change");
    //     setText(event.target.value);
    // }
    //  const [text , setText] = useState('');
    //  setText("yash");


    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const Clear = ()=>{
        console.log("Clear Text" + text);
        let newText = ""
        setText(newText);
        props.showAlert("Text Clear","success")

    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value) 
    }
    const [text , setText] = useState('');

  return (
      <>
     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            {/* <h1>{props.heading}</h1> */}
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            {/* <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            {/* <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button> */}
            {/* <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button> */}
            {/* <button className="btn btn-primary mx-1" onClick={Clear}>Clear Text</button> */}
            {/* <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> */}
            {/* <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Clear}>Clear Text</button>
            {/* <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button> */}
            {/* <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> */}
            {/* <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p> */}
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            {/* <p>{text.length>0?text:"Nothing to preview!"}</p> */}
        </div>
        </>
    )

}
