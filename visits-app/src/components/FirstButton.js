import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class FirstButton extends React.Component {
    render() {
        return (
          <Button variant="contained" color="primary">
            Cars
          </Button>
        );
      }
}

export default connect(
    null,
    { FirstButton }
  )(FirstButton);
  // export default AddTodo;