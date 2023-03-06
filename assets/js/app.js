const setMath = (mathOperator) => {
  
    return (...numbers) => {
      let str = numbers.join(` ${mathOperator} `);
      let res = 0;
      
      for(let i = 0; i < numbers.length; i++) {
        switch (mathOperator) {
      case '+':     
          res += numbers[i];
          break;
      case '-':       
          (i === 0) ? res = numbers[i] : res -= numbers[i];
          break;
      case '*':
          (i === 0) ? res = numbers[i] : res *= numbers[i];
          break;
      case '/':
          (i === 0) ? res = numbers[i] : res /= numbers[i];
          break;
      default:
          return;
        }
      }
      
      return (`${str} = ${res}`)
    }
    
  }
  
  let functionWithMath = setMath('-');
  
  console.log(functionWithMath(6, 2, 3, 4));
  
  
  
  
  
  
  //////////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  const setNumbers = (...numbers) => {
    
    return (mathOperator) => {
      let str = numbers.join(` ${mathOperator} `);
      let res = 0;
      
      for(let i = 0; i < numbers.length; i++) {
        switch (mathOperator) {
      case '+':     
          res += numbers[i];
          break;
      case '-':       
          (i === 0) ? res = numbers[i] : res -= numbers[i];
          break;
      case '*':
          (i === 0) ? res = numbers[i] : res *= numbers[i];
          break;
      case '/':
          (i === 0) ? res = numbers[i] : res /= numbers[i];
          break;
      default:
          return;
        }
      }
      
      return (`${str} = ${res}`)
    }
    
  }
  
  let functionWithNumbers = setNumbers(6, 2, 3);
  
  console.log(functionWithNumbers('*'));
  