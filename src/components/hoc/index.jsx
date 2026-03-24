import React from "react";
const withStypes = (Component) => {
  return (props) => {
    return (
      <div>
        {props.text}
        <Component
          style={{ padding: "1rem", backgroundColor: "red" }}
          {...props}
        />
      </div>
    );
  };
};
const Button = ({ style, text }) => <button style={style}>Click{text}</button>;
const Paragraph = ({ style }) => <p style={style}>Paragraph</p>;
const HOC = () => {
  const StyledButton = withStypes(Button);
  const StyledParagraph = withStypes(Paragraph);
  return (
    <div>
      <StyledParagraph />
      <StyledButton text={"hello"} />
      test
    </div>
  );
};
export default HOC;
