import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {sendExampleAction, resetStore} from '../actions/exampleActions';
import UploadButton from './upload-button'



class Home extends Component {
    constructor(props) {
        super(props);

    }

    render(){

        //const example = this.props.example;
        //const exampleList = example.allIds.map(id => <div key={id}> Dispatched: {example.byId[id]} </div>);

        return (
            <div>
              <UploadButton></UploadButton>
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
