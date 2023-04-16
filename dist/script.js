import React from "https://cdn.skypack.dev/react@18.2.0";
import ReactDOM from "https://cdn.skypack.dev/react-dom@18.2.0";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "" };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value });

  }

  handleSubmit(e) {
    this.props.table.push(this.state.value);
    this.setState({
      value: "" });


    e.preventDefault();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("textarea", { value: this.state.value, onChange: this.handleChange, placeholder: "Ecrire un message" }), /*#__PURE__*/
      React.createElement("input", { type: "submit", value: "ENVOYER" })), /*#__PURE__*/

      React.createElement("div", { className: "mesBox" },
      this.props.table.map((el) => /*#__PURE__*/
      React.createElement("p", { className: "mes" }, el)))));




  }}


const mesTable = [];

ReactDOM.render( /*#__PURE__*/
React.createElement(Hello, { table: mesTable }), document.getElementById("root"));