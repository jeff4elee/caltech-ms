import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { PlayButton, Timer } from 'react-soundplayer/components';

const CompStyle = styled.div`

    position: relative;
    text-align: center;
    margin: 20px;
    display: flex;
    justify-content: center;
    overflow: hidden;
`
// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = 'https://s3-eu-west-1.amazonaws.com/react-soundplayer-examples/ksmtk-reborn-edit.mp3';

// some track meta information
const trackTitle = 'Insert the Title Here!';

const AWSSoundPlayer = withCustomAudio(props => {

const { trackTitle } = props;
  return (
    <div>
      <PlayButton {...this.props} />
      <h2>{trackTitle}</h2>
      <Timer {...this.props} />
    </div>
  );
});

export default class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
<CompStyle>
      <AWSSoundPlayer
        streamUrl={streamUrl}
        trackTitle={trackTitle}
        preloadType="auto"
        autoplay />
</CompStyle>
    )
  }
}
