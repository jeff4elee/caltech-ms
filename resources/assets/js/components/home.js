import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {sendExampleAction, resetStore} from '../actions/exampleActions';
import UploadButton from './upload-button'
import DropdownMenu from './dropdown-menu'
import VideoPlayer from './video-player'
import AudioPlayer from './audio-player'

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

        const url = this.props.url;
        console.log(url);

        return (
            <div>

              <TitleStyle>Welcome to our aumomatic highlight reel maker thingy!</TitleStyle>

              <DropdownMenu></DropdownMenu>

              <UploadButton></UploadButton>

              {url !== null && <VideoPlayer url={this.props.url} ></VideoPlayer>}
              
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        url: state.example.url
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


//connect allows you to reference the store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
