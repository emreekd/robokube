import React from 'react';

import KubeContext from '../context/kubecontext'

import Select from 'react-select';

export default class NamespaceSelector extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        padding: 10,
        fontSize: 14, fontWeight: 'bolder'
      }),
      control: styles => ({ ...styles, backgroundColor: '#1e272e', border: 'none', borderRadius: 0 }),
      input: styles => ({ ...styles, marginLeft: 20 }),
      placeholder: styles => ({ ...styles, marginLeft: 20, fontSize: 12, fontWeight: 'bolder' }),
      singleValue: (styles, { data }) => ({ ...styles, marginLeft: 20, fontSize: 12, fontWeight: 'bolder',color:'white' })
    }
    return (
      <KubeContext.Consumer>
        {
          context => context.namespaces ? (
            <Select styles={customStyles}
              onChange={(option) =>  context.onNamespaceChange(option) } 
              getOptionLabel={option => option.name}
              getOptionValue={option => option.name}
              className="width100"  defaultValue={context.namespaces ? context.namespaces[0]: null}
              options={context.namespaces} placeholder="Select a namespace"
            />
            
          ):null
        }
      </KubeContext.Consumer>

    );
  }
}