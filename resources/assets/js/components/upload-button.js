import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';
import axios from "axios";
import {changeUrl} from "../actions/exampleActions"
import {connect} from 'react-redux';

const CompStyle = styled.div`
  position: relative;
  text-align: center;
  margin: 20px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`
const ButStyle = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 160px;
    font-size: 120%;
    background-color: white;
    border: solid;
    border-color: gray;
    transition-duration: 0.4s;

    &:hover {
      background-color: #ffb366;
      color: white;
    }

`

class UploadButton extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.files[0].name}`
    );

    var config = { headers: { "Content-Type": "multipart/form-data" }};
    var formData = new FormData();
    var imageFile = this.fileInput.files[0];
    formData.append("file", imageFile);

    var self = this;

    console.log("sending request");
    axios({
        method: 'post',
        url: 'http://52.53.158.244/video/upload',
        data: formData,
        config: config
    })
    .then(function(res) {
        console.log(res);
        self.props.changeUrl(res.data.url);
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

            <div className="inputDiv">
                <input type="file" id="file" className="inputfile" ref={ input => {
                  this.fileInput = input;
                }} />
                <label htmlFor="file">Upload File</label>
            </div>

              <br/>
              <ButStyle type="submit">Submit</ButStyle>
            </form>
        </CompStyle>
        );
    }
}

function mapStateToProps(state){
    return {
        example: state.example
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeUrl: (url) => dispatch(changeUrl(url)),
    }
}

//connect allows you to reference the store
export default connect(mapStateToProps, mapDispatchToProps)(UploadButton);
