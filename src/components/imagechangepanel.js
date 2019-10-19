import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class ImageChangePanel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ marginTop: 0, textAlign: 'center', marginTop: 25, marginBottom: 20 }}>
                <i style={{ fontSize: 32, marginBottom: 15 }} className="fas fa-dharmachakra"></i>
                <p style={{ fontSize: 14 }}>Change Image</p>
                <p style={{ fontSize: 13, fontWeight: 300, }}>Chane image of the selected pod.</p>
                <Row>
                    <Col>
                        <p style={{ fontSize: 14, margin: 0 }}>Current Image</p>
                        <span style={{ fontSize: 13, fontWeight: 300 }}>registry.hepsiburada.com/paymentapi:123</span>
                        <Col style={{marginTop:15}}>
                            <p style={{ fontSize: 14, margin: 0 }}>New Image</p>
                            <input style={{ width: '100%', textAlign: 'center', backgroundColor: '#f7f1e3', border: 'none', borderRadius: 50 }} type="text" />
                            <div style={{fontSize:14,marginTop:15,cursor:'pointer'}}>
                                <i style={{ fontSize: 32, marginBottom: 15 }} className="fas fa-sync-alt"></i>
                                <p style={{ fontSize: 13, fontWeight: 300, }}>Click to change</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}