function decimalConversions() {
  const decimalValue = document.getElementById("decimalValue").value;
  const toBinary = document.getElementById("decimalToBinary");
  const toHexadecimal = document.getElementById("decimalToHexadecimal");
  const toOctal = document.getElementById("decimalToOctal");
  const decimalNumber = parseInt(decimalValue, 10);

  if (!isNaN(decimalNumber)) {
    const binaryResult = decimalToBinary(decimalNumber);
    const hexadecimalResult = decimalToHexadecimal(decimalNumber);
    const octalResult = decimalToOctal(decimalNumber);

    toBinary.textContent = binaryResult;
    toHexadecimal.textContent = hexadecimalResult;
    toOctal.textContent = octalResult;
  } else {
    alert("Please enter a valid number.");
    toBinary.textContent = "-----";
    toHexadecimal.textContent = "-----";
    toOctal.textContent = "-----";
  }
}

function decimalToBinary(decimalNumber) {
  if (decimalNumber === 0) return "0";

  let binary = "";

  while (decimalNumber > 0) {
    let remainder = decimalNumber % 2;
    binary = remainder + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
}

function decimalToHexadecimal(decimalNumber) {
  if (decimalNumber === 0) return "0";

  let hexadecimal = "";

  const hexDigits = "0123456789ABCDEF";

  while (decimalNumber > 0) {
    let remainder = decimalNumber % 16;
    hexadecimal = hexDigits[remainder] + hexadecimal;
    decimalNumber = Math.floor(decimalNumber / 16);
  }

  return hexadecimal;
}

function decimalToOctal(decimalNumber) {
  if (decimalNumber === 0) return "0";

  let octal = "";

  while (decimalNumber > 0) {
    let remainder = decimalNumber % 8;
    octal = remainder + octal;
    decimalNumber = Math.floor(decimalNumber / 8);
  }

  return octal;
}
