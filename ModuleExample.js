"use strict";
exports.__esModule = true;
var mathModule_1 = require("./mathModule");
var mathExample = (function () {
    function mathExample() {
        console.log(mathModule_1.mathOperation.add(1, 4));
        console.log(mathModule_1.mathOperation.substract(1, 4));
        console.log(mathModule_1.mathOperation.multiply(1, 4));
        console.log(mathModule_1.mathOperation.divide(1, 4));
    }
    return mathExample;
}());
var m = new mathExample();
