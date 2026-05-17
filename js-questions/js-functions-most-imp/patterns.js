//STAR PATTERNS
function star1(rowCount) {
  let pattern = "";
  for (let row = 1; row <= rowCount; row++) {
    // pattern+="* ".repeat(row), we can also use repeat() method to omit inner loop.
    for (let col = 1; col <= row; col++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

//NUMBER PATTERNS
function num1(rowCount) {
  let pattern = "";
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= row; col++) {
      pattern += col + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

function num2(rowCount) {
  let pattern = "";
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= row; col++) {
      pattern += row + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

function num3(rowCount) {
  let pattern = "";
  let temp = 1;
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= row; col++) {
      pattern += temp++ + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

function num4(rowCount) {
  let pattern = "";
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= rowCount - row + 1; col++) {
      pattern += col + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

function num5(rowCount) {
  let pattern = "";
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= rowCount - row; col++) {
      pattern += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      pattern += col;
    }
    pattern += "\n";
  }
  console.log(pattern);
}

function num6(rowCount) {
  let pattern = "";
  let temp = 1;
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= rowCount - row; col++) {
      pattern += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      pattern += temp++;
    }
    pattern += "\n";
  }
  console.log(pattern);
}

star1(6);

num1(7);
num2(10);
num3(6);
num4(6);
num5(6);
num6(6);
