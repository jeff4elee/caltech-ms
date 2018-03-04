import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import history from '../history';
import axios from "axios";
import {changeUrl} from "../actions/exampleActions"
import {connect} from 'react-redux';

const CompStyle = styled.div`
  position: relative;
  margin: 20px;
`;

const ListStyle = styled.ul`
  display: flex;
  padding: 0;
  padding-left: 30%;
  list-style: none;
  justify-content: space-evenly;
`;

const ItemStyle = styled.li`
  display: flex;
  flex: 1 1 0;
  display: inline-block;
  font-size: 20px;
`;

const TimeStyle = styled.div`

`;

const LinkStyle = styled.a`

`;

function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

export default class TimeStamp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let seconds = this.props.timestamp;

        let minutes = Math.floor(seconds / 60);

        seconds = seconds - minutes * 60;

        const finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);

        return (

            <CompStyle>
                <ListStyle>

                    <ItemStyle><TimeStyle>{finalTime}</TimeStyle></ItemStyle>
                    <ItemStyle><LinkStyle href={this.props.link}>{this.props.phrase}</LinkStyle></ItemStyle>

                </ListStyle>
            </CompStyle>
        );
    }
}
