import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from '../history';

const CompStyle = styled.div`
  position: relative;
  text-align: center;
  margin: 20px;
  overflow: hidden;
`

//
// const ButtonStyle = styled.button`
//   height: 80px;
//   width: 160px;
//   font-size: 120%;
//   background-color: white;
//   border: solid;
//   border-color: gray;
//   border-bottom-width: 1px;
// `
// const InputStyle = styled.input`
  // display: block;
  // position: absolute;
  // top: 0;
  // right: 0;
  // opacity: 0;
  // font-size: 100px;
  // filter: alpha(opacity=0);
  // cursor: pointer;
// `


// <style>
// .inputFile {
   // width: .1px;
   // height: .1px;
   // opacity: 0;
   // overflow: hidden;
   // position: absolute;
   // z-index: -1;
// }
// </style>

// styled=
//     {{width: ".1px",
//    height: ".1px",
//    opacity: 0,
//    overflow: "hidden",
//    position: "absolute",
//    z-index: -1 }}

export default class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // highlight-range{4}
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.files[0].name}`
    );
  }

    render() {
        return (

        <CompStyle>
            <form onSubmit={this.handleSubmit}>
              // <ButtonStyle>

                {/* highlight-range{1-6} */}
                <input type="file" id="file" className="inputfile" ref={ input => {
                  this.fileInput = input;
                }} />

             <label htmlFor="file">UPLOAD VIDEO</label>
              // </ButtonStyle>
              <br/> <br/>

              <button type="submit">Submit</button>
            </form>
        </CompStyle>
        );
    }
}

// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import history from '../history';
//
// const CompStyle = styled.div`
//   position: relative;
//   text-align: center;
//   margin: 20px;
// `
//
// const ButtonStyle = styled.button`
//   height: 80px;
//   width: 160px;
//
//   font-size: 120%;
//
//   background-color: white;
//   border: solid;
//   border-color: gray;
//   border-bottom-width: 1px;
// `
//
// const InputStyle = styled.input`
//   display: block;
//   position: absolute;
//   top: 0;
//   right: 0;
//   opacity: 0;
//   font-size: 100px;
//   filter: alpha(opacity=0);
//   cursor: pointer;
// `
//
// export default class UploadButton extends React.Component {
//     constructor(props) {
//         super(props);
//         //
//         // this.toggle = this.toggle.bind(this);
//         // this.filePrompt = this.filePrompt.bind(this);
//         // this.fileSave = this.fileSave.bind(this);
//
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.onChange = this.onChange.bind(this)
//         this.state = {
//             isOpen: false,
//             file:null
//         };
//     }
//
//     onChange(event) {
//         console.log(event);
//       this.setState({file:event.target.files[0]});
//       console.log(this.state);
//     }
//     handleSubmit(event) {
//         console.log(event.target);
//         event.preventDefault();
//         const files = event.target.files;
//         // console.log(this.fileInput.files[0].name);
//         console.log(files);
//         console.log(`Selected file - ${this.fileInput}`);
//     }
//
//         //
//     // toggle() {
//     //     this.setState({
//     //         isOpen: !this.state.isOpen
//     //     });
//     // }
//     //
//     // filePrompt() {
//     //   //var x = document.getElementById("myFile");
//     // }
//     //
//     // fileSave() {
//     //   var x = document.getElementById("myFile");
//     //   window.alert(x.size/1000);
//     // }
//
//
//     render() {
//         return (
//
//         <CompStyle>
//             <form onSubmit={this.handleSubmit}>
//               <ButtonStyle>
//                   UPLOAD VIDEO
//
//                 {/* highlight-range{1-6} */}
//                 <InputStyle
//                   type="file"
//                    onChange={e => this.onChange(e)} />
//               </ButtonStyle>
//               <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
//               <button type="submit">Submit</button>
//             </form>
//         </CompStyle>
//
//
//
//         );
//     }
// }
