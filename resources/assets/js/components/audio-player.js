import React from 'react';
import Audio from 'react-audioplayer';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';

const CompStyle = styled.div`

    position: relative;
    padding-top: 56.25%
`
export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <CompStyle>
                <ReactPlayer
                  url='http://18.144.27.216/video/One_Does_Not_Simply_Gank_Xpecial.mp4'
                  className='react-player'
                  playing
                  controls
                  width='50%'
                  height='50%' />
            </CompStyle>
            )
          }
}
