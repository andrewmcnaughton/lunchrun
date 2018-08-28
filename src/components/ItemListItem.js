
import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions";

class itemListItem extends React.Component {
  handleCompleteClick = removeItemId => {
    const { removeItem } = this.props;
    removeItem(removeItemId);
  };

  render() {
    const { itemId, item } = this.props;
    return (
      <div key="itemName" className="item">
          <p>
            {item.title}{" "}
          </p>
          <button
            onClick={() => this.handleCompleteClick(itemId)}
            className="button button--add"
          >
            &#x2715;
          </button>
      </div>
    );
  }
}

export default connect(null, { removeItem })(itemListItem);