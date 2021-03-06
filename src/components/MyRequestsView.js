import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Button, ButtonGroup, Col, Dropdown, Row } from 'react-bootstrap';
import { buildEndpointUrl } from '../utilities';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class MyRequestsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRequest: null,
      requests: null
    };

    this._createNewRequest = this._createNewRequest.bind(this);
    this._handleModalClose = this._handleModalClose.bind(this);
  }

  componentDidMount() {
    axios.get(buildEndpointUrl('requests/me')).then((res) => {
      this.setState({
        requests: res.data
      });
    });
  }

  render() {
    return (
      <div className="my-requests">
        <Row className="view-header">
          <Col>
            <h1 className="h1">Your Requests</h1>
          </Col>

          <Col className="right-col">
            <Button variant="primary" onClick={this._createNewRequest}>New Request</Button>
          </Col>
        </Row>
        {(this.state.makers == null || this.state.makers.length === 0) && (
          <Col className="no-work panel empty">You have not made a request. <Button variant="link" onClick={this._createNewRequest}>Create A New Request Now.</Button></Col>
        )}
        {this.state.makers != null && this.state.makers.length > 0 && (
          <Col>
            <div className="table-wrapper">
              <table className="my-work-table">
                <thead>
                  <tr>
                    <th className="name">Name</th>
                    <th className="email">Email</th>
                    <th className="prints">Total Prints</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.makers.map((maker, key) => {
                    return (
                      <tr key={key}>
                        <td className="name">{maker.name}</td>
                        <td className="email">{maker.email}</td>
                        <td className="prints">{maker.prints}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Col>
        )}
        <Modal
          contentLabel="Add A Request"
          isOpen={this.state.newRequest != null}
          onRequestClose={this._handleModalClose}
          style={customStyles}
        >
          <div className="c-modal">
            {this.state.newRequest != null && <div></div>}
          </div>
        </Modal>
      </div>

    );
  }

  _createNewRequest(e) {
    e.preventDefault();

    this.setState({
      newRequest: {
        createDate: new Date(),
        userId: this.props.user._id
      }
    });
  }

  _handleModalClose() {
    this.setState({
      newRequest: null
    });
  }
}

export default MyRequestsView;
