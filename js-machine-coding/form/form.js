// form.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const output = document.getElementById("form-output");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page reload

    const formData = new FormData(form);
    const result = {};

    // Handle multiple values (checkboxes, multi-select)
    for (const [key, value] of formData.entries()) {
      if (result[key]) {
        if (Array.isArray(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      } else {
        result[key] = value;
      }
    }
    
    displayData(result);
  });

  function displayData(data) {
    output.innerHTML = ""; // clear previous output

    const heading = document.createElement("h2");
    heading.textContent = "Submitted Form Data";
    output.appendChild(heading);

    const list = document.createElement("ul");

    Object.entries(data).forEach(([key, value]) => {
      const item = document.createElement("li");

      item.innerHTML = `
        <strong>${key}:</strong> ${
        Array.isArray(value) ? value.join(", ") : value
      }
      `;

      list.appendChild(item);
    });

    output.appendChild(list);
  }
});
