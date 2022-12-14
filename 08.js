// mapに格納。(1, 56, 103)等、一桁が混ざるとソートしても最大数にならない(561103のはずが561031になる)ので1なら11、2なら22に変換。0を付け加えて桁数を合わせてソート。並び替えられたkeyのみ取り出す。
var map = new Map();
var ary = new Array();
var str = "";

for (let i = 1; i <= 3; i++) {
  while (true) {
    //重複チェック
    num = Math.floor(Math.random() * 199) + 1;
    if (!ary.includes(num)) {
      ary.push(num);
      map.set(num, num);
      break;
    }
  }
}
console.log(ary + "\n" + "↓");

//一桁チェック
map.forEach(function (value, key) {
  if (value.toString().length === 1) {
    map.set(key, "" + value + value);
  }
});

// 桁数合わせ
map.forEach(function (value, key) {
  map.set(key, (value + "0").substr(0, 3)); //この時点で1桁はない。末尾に0を1つだけ付けて頭３桁取り出す
});

// ソート
let sortedByValue = new Map([...map].sort((a, b) => a[1] - b[1]).reverse());
// 出力
let result = "";
const keys = sortedByValue.keys();
for (const key of keys) {
  result += key;
}
console.log(result);
