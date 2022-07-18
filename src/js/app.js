class Validator {
  validateUsername = (name) => {
    // имя содержит только латинские буквы,цифры от 0 до 9, - и _
    if (name.match(/[^A-Za-z0-9-_]/) != -1) {
      return false;
    }
    // имя не начинается и не заканчивается цифрами
    if (name.match(/^[^\d]+$/) == -1) {
      return false;
    }
    // имя не имеет три цифры подряд в любом месте
    if (name.match(/\d{3,}/) == -1) {
      return false;
    }
    return true;
  };
}
