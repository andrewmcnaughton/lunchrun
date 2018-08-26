
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ItemListItem from "./ItemListItem";

class ItemList extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addItem } = this.props;
    event.preventDefault();
    addItem({ title: addFormValue });
    this.setState({ addFormValue: "" });
  };

  renderAddForm = () => {
    const { addFormValue } = this.state;
    return (
      <div id="itme-add-form">
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-field">
            <p className="add">Add to list</p>
            <input
              value={addFormValue}
              onChange={this.handleInputChange}
              id="itemNext"
              type="text"
              placeholder="Item Name"
            />
          </div>
        </form>
      </div>
    );
  };

  renderItems() {
    const { data } = this.props;
    const items = _.map(data, (value, key) => {
      return <ItemListItem key={key} itemId={key} item={value} />;
    });
    if (!_.isEmpty(items)) {
      return items;
    }
    return (
      <div className="message">
        <h4>No items.</h4>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="item-list-container">
        <h1>Lunch run!</h1>
        <div className="row">
          {this.renderItems()}
          {this.renderAddForm()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(ItemList);