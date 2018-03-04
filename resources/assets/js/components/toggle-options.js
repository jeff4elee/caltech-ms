import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';
import {changeKey} from "../actions/exampleActions"
import {connect} from 'react-redux';

const CompStyle = styled.div`
  margin-bottom: 100px;
`
const TitleStyle = styled.h1`
  text-align: center;
  font-size: 25px;
  margin-bottom: 25px;
`
const ListStyle = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
`
const ItemStyle = styled.li`
  text-align: center;
  width: 150px;
  display: inline-block;
  font-size: 110%;
  padding: 10px;
  border: solid;
  border-color: gray;
`

class ToggleOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          color1: true
        }
        this.state = {
          color2: true
        }
        this.state = {
          color3: true
        }

        this.toggle = this.toggle.bind(this);
        this.but1 = this.but1.bind(this);
        this.but2 = this.but2.bind(this);
        this.but3 = this.but3.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    but1() {
        this.setState({color1: true})
        this.setState({color2: false})
        this.setState({color3: false})
        this.props.changeKey('entertainment')
    }

    but2() {
        this.setState({color1: false})
        this.setState({color2: true})
        this.setState({color3: false})
        this.props.changeKey('classroom')
    }

    but3() {
        this.setState({color1: false})
        this.setState({color2: false})
        this.setState({color3: true})
        this.props.changeKey('speech')
    }


    render() {
        let bgColor1 = this.state.color1 ? "#DCDCDC" : "white"
        let bgColor2 = this.state.color2 ? "#DCDCDC" : "white"
        let bgColor3 = this.state.color3 ? "#DCDCDC" : "white"

        return (
            <CompStyle>

              <TitleStyle>Type of video/audio</TitleStyle>

              <ListStyle>

                <ItemStyle style={{backgroundColor: bgColor1}}onClick={this.but1}>Entertainment</ItemStyle>
                <ItemStyle style={{backgroundColor: bgColor2}}onClick={this.but2}>Classroom</ItemStyle>
                <ItemStyle style={{backgroundColor: bgColor3}}onClick={this.but3}>Speech</ItemStyle>

              </ListStyle>

            </CompStyle>
        );
    }
}

function mapStateToProps(state) {
    return {
        example: state.example
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeKey: (categoryKey) => dispatch(changeKey(categoryKey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleOptions);