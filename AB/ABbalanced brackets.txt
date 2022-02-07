function isBracketsBalanced(str){
const stack = [];
for(let i=0; i<str.length; i++) {
   if(str[i] == '{' || str[i] == '(' || str[i] == '[') {
    stack.push(str[i]);
  }
  switch(str[i]) {

    case '}':
    if (stack.pop() !== '{') {
      return false
    } 
    break;

     case ']':
    if (stack.pop() !== '[') {
      return false
    } 
    break;

     case ')':
    if (stack.pop() !== '(') {
      return false
    } 
    break;
  }
}
return true;
}


isBracketsBalanced('{[()]}{(}');