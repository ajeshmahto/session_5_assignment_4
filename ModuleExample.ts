import {mathOperation} from './mathModule'

class mathExample {
    constructor(){
      console.log(mathOperation.add(1,4));
      console.log(mathOperation.substract(1,4));
      console.log(mathOperation.multiply(1,4));
      console.log(mathOperation.divide(1,4));
              
    }
}

var m = new mathExample();