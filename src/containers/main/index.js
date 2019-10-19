import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'react-bootstrap';

import PortForwardPanel from '../../components/portforwardpanel'
import PodList from '../../components/podlist';

import ImageChangePanel from '../../components/imagechangepanel';
import ViewConfigPanel from '../../components/viewconfigpanel';

import NodeSelector from '../../components/nodeselector';

export default class Main extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            podConfig: '   apiVersion: v1\n ' +
                '   kind: Pod\n  ' +
                '   metadata:\n  ' +
                '     name: busybox-sleep\n  ' +
                '   spec:\n  ' +
                '     containers:\n  ' +
                '     - name: busybox\n  ' +
                '       image: busybox\n  ' +
                '       args:\n  ' +
                '       - sleep\n  ' +
                '       - "1000000"\n  '
        }
    }
    render() {
        return (
            <Row>
                <Col sm={2}>
                    <Row>
                        <div style={{width:'100%', backgroundColor:'#ffa502',padding:15}}>
                            <i style={{fontSize:42}} class="fas fa-robot"></i>
                            <span style={{marginLeft: 10,verticalAlign: 'super',fontSize: 14,fontWeight:'bolder'}}>ROBO KUBE</span>
                        </div>
                    </Row>
                    <Row>
                        <NodeSelector />
                    </Row>
                    <div>
                        <PodList />
                    </div>
                </Col>
                <Col>
                    <Row style={{ paddingLeft: 0, backgroundColor: '#eccc68', fontWeight: 600 }}>
                        <Col sm={3}>
                            <PortForwardPanel />
                        </Col>
                        {this.state.podConfig ? 
                        <Col>
                            <ViewConfigPanel config={this.state.podConfig} />
                        </Col> : null
                        }
                        <Col>
                            <ImageChangePanel />
                        </Col>
                    </Row>
                </Col>
            </Row>

        );
    }
}