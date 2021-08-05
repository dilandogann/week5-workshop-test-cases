const functions = {
    divide: (num1,num2) => {
      if(num2 === 0) {
           throw new Error('Divide by zero error')
      }
      else if(isNaN(num1) || isNaN(num2) ) {
        throw new Error('Invalid error')
      }
      return num1/num2;
    },
    toUpper:(title) => {
      const arr= title.split(" ")
      const newArr = arr.map(str => str.charAt(0).toUpperCase()+str.slice(1))
      return newArr.join(" ");
    }
};

module.exports = functions;