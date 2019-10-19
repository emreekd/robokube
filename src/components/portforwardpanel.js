import React from 'react';
import { Row,Col } from 'react-bootstrap';

export default class PortForwardPanel extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div style={{ marginTop: 0, textAlign: 'center', marginTop: 25 }}>
                    <i style={{ fontSize: 32, marginBottom: 15 }} className="fa fa-plug"></i>
                    <p style={{ fontSize: 14 }}>Port Forwarding</p>
                    <p style={{ fontSize: 13, fontWeight: 300, }}>Enter the informations to access a port on the selected pod from your local environment.</p>
                    <Row>
                        <Col>
                            <p style={{ fontSize: 14, margin: 0 }}>Local Port</p>
                            <input style={{ textAlign: 'center', backgroundColor: '#f7f1e3', border: 'none', borderRadius: 50 }} type="text" />
                        </Col>
                        <Col>
                            <p style={{ fontSize: 14, margin: 0 }}>Destination Port</p>
                            <input style={{ textAlign: 'center', backgroundColor: '#f7f1e3', border: 'none', borderRadius: 50 }} type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{ width: 100, paddingTop: 15, margin: '5px auto', cursor: 'pointer' }}>
                                <i style={{ fontSize: 32, marginBottom: 5 }} className="fa fa-play-circle"></i>
                            </div>
                            <p style={{ fontSize: 12, fontWeight: 300, marginTop: 0 }} >Click to start!</p>
                        </Col>
                    </Row>
                </div>
        );
    }
}