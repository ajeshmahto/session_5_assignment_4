function parametrizedDecorator(target,
      propertyKey,parameterIndex){
   console.log("parameterized decorator", target,propertyKey,parameterIndex);
}

class ParameterDecoratorExample{

  method(@parametrizedDecorator param1:string,@parametrizedDecorator param2:number){
      
  }
}