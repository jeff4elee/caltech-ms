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
  margin: 20px;
`
const ListStyle = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 40px;
`
const ItemStyle = styled.li`
  display: inline-block;
  text-align: center;
  font-size: 16px;
`
const TimeStyle = styled.div`

`
const LinkStyle = styled.a`

`

export default class TimeStamp extends React.Component {
  constructor(props) {
      super(props);
  }

    render() {
        return (

        <CompStyle>
          <ListStyle>
            <ItemStyle><TimeStyle>{this.props.timestamp}</TimeStyle></ItemStyle>
            <ItemStyle><LinkStyle href={this.props.link}>{this.props.phrase}</LinkStyle></ItemStyle>
          </ListStyle>
        </CompStyle>
        );
    }
}
