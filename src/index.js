module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !== 0){
    return false;
  }

  let stack = [];  

  for ( let i = 0; i < str.length; i++) {    
      for ( let j = 0; j < bracketsConfig.length; j++) {  
        let item = bracketsConfig[j];  
        if (stack[stack.length-1] == item[0] && str[i] == item[1]) { 
          stack.pop()
        } else if (str[i] == item[0]) {
          stack.push(str[i])
        }
      }
    }

  if(stack.length == 0) {
          return true;
  } else {
          return false;
  }
}