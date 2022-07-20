class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(name) {
    // имя содержит только латинские буквы, цифры от 0 до 9, - и _
    if (name.match(/[^A-Za-z0-9-_]/) != null) {
      return false;
    }

    // имя не начинается и не заканчивается цифрами
    if (name.match(/^[^\d]+$/) == null) {
      return false;
    }

    // имя не имеет три цифры подряд в любом месте
    if (name.match(/\d{3,}/) != null) {
      return false;
    }

    return true;
  }
}

export default Validator;

/*
const val = new Validator()
const input = [
  "Пятачок",
  "Piglet",
  "Piglet12",
  "12Pig",
  "P_123_G",
  "-Piglet-",
  "_pigLet_",
  "Pig-Ж-let",
];
input.map(val.validateUsername)
*/
