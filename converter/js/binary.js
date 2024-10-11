function binaryConversions() {
  const binaryValue = document.getElementById("binaryValue").value;
  const toDecimal = document.getElementById("binaryToDecimal");
  const toHexadecimal = document.getElementById("binaryToHexadecimal");
  const toOctal = document.getElementById("binaryToOctal");

  // Verificar se a entrada é válida (composta apenas por 0 e 1)
  if (isValidBinary(binaryValue)) {
    const decimalResult = binaryToDecimal(binaryValue);
    const hexadecimalResult = binaryToHexadecimal(binaryValue);
    const octalResult = binaryToOctal(binaryValue);

    toDecimal.textContent = decimalResult;
    toHexadecimal.textContent = hexadecimalResult;
    toOctal.textContent = octalResult;
  } else {
    alert("Please enter a valid binary number.");
    toDecimal.textContent = "-----";
    toHexadecimal.textContent = "-----";
    toOctal.textContent = "-----";
  }
}

function isValidBinary(binaryValue) {
  const binaryPattern = /^[01]+$/;
  return binaryPattern.test(binaryValue);
}

function binaryToDecimal(binaryValue) {
  let decimal = 0;
  const length = binaryValue.length;

  for (let i = 0; i < length; i++) {
    let digit = parseInt(binaryValue[i], 10);
    decimal += digit * Math.pow(2, length - 1 - i);
  }

  return decimal;
}

function binaryToHexadecimal(binaryValue) {
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

  return hexadecimal || "0";
}

function binaryToOctal(binaryValue) {
  let octal = "";

  while (binaryValue.length % 3 !== 0) {
    binaryValue = "0" + binaryValue;
  }

  const binaryToOctalMap = {
    "000": "0",
    "001": "1",
    "010": "2",
    "011": "3",
    100: "4",
    101: "5",
    110: "6",
    111: "7",
  };

  for (let i = 0; i < binaryValue.length; i += 3) {
    let groupOfThree = binaryValue.substring(i, i + 3);
    octal += binaryToOctalMap[groupOfThree];
  }

  return octal;
}
