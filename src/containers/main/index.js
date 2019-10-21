import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Spinner, Container } from 'react-bootstrap';

import PortForwardPanel from '../../components/portforwardpanel'
import PodList from '../../components/podlist';

import ImageChangePanel from '../../components/imagechangepanel';
import RestartPodPanel from '../../components/restartpodpanel';

import NamespaceSelector from '../../components/namespaceselector';

import KubeContext from '../../context/kubecontext'

import HttpClient from '../../infrastructure/http/httpclient'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.selectPod = this.selectPod.bind(this);
        this.selectNamespace = this.selectNamespace.bind(this);
        this.state = {
            sideBarHeight: 0,
            podConfig: "config"
        }
    }
    componentDidMount() {
        var vm = this;
        this.setState({showSpinner: true})
        let httpClient = HttpClient.getInstance();

        httpClient.get("http://localhost:8081/port/namespaces").then((response) => {
            vm.setState({namespaces: response.namespaces})
            vm.selectNamespace(response.namespaces[0])
            setTimeout(function () {
                let contentPanelWidth = window.innerWidth - vm.sidebar.clientWidth;
                vm.setState({contentPanelWidth:contentPanelWidth, sideBarHeight: vm.sidebar.clientHeight,sideBarWidth: vm.sidebar.clientWidth-18 })
            }, 50)
        })
        setTimeout(function () {
            let contentPanelWidth = window.innerWidth - vm.sidebar.clientWidth;
            vm.setState({contentPanelWidth:contentPanelWidth, sideBarHeight: vm.sidebar.clientHeight,sideBarWidth: vm.sidebar.clientWidth-18 })
        }, 50)

    }
    selectNamespace(namespace){
        var vm = this;
        vm.setState({selectedPod: undefined})
        let httpClient = HttpClient.getInstance();

        httpClient.get("http://localhost:8081/port/service/"+namespace.name).then((response) => {
            vm.setState({podList: response.pods})
        })
    }
    selectPod(pod){
        this.setState({selectedPod: pod})
    }
    render() {
        return (
            <KubeContext.Provider
                value={{
                    clusterNodes: this.state.clusterNodes,
                    podList: this.state.podList,
                    nodeList: this.state.nodeList,
                    selectedClusterNode: this.state.selectedClusterNode,
                    selectPod: this.selectPod,
                    namespaces: this.state.namespaces,
                    onNamespaceChange: this.selectNamespace
                }}>
                <Row>
                    <Col sm={2} ref={(sidebar) => this.sidebar = sidebar} style={{minHeight:300}} >
                        <Row>
                            <div style={{ width: '100%', backgroundColor: '#ffa502', padding: 15 }}>
                                <i style={{ fontSize: 42 }} className="fas fa-robot"></i>
                                <span style={{ marginLeft: 10, verticalAlign: 'super', fontSize: 14, fontWeight: 'bolder' }}>ROBO KUBE</span>
                            </div>
                        </Row>
                        <Row>
                            <NamespaceSelector />
                        </Row>
                        <div>
                            <PodList podList={this.state.podList} />
                        </div>
                    </Col>
                    <Col style={{width:this.state.contentPanelWidth, position:'fixed',paddingRight:0,left:this.state.sideBarWidth}}>
                        {
                            this.state.selectedPod ?
                                <Row style={{ paddingLeft: 0, backgroundColor: '#eccc68', fontWeight: 600, minHeight: this.state.sideBarHeight }}>
                                    <Container>
                                        <p style={{fontSize:12, fontWeight:'bolder',marginTop:20}}>You are editing {this.state.selectedPod.name}</p>
                                    </Container>
                                    <Col sm={3}>
                                        <PortForwardPanel />
                                    </Col>
                                    {this.state.podConfig ?
                                        <Col>
                                            <RestartPodPanel  />
                                        </Col> : null
                                    }
                                    <Col>
                                        <ImageChangePanel />
                                    </Col>
                                </Row> :
                                <Row style={{ paddingLeft: 0, backgroundColor: '#eccc68', fontWeight: 600, alignItems: 'center', minHeight:!this.state.selectPod ? this.state.sideBarHeight-1 : this.state.sideBarHeight }}>
                                    <Container>
                                        <Spinner animation="grow" size="sm" />
                                        <div>
                                        </div>
                                        <p style={{ fontSize: 14, fontWeight: 300 }}>Please select a pod</p>
                                    </Container>
                                </Row>
                        }

                    </Col>
                </Row>
            </KubeContext.Provider>
        );
    }
}