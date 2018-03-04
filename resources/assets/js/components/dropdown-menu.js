import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';

const CompStyle = styled.div`
  display: flex;
  justify-content: center;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
`
const DropdownStyle = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`

export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <CompStyle>
              <DropdownStyle>
                <span>Mouse over me</span>
                  <DropdownContent>
                    <p>Entertainment</p>
                    <p>Speeches</p>
                    <p>Classroom</p>
                  </DropdownContent>
              </DropdownStyle>
            </CompStyle>
        );
    }
}
