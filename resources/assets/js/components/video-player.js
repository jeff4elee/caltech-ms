import React from 'react';
import ReactPlayer from 'react-player'
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';

const CompStyle = styled.div`

    position: relative;
    padding-top: 56.25%
`
class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <CompStyle>
                <ReactPlayer
                  url= {this.props.url}
                  className='react-player'
                  playing
                  controls
                  width='50%'
                  height='50%' />
            </CompStyle>
            )
          }
}

export default VideoPlayer;
