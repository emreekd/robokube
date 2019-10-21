import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class RestartPodPanel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ marginTop: 0, textAlign: 'center', marginTop: 25, marginBottom: 20 }}>
                <i style={{ fontSize: 32, marginBottom: 15 }} className="fa fa-box-open"></i>
                <p style={{ fontSize: 14 }}>Restart Pod</p>
                <p style={{ fontSize: 13, fontWeight: 300, }}>This action delete the selected pod and kubernetes create new one. If your kubernetes setting doesn't support this don't use this action.</p>
                <Row>
                    <Col>
                        <div style={{padding:10,cursor:'pointer'}}>
                            <i style={{ fontSize: 32, marginBottom: 15 }} className="fa fa-power-off"></i>
                            <p style={{fontSize:14,fontWeight:300}}>Click to restart</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}