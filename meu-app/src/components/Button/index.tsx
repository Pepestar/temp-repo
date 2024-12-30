import "./styles.css";
import { Component } from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

export class Button extends Component<ButtonProps> {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button className="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}
