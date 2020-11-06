function telephoneCheck(str) {
  var re = /(^1*\s*\(*\d{3}\s*\)*)(-*\s*\d{3}\s*-*)(\d{4})$/g;
  var par = /\((?!...\))|(?<!\(...)\)/g;
  if(par.test(str)) 
  {
    return false;
  }
  return re.test(str);
}

telephoneCheck("555-555-5555");
