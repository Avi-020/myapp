import React, { useState } from 'react'
import PropTypes from 'prop-types';


export default function TextBox(props) {
    const [text, settext] = useState(" ");

    const upcase=()=>{
        let newtext=text.toLocaleUpperCase();
        settext(newtext);

    }

    const locase=()=>{
        let newtext=text.toLocaleLowerCase();
        settext(newtext);

    }

    const clear=()=>{
        
        settext("");

    }

    const onchange=(event)=>{
       settext(event.target.value);

    }


    




  return (
    <div className="container">
      
      <div className="mb-3">
        <br /><br />
  <label htmlFor="exampleFormControlTextarea1" className="form-label" style={props.mode==='light'?{color:'black'}:{color:'white'}}>Enter Text Here</label>
  <textarea className="form-control"  style={props.mode==='light'?{backgroundColor: 'white',color:'black'}:{backgroundColor: '#2d2b2b',color:'white'}}  value={text}  onChange={onchange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>

<button type="button" className="btn btn-primary" onClick={upcase}>Convert to UpperCase</button>

<button type="button" className="btn btn-primary mx-3" onClick={locase}>Convert to LowerCase</button>

<button type="button" className="btn btn-primary" onClick={clear} >Clear Text</button>


<br />
<br />
<br />
<h3 style={props.mode==='light'?{color:'black'}:{color:'white'}}>Preview</h3>
<p style={props.mode==='light'?{color:'black'}:{color:'white'}}>{text}</p>



    </div>
  )
}
