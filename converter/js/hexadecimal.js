function hexadecimalConversions() {
  const hexadecimalValue = document.getElementById("hexadecimalValue").value;
  const toDecimal = document.getElementById("hexadecimalToDecimal");
  const toBinary = document.getElementById("hexadecimalToBinary");
  const toOctal = document.getElementById("hexadecimalToOctal");

  // Verificar se a entrada é válida (composta apenas por 0 e 1)
  if (isValidHexadecimal(hexadecimalValue)) {
    const decimalResult = hexadecimalToDecimal(hexadecimalValue);
    const binaryResult = hexadecimalToBinary(hexadecimalValue);
    const octalResult = hexadecimalToOctal(hexadecimalValue);

    toDecimal.textContent = decimalResult;
    toBinary.textContent = binaryResult;
    toOctal.textContent = octalResult;
  } else {
    alert("Please enter a valid hexadecimal number.");
    toDecimal.textContent = "-----";
    toHexadecimal.textContent = "-----";
    toOctal.textContent = "-----";
  }
}

function isValidHexadecimal(hexValue) {
  const hexPattern = /^[0-9a-fA-F]+$/;
  return hexPattern.test(hexValue);
}

function hexadecimalToDecimal(hexadecimalValue) {
  const hexDigits = "0123456789ABCDEF";
  let decimalValue = 0;

  hexadecimalValue = hexadecimalValue.toUpperCase();

  for (let i = 0; i < hexadecimalValue.length; i++) {
    const digit = hexadecimalValue[i];
    const digitValue = hexDigits.indexOf(digit);
    const exponent = hexadecimalValue.length - 1 - i;

    decimalValue += digitValue * Math.pow(16, exponent);
  }

  return decimalValue;
}

function hexadecimalToBinary(hexadecimalValue) {
  const hexToBinMap = {
    0: "0000",
    1: "0001",
    2: "0010",
    3: "0011",
    4: "0100",
    5: "0101",
    6: "0110",
    7: "0111",
    8: "1000",
    9: "1001",
    A: "1010",
    B: "1011",
    C: "1100",
    D: "1101",
    E: "1110",
    F: "1111",
  };

  let binaryValue = "";

  hexadecimalValue = hexadecimalValue.toUpperCase(); // Normalizar para maiúsculas

  // Converter cada dígito hexadecimal para 4 bits binários
  for (let i = 0; i < hexadecimalValue.length; i++) {
    binaryValue += hexToBinMap[hexadecimalValue[i]];
  }

  // Remover zeros à esquerda desnecessários
  return binaryValue.replace(/^0+/, "") || "0";
}

function hexadecimalToOctal(hexadecimalValue) {
  // Passo 1: Converter hexadecimal para binário manualmente
  const binaryValue = hexadecimalToBinary(hexadecimalValue);

  // Passo 2: Converter binário para octal manualmente (agrupando em blocos de 3 bits)
  let paddedBinary = binaryValue;

  // Adiciona zeros à esquerda para que o número de bits seja múltiplo de 3
  while (paddedBinary.length % 3 !== 0) {
    paddedBinary = "0" + paddedBinary;
  }

  let octalValue = "";
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

  // Processar cada grupo de 3 bits para formar o valor octal
  for (let i = 0; i < paddedBinary.length; i += 3) {
    const groupOfThree = paddedBinary.substring(i, i + 3);
    octalValue += binaryToOctalMap[groupOfThree];
  }

  // Remover zeros à esquerda desnecessários
  return octalValue.replace(/^0+/, "");
}
