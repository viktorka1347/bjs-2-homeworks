function solveEquation(a, b, c) {
  if (a==0) return ["a= 0, это недопустимое значение", "нет значения", "нет значения"];
   const discriminant = b ** 2 - 4 * a * c;
   if (discriminant > 0) {
     let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
     let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
     return [x1, x2];
   } else if
     (discriminant === 0) {
     let x1 = (-b/(2*a));
    
     return [x1];
   } else if
     (discriminant < 0) {
      
     return  [];
   }
 
 };
 function calculateTotalMortgage (percent, contribution, amount, date) {
   let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
