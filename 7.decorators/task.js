function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...rest) {
    const hash = rest.join(",");
    let idx = cache.findIndex((item) => hash === item.hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...rest);
      cache.push({hash: hash, value: result});
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
  let flag = false;


  return function(...rest) {
      if (!flag) return;

      func.apply(this, rst);

      flag = true;

     setTimeout(() => {flag = false;}, ms);
  };

}






function debounceDecorator2(func) {
  // Ваш код
  let timeout;
    let flag = false;
    let count = 0;
    return function (...rest) {
      if (!flag) {
      
       count++;
       console.log (count);
       flag = true;
       timeout = setTimeout(() => {flag = false;}, ms);
      }
      else {
       return;
      }  
    };
}