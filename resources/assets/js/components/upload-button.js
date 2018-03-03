import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';

const CompStyle = styled.div`
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

export default class UploadButton extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.filePrompt = this.filePrompt.bind(this);
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

    }

    render() {
        return (
            <CompStyle>
              <ButtonStyle onClick={this.filePrompt}> UPLOAD VIDEO </ButtonStyle>
            </CompStyle>
        );
    }
}
