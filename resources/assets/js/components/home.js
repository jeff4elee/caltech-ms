import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {sendExampleAction, resetStore} from '../actions/exampleActions';
import UploadButton from './upload-button'
import DropdownMenu from './dropdown-menu'
import ToggleOptions from './toggle-options'
import VideoPlayer from './video-player'

const TitleStyle = styled.h1`
  text-align: center;
  margin: 50px;
  font-size: 200%;
`

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render(){

        return (
            <div>

              <TitleStyle>Welcome to our aumomatic highlight reel maker thingy!</TitleStyle>

              <ToggleOptions></ToggleOptions>

              <UploadButton></UploadButton>

              <VideoPlayer></VideoPlayer>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


//connect allows you to reference the store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
