import React from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState(
  //   {
  //     color: "black",
  //     backgroundColor: "white",
  //     // backgroundColor : '#2C3333'
  //   }

  // )
    // const [btnText, setbtnText] = useState('Dark Mode')



  //  const toggleStyle = () => {
  //     if(myStyle.color === 'black'){
  //       setmyStyle(
  //         {
  //           color: "white",
  //           backgroundColor : '#2C3333'
  //         },

  //         setbtnText('Light Mode')
  //       )
  //     }
  //     else{
  //       setmyStyle({
  //         color: "black",
  //         backgroundColor : 'white'
  //       })
  //     }
  //   }

  return (
    <div className="container" style={!props.darkMode?{color:'black'}:{color:'white'}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample"  >
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="headingOne">
            <button
               
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About This Website.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>
              This is a basic Project Website to Gain Knowledge about React.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="headingTwo">
            <button
               
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About Developer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  >
              <strong>I am Sourabh. An IT Graduate, Who loves to learn new tech and create projects.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
               
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Future
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  >
              <strong>As This is a Project website</strong> i will Keep maintaining this while I will learn new things. They will be implemented into this.
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
