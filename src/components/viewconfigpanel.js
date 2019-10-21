import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class ViewConfigPanel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if(!this.props.config)
            return null;

        return (
            <div style={{ marginTop: 0, textAlign: 'center', marginTop: 25, marginBottom: 20 }}>
                <i style={{ fontSize: 32, marginBottom: 15 }} className="fa fa-file"></i>
                <p style={{ fontSize: 14 }}>View Config</p>
                <p style={{ fontSize: 13, fontWeight: 300, }}>View configuration of the selected pod.</p>
                <Row>
                    <Col>
                        <p style={{ fontSize: 14, margin: 0 }}>Config YAML</p>
                        <SyntaxHighlighter language="json" customStyle={{ margin: '0 auto', width: 300, backgroundColor: '#f7f1e3', textAlign: 'left' }} style={docco}>
                            {this.props.config}
                        </SyntaxHighlighter>
                    </Col>
                </Row>
            </div>
        );
    }
}