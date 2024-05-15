function checkValidString(str) {
    for (let i = 0; i < str.length; i++) {
      if (
        !(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) &&
        !(str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) &&
        !(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57)
      ) {
        return false;
      }
    }
    return true;
  }
  console.log(checkValidString("HelloAnul%"));
  


function checkValidString(str) {
    for (let i = 0; i < str.length; i++) {
      if (!(str[i].match(/[a-zA-Z0-9]/))) {
        return false;
      }
    }
    return true;
  }
  console.log(checkValidString("HelloAnul"));
  