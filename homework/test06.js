// -------------------
// Q1
// -------------------
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }
  
  // 上面這個迴圈會印出什麼？為什麼？
  
  // -------------------
  // Q2
  // -------------------
  function sayHi() {
    return (() => 0)();
  }
  
  console.log(typeof sayHi());  // 會印出什麼？為什麼？
  
  // -------------------
  // Q3
  // -------------------
  (() => {
    let x = (y = 10);
  })();
  
  console.log(typeof x);    // 會印出什麼？為什麼？
  console.log(typeof y);    // 會印出什麼？為什麼？