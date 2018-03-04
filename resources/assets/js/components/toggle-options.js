import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';

const CompStyle = styled.div`
`
const ListStyle = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
`
const ItemStyle = styled.li`
  border: solid;
  border-color: gray;
`

export default class ToggleOptions extends React.Component {
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
              <ListStyle>
                <li>Entertainment</li>
                <li>Classroom</li>
                <li>Speech</li>
              </ListStyle>
            </CompStyle>
        );
    }
}
