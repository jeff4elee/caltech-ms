import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';

const CompStyle = styled.div`
  position: relative;
  text-align: center;
  margin: 20px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

export default class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // highlight-range{4}
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.files[0].name}`
    );
  }

    render() {
        return (

        <CompStyle>
            <form onSubmit={this.handleSubmit}>

                {/* highlight-range{1-6} */}
            <div className="inputDiv">
                <input type="file" id="file" className="inputfile" ref={ input => {
                  this.fileInput = input;
                }} />
                <label htmlFor="file">UPLOAD VIDEO</label>
            </div>

              <br/>
              <button type="submit">Submit</button>
            </form>
        </CompStyle>
        );
    }
}
