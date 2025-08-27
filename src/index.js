module.exports = function check(str, bracketsConfig) {
  const stack = [];

  str.split('').forEach((char) => {
    bracketsConfig.forEach(([open, close]) => {
      if (char === open && char === close) {
        if (stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      } else if (char === open) {
        stack.push(char);
      } else if (char === close) {
        if (stack.pop() !== open) {
          stack.push(null);
        }
      }
    });
  });

  return stack.length === 0;
};
