import React, { type ElementConfig } from 'react';
import ReactInputSelect from 'react-input-select' ;
import Select, { components } from 'react-select';
 const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      {children}
    </components.SingleValue>
  );
  const colourOptions = [2  ,'lola', 'hoho'] //our array of colours
  class Sel extends React.Component {
    constructor() {
      super()
    }
   
    render() {
      return (
        <ReactInputSelect
          data = {['lolo']}
          value = ''
        />
      )
    }
    // state = {};
    // state = {
    //   selectedOption: null,
    // }
    // handleChange = (selectedOption) => {
    //   this.setState({ selectedOption });
    // }
    // render() {
    //   return (
    //     <Select
    //         className="mt-4 col-md-6 col-offset-4"
    //         onChange={this.handleChange}
    //         // style = {{color : 'black' }}
    //         styles={{ singleValue: (base) => ({ ...base, padding: 5, borderRadius: 5, background: this.state.selectedOption.value, color: 'white', display: 'flex' }) }}
    //         components={{ SingleValue }}
    //         options={colourOptions}
    //       />
    //   );
    // }
  }
  export default Sel;