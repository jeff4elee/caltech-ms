import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';



const CompStyle = styled.div`
  height: 80px;
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
              <button onClick={this.filePrompt}> Upload Video </button>
            </CompStyle>
        );
    }
}
