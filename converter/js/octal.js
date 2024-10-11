function octalConversions() {
  const octalValue = document.getElementById("octalValue").value;
  const toDecimal = document.getElementById("octalToDecimal");
  const toBinary = document.getElementById("octalToBinary");
  const toHexadecimal = document.getElementById("octalToHexadecimal");

  if (isValidOctal(octalValue)) {
    const decimalResult = octalToDecimal(octalValue);
    const binaryResult = octalToBinary(octalValue);
    const hexadecimalResult = octalToHexadecimal(octalValue);

    toDecimal.textContent = decimalResult;
    toBinary.textContent = binaryResult;
    toHexadecimal.textContent = hexadecimalResult;
  } else {
    alert("Please enter a valid octal number.");
    toDecimal.textContent = "-----";
    toBinary.textContent = "-----";
    toHexadecimal.textContent = "-----";
  }
}

function isValidOctal(valor) {
  const octalPattern = /^[0-7]+$/;
  return octalPattern.test(valor);
}

function octalToDecimal(octalValue) {
  let decimalValue = 0;

  for (let i = 0; i < octalValue.length; i++) {
    const digit = parseInt(octalValue[i], 10);
    const digitValue = digit * Math.pow(8, octalValue.length - 1 - i);

    decimalValue += digitValue;
  }

  return decimalValue;
}

function octalToBinary(octalValue) {
  const octalToBinaryMap = {
    0: "000",
    1: "001",
    2: "010",
    3: "011",
    4: "100",
    5: "101",
    6: "110",
    7: "111",
  };

  let binaryValue = "";

  for (let i = 0; i < octalValue.length; i++) {
    const digit = octalValue[i];
    binaryValue += octalToBinaryMap[digit];
  }

  return binaryValue.replace(/^0+/, "");
}

function octalToHexadecimal(octalValue) {
  let binaryValue = octalToBinary(octalValue);

  const hexDigits = "0123456789ABCDEF";
  let hexadecimal = "";

  while (binaryValue.length % 4 !== 0) {
    binaryValue = "0" + binaryValue;
    // console.log(binaryValue);
  }

  for (let i = 0; i < binaryValue.length; i += 4) {
    let groupOfFour = binaryValue.substring(i, i + 4);
    let decimalValue = parseInt(groupOfFour, 2);
    hexadecimal += hexDigits[decimalValue];
  }

  return hexadecimal;
}
