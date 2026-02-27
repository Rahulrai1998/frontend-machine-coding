import React from "react";

const FallbackUI = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {" "}
      <div
        style={{
          margin: "auto",
          border: "1px solid blue",
          borderRadius: "1rem",
          width: "25%",
          padding: "2rem",
        }}
      >
        We'll be back soon...
      </div>{" "}
    </div>
  );
};

export default FallbackUI;
