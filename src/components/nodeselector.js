import React from 'react';

import Select from 'react-select';

export default class NodeSelector extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const options = [
            { value: 'chocolate', label: '192.168.1.1' },
            { value: 'strawberry', label: '192.168.1.12' },
            { value: 'vanilla', label: '192.168.1.57' },
          ];
          const customStyles = {
            option: (provided, state) => ({
                ...provided,
                padding: 10,
                fontSize:14,fontWeight:'bolder'
              }),
            control: styles => ({ ...styles, backgroundColor: '#1e272e',border:'none',borderRadius:0 }),
            input: styles => ({ ...styles, marginLeft:20 }),
            placeholder: styles => ({ ...styles,marginLeft:20,fontSize:12,fontWeight:'bolder' }),
            singleValue: (styles, { data }) => ({ ...styles, marginLeft:20, fontSize:12,fontWeight:'bolder'})
          }
        return(
            <Select styles={customStyles} className="width100"
                options={options} placeholder="Select a node"
            />
        );
    }
}