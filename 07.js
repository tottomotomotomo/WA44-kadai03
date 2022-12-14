var num = [];
num[0] = 1;
num[1] = 1;
for (var cnt = 2; cnt < 12; cnt++) {
  num[cnt] = num[cnt - 2] + num[cnt - 1];
  console.log(num[cnt - 2]);
}
