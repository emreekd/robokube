import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Spinner, Container } from 'react-bootstrap';

import PortForwardPanel from '../../components/portforwardpanel'
import PodList from '../../components/podlist';

import ImageChangePanel from '../../components/imagechangepanel';
import ViewConfigPanel from '../../components/viewconfigpanel';

import NodeSelector from '../../components/nodeselector';

import KubeContext from '../../context/kubecontext'

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
    componentDidMount() {
        var vm = this;
        setTimeout(function () {
            vm.setState({ sideBarHeight: vm.sidebar.clientHeight })
        }, 20)
    }
    render() {
        return (
            <KubeContext.Provider
                value={{
                    clusterNodes: this.state.clusterNodes,
                    podList: this.state.podList,
                    selectedClusterNode: this.state.selectedClusterNode,
                    selectedPod: this.state.selectedPod
                }}>
                <Row>
                    <Col sm={2} ref={(sidebar) => this.sidebar = sidebar} >
                        <Row>
                            <div style={{ width: '100%', backgroundColor: '#ffa502', padding: 15 }}>
                                <i style={{ fontSize: 42 }} className="fas fa-robot"></i>
                                <span style={{ marginLeft: 10, verticalAlign: 'super', fontSize: 14, fontWeight: 'bolder' }}>ROBO KUBE</span>
                            </div>
                        </Row>
                        <Row>
                            <NodeSelector />
                        </Row>
                        <div>
                            <PodList podList={this.state.podList} />
                        </div>
                    </Col>
                    <Col>
                        {
                            this.state.selectedPod ?
                                <Row style={{ paddingLeft: 0, backgroundColor: '#eccc68', fontWeight: 600, minHeight: this.state.sideBarHeight }}>
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
                                </Row> :
                                <Row style={{ paddingLeft: 0, backgroundColor: '#eccc68', fontWeight: 600, alignItems: 'center', minHeight: this.state.sideBarHeight }}>
                                    <Container>
                                        <Spinner animation="grow" size="sm" />
                                        <div>
                                        </div>
                                        <p style={{ fontSize: 14, fontWeight: 300 }}>Please select a node</p>
                                    </Container>
                                </Row>
                        }

                    </Col>
                </Row>
            </KubeContext.Provider>
        );
    }
}