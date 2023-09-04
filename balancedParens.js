function balancedParens(input) {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const char of input) {
    if (brackets[char]) {
        
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
     
      const top = stack.pop();
      if (brackets[top] !== char) {
        return false; 
      }
    }
  }

  return stack.length === 0;
}

console.log(balancedParens('('));                 
console.log(balancedParens('()'));             
console.log(balancedParens(')('));                
console.log(balancedParens('(())'));             
console.log(balancedParens('[](){}'));           
console.log(balancedParens('[({})]'));            
console.log(balancedParens('[(]{)}'));            
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); 
console.log(balancedParens("())")); 
