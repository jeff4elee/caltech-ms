import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';

const CompStyle = styled.div`
  position: relative;
  text-align: center;
  margin: 20px;
`

const ButtonStyle = styled.button`
  height: 80px;
  width: 160px;

  font-size: 120%;

  background-color: white;
  border: solid;
  border-color: gray;
  border-bottom-width: 1px;
`

const InputStyle = styled.input`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  font-size: 100px;
  filter: alpha(opacity=0);
  cursor: pointer;
`

export default class UploadButton extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.filePrompt = this.filePrompt.bind(this);
        this.fileSave = this.fileSave.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    filePrompt() {
      //var x = document.getElementById("myFile");
    }

    fileSave() {
      var x = document.getElementById("myFile");
      window.alert(x.size/1000);
    }


    render() {
        return (
            <CompStyle>

              <ButtonStyle>
                UPLOAD VIDEO
                <form onsubmit={this.fileSave}>
                  <InputStyle type="file" id="myFile"/>
                </form>
              </ButtonStyle>

            </CompStyle>
        );
    }
}
