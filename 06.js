for (let num = 1; num <= 100; num++) {
  if (true == /[3]/.test(num)) {
    console.log("!!");
  } else {
    console.log(num);
  }
}
