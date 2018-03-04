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
`
const ListStyle = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
`
const ItemStyle = styled.li`

`
const TimeStyle = styled.div`

`
const LinkStyle = styled.a`

`

export default class TimeStamp extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


    render() {
        return (

        <CompStyle>
          <ListStyle>
            <ItemStyle><TimeStyle></TimeStyle></ItemStyle>
            <ItemStyle><LinkStyle></LinkStyle></ItemStyle>
          </ListStyle>
        </CompStyle>
        );
    }
}
