import React from 'react';
import { Row, Col } from 'react-bootstrap';

import KubeContext from '../context/kubecontext'

export default class PodList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <KubeContext.Consumer>
                {(context) => !context.podList ? null : (
                    <div>
                        <Row style={{ marginTop: 0, cursor: 'pointer' }}>
                            <Col sm style={{ backgroundColor: '#a4b0be' }}>
                                <div style={{ textAlign: "left", margin: '15px 5px', fontWeight: '600' }}>
                                    <i style={{ fontSize: 24 }} className="fa fa-podcast"></i>
                                    <span style={{ marginLeft: 5, fontSize: 14, verticalAlign: 'text-bottom' }}>Pod</span>
                                    <p style={{ marginTop: 10, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>payment-api-4b6584</p>
                                    <p style={{ marginTop: 2, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>Running</p>
                                    <p style={{ marginTop: 2, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>Age 14d</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 0, cursor: 'pointer' }}>
                            <Col sm style={{ backgroundColor: '#a4b0be' }}>
                                <div style={{ textAlign: "left", margin: '15px 5px', fontWeight: '600' }}>
                                    <i style={{ fontSize: 24 }} className="fa fa-podcast"></i>
                                    <span style={{ marginLeft: 5, fontSize: 14, verticalAlign: 'text-bottom' }}>Pod</span>
                                    <p style={{ marginTop: 10, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>payment-api-4b6584</p>
                                    <p style={{ marginTop: 2, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>Running</p>
                                    <p style={{ marginTop: 2, marginBottom: 0, textAlign: 'right', fontSize: 12, fontWeight: 300 }}>Age 14d</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
            </KubeContext.Consumer>
        );
    }
}