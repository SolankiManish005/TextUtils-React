import React,{useState} from 'react'

const TextForm = (props) => {
   
    const [text, setText] = useState('')
    // text = "kjbvkwnkjn";  --> Wrong Way to Change the State
    // setText("New Text");  --> Correct Way to Change the State

    const handleUpClick = ()=>{
        // console.log('UpperCase was Clicked'  + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!" , "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success");
    }

    const HandleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value);
    }

    const handleClrClick = ()=>{
        let newText = " ";
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const handleCopy = ()=>{
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }
    
  return (
    <>
        <div className='container' style={{color: props.mode=='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode=='dark'?'#13466e':'white',color: props.mode=='dark'?'white':'#042743'}}></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleClrClick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode=='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Previwe</h2>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
    </>
  )
}

export default TextForm
