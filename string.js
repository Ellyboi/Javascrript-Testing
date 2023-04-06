function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('La cadena debe tener entre 1 y 10 caracteres');
  }
  return string.length;
}

module.exports = stringLength;
