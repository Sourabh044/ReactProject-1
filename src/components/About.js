import React,{useState} from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState(
    {
      color: "black",
      backgroundColor: "white",
      // backgroundColor : '#2C3333'
    }

  )
    const [btnText, setbtnText] = useState('Dark Mode')



   const toggleStyle = () => {
      if(myStyle.color === 'black'){
        setmyStyle(
          {
            color: "white",
            backgroundColor : '#2C3333'
          },

          setbtnText('Light Mode')
        )
      }
      else{
        setmyStyle({
          color: "black",
          backgroundColor : 'white'
        })
      }
    }

  return (
    <div className="container" style={myStyle}>
      <h1>About Us</h1>
      <div className="form-check form-switch form-check-reverse">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          onClickCapture={toggleStyle}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
        {btnText}
        </label>
      </div>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>First About</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              About #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
