import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';
import axios from "axios";

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

    var config = { headers: { "Content-Type": "multipart/form-data" }};
    var formData = new FormData();
    var imageFile = this.fileInput.files[0];
    formData.append("file", imageFile);

    axios({
        method: 'post',
        url: 'http://18.144.27.216/video/upload',
        data: formData,
        config: config
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(err) {
        console.log(err)
    });

    // axios.interceptors.request.use(request => {
    //   console.log('Starting Request', request)
    //   return request
    // })
    //
    // axios.interceptors.response.use(response => {
    //   console.log('Response:', response)
    //   return response
    // })

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
