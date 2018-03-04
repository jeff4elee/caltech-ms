import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {sendExampleAction, resetStore} from '../actions/exampleActions';
import UploadButton from './upload-button'
import DropdownMenu from './dropdown-menu'
import ToggleOptions from './toggle-options'
import VideoPlayer from './video-player'
import AudioPlayer from './audio-player'
import TimeStamp from './timestamp'

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

        const timestamps = this.props.timestamps;

        let annotations = [];

        if(timestamps !== undefined){
          annotations = timestamps.map(ts => <TimeStamp timestamp={ts['begin']} phrase={ts['topic']} link={ts['link']} id={ts['begin']}/>);
        }

        return (
            <div>

              <TitleStyle>Welcome to our aumomatic highlight reel maker thingy!</TitleStyle>

              <ToggleOptions></ToggleOptions>

              <UploadButton></UploadButton>

              {url !== undefined && <VideoPlayer url={this.props.url} ></VideoPlayer>}
              {url !== undefined && <TitleStyle>Key Points</TitleStyle>}

              {annotations}

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        url: state.example.url,
        timestamps: state.example.timestamps
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


//connect allows you to reference the store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
