function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    let idx = cache.findIndex((item) => hash === item.hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }
      let result = func(...args);
      cache.push({hash: hash, value: result});
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    
  }
  return wrapper;
}

function debounceDecoratorNew(func) {
  // Ваш код
  let flag = false;
return function(...args){
 let ms = func.apply(this,arguments);
      if (!flag) return;

      func.apply(this, rst);

      flag = true;

     setTimeout(() => {flag = false;},func);
  };

}
function debounceDecorator2(func) {
  // Ваш код
  let timeout;
    let flag = false;
    let count = 0;
    return function (...args) {
      if (!flag) return;
      {
      let ms = func.apply(this, arguments);
       count++;
       console.log (count);
       flag = true;
       timeout = setTimeout(() => {flag = false;}, func);
      
      
      
      }  
    };
}