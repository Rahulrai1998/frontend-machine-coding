import React, { useState } from "react";

const FormValid = () => {
  //maintain an array data-structure for scalability,maintainability and clean-code
  const initialValue = {
    firstname: {
      id: "firstname",
      type: "text",
      name: "firstname",
      placeholder: "firstname...",
      label: "First Name",
      value: "",
      hasError: false,
      errorMessage: "First Name can't be empty!!",
    },
    lastname: {
      id: "lastname",
      type: "text",
      name: "lastname",
      placeholder: "lastname...",
      value: "",
      label: "Last Name",
      hasError: false,
      errorMessage: "Last Name can't be empty!!",
    },
    email: {
      id: "email",
      type: "email",
      label: "Email",
      name: "email",
      placeholder: "random@email.com",
      value: "",
      hasError: false,
      errorMessage: "Either wrong email or empty email!!",
    },
    password: {
      id: "password",
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "password",
      value: "",
      hasError: false,
      errorMessage: "Either wrong password or empty password!!",
    },
    confirmPassword: {
      id: "confirmPassword",
      type: "password",
      name: "confirm-password",
      placeholder: "confirm password",
      label: "Confirm Password",
      value: "",
      hasError: false,
      errorMessage: "Somethings wrong or empty field!!",
    },
  };

  const [data, setData] = useState(initialValue);
  const [displayData, setDisplayData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [differentPassword, setDifferentPassword] = useState(false);

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const copyData = { ...data };
    copyData[key].value = value;
    // if (value) {
    //   copyData[key].hasError = false;
    // }
    checkFormData();
    setData(copyData);
  };

  const checkFormData = () => {
    const copyData = { ...data };
    Object.keys(copyData)?.forEach((key) => {
      const obj = copyData[key];
      obj.hasError = !obj.value ? true : false;
    });
    if (copyData.password.value !== copyData.confirmPassword.value) {
      setDifferentPassword(true);
    } else setDifferentPassword(false);
    setData(copyData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFormData();
    setDisplayData({
      firstname: data.firstname.value || "",
      lastname: data.lastname.value || "",
      email: data.email.value || "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        style={{
          width: "30%",
          padding: "10px",
          border: "1px solid brown",
          borderRadius: "10px",
        }}
      >
        {Object.entries(data)?.map(([key, val]) => {
          const {
            id,
            type,
            name,
            label,
            placeholder,
            value,
            hasError,
            errorMessage,
          } = val;

          return (
            <div key={id} style={{ width: "100%" }}>
              <div style={{ textAlign: "start", paddingTop: "10px" }}>
                <label htmlFor={id}>{label}</label>
              </div>
              <input
                style={{ width: "100%", borderColor: hasError ? "red" : "" }}
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
              />
              {hasError && (
                <div
                  style={{
                    textAlign: "start",
                    color: "red",
                    fontSize: "0.8rem",
                  }}
                >
                  {errorMessage}
                </div>
              )}
              {key === "confirmPassword" && differentPassword && (
                <div
                  style={{
                    textAlign: "start",
                    color: "red",
                    fontSize: "0.8rem",
                  }}
                >
                  Password doesn't match!!!
                </div>
              )}
            </div>
          );
        })}
        <button type="submit" style={{ width: "100%", margin: "5px" }}>
          Submit
        </button>
      </form>
      <div>
        {Object.keys(displayData)?.map((elm) => {
          return <div key={elm}>{elm + ": " + displayData[elm]}</div>;
        })}
      </div>
    </div>
  );
};

export default FormValid;
