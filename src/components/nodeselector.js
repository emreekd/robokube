import React from 'react';

import KubeContext from '../context/kubecontext'

import Select from 'react-select';

export default class NodeSelector extends React.Component {
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
          context => context.nodeList ? (
            <Select styles={customStyles} className="width100"  defaultValue={context.nodeList ? context.nodeList[0]: null}
              options={context.nodeList} placeholder="Select a node"
            />
            
          ):null
        }
      </KubeContext.Consumer>

    );
  }
}