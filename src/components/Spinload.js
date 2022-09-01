import React, {Component} from 'react'
import spinner from "../loading.gif";

export default class Spinload extends Component {
  render() {
    return (
      <div className='container'>
        <div className="d-flex justify-content-center text-center">
        <img src={spinner} alt="..." />
        </div>
        <div className="d-flex justify-content-center">
        <h6>Analyzing Text</h6>
      </div>
      </div>
    )
  }
}
