import React, { Component } from "react";
import { connect } from "react-redux";

import { getAddress, addAddress } from "../redux/actions/profileAction";

class MainProfile extends Component {
  state = {};
  componentWillMount() {
    this.props.getAddress();
  }

  handleAdd = e => {
    e.preventDefault();
    e.target.reset();
    let payload = {
      name: this.state.name,
      phone: this.state.phone,
      address: this.state.address,
      relation: this.state.relation,
      email: this.state.email
    };
    this.props.addAddress(payload);
  };

  render() {
    return (
      <div className="container p-3">
        <div className="card">
          <div align="center" className="m-2 card-title">
            <h2> Emergency Contact </h2>
          </div>
          <div className="">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Relation</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
     
      <td>Mark</td>
      <td>213-456-7891</td>
      <td>3105 Villa torino,199015</td>
      <td>Brother</td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>324-980-7654</td>
      <td>190 San Antonio Street,apt 1302</td>
      <td>Boyfriend</td>
    </tr> */}

                {this.props.address ? (
                  this.props.address.user.emergencyContacts.map(address => (
                    <tr>
                      <td>{address.name}</td>
                      <td>{address.phone}</td>
                      <td>{address.email}</td>
                      <td>{address.address}</td>
                      <td>{address.relation}</td>
                    </tr>
                  ))
                ) : (
                  ""
                )}
              </tbody>
            </table>
            <form class="form-inline" onSubmit={this.handleAdd}>
              <label class="sr-only" for="inlineFormInputName2">
                Name
              </label>
              <input
                type="text"
                class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
                placeholder="Jane Doe"
              />
              <label class="sr-only" for="inlineFormInputName2">
                Phone
              </label>
              <input
                type="text"
                class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName3"
                placeholder="314-319-XXXX"
                onChange={e => {
                  this.setState({ phone: e.target.value });
                }}
              />
              <label class="sr-only" for="inlineFormInputName2">
                Email
              </label>
              <input
                type="text"
                class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName6"
                placeholder="johndoe@gmail.com"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
              <label class="sr-only" for="inlineFormInputName2">
                Address
              </label>
              <input
                type="text"
                class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName4"
                placeholder="3105 Ryland Street"
                onChange={e => {
                  this.setState({ address: e.target.value });
                }}
              />
              <label class="sr-only" for="inlineFormInputName2">
                Relation
              </label>
              <input
                type="text"
                class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName5"
                placeholder="Father"
                onChange={e => {
                  this.setState({ relation: e.target.value });
                }}
              />
              <button type="submit" class="btn btn-dark mb-2">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.profileReducer.address);
  const temp = state.profileReducer.address;
  console.log(temp);
  return {
    address: state.profileReducer.address
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAddress: () => dispatch(getAddress()),
    addAddress: payload => dispatch(addAddress(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainProfile);
