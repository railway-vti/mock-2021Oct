import React from "react";
import { connect } from "react-redux";

const NewComponent = ({ layout, children }) => (
  <div className={"wrapper " + (layout.isBoxed ? "wrapper-boxed" : "")}>
    {children}
  </div>
);

export default connect(store => ({
  layout: store.layout
}))(NewComponent);