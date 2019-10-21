import React from 'react';
import { Row, Col } from 'react-bootstrap';

import KubeContext from '../context/kubecontext'

export default class PodList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.selectPod = this.selectPod.bind(this);
    }
    selectPod(context,podList,selectedPod){
        for (let index = 0; index < podList.length; index++) {
            const element = podList[index];
            element.IsActive = false;
        }
        podList[selectedPod].IsActive = true;
        context.selectPod(podList[selectedPod]);
        this.setState({refresh: this.state.refresh})
    }
    render() {
        var me = this;
        return (
            <KubeContext.Consumer>
                {(context) => !context.podList ? null : (
                    <div>
                        {
                            context.podList.map(function(pod,index){
                                return (
                                    <Row key={index} onClick={()=>{me.selectPod(context,context.podList,index)}} style={{ marginTop: 0, cursor: 'pointer' }}>
                                        <Col sm style={{ backgroundColor: pod.IsActive ? '#ecf0f1' : '#7f8c8d' }}>
                                            <div style={{ textAlign: "left", margin: '15px 5px', fontWeight: '600' }}>
                                                <i style={{ fontSize: 24 }} className="fa fa-podcast"></i>
                                                <span style={{ marginLeft: 5, fontSize: 14, verticalAlign: 'text-bottom' }}>Pod</span>
                                                <p style={{ marginTop: 10, marginBottom: 0, textAlign: 'left', fontSize: 12, fontWeight: 300 }}>{pod.name}</p>
                                                <p style={{ marginTop: 2, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>{pod.status}</p>
                                                <p style={{ marginTop: 2, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>Age {pod.age}</p>
                                                <p style={{ marginTop: 2, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>Restarts {pod.restarts}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </div>
                )}
            </KubeContext.Consumer>
        );
    }
}