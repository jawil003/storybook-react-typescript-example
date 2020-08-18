import React from "react";
import desk from "./desk.jpg";
interface Props {
  className?: string;
  children?: JSX.Element[] | JSX.Element;
}

class Example extends React.PureComponent<Props> {
  render() {
    return (
      <div
        className="app-credentials"
        style={{
          background: `url(${desk})`,
        }}
      >
        <div className={`grid-container  ${this.props.className}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
  handleClick(event: any, values: { name: string; value: string }[]) {
    alert("Login clicked");
  }
}

export default Example;
