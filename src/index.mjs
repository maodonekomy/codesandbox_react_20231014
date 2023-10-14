/*
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // varは上書きできるよん
// val1 = "ar変数上書きしますよ"; 
// console.log(val1);

// // varは歳宣言できるよ
// var val1 = "var変数再宣言";
// console.log(val1);

// // let
// let var2 = "let変数";
// console.log(var2);

// var2 = "上書き";
// console.log(var2);

// //　letは再宣言できない
// let var2 = "let再宣言";

// constは定数
// const val3 = "const変数";
// console.log(val3);

// const val3 = "constを上書き";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"おなまえ",
//   age:51,
// };
// val4.name = "onamae";
// val4.address = "tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("nekomimi");
// console.log(val5);
// console.log(val5[0]);

/*
 * テンプレート文字列 
 */
// const name = "まあおど";
// const age = 51;
// // 私の名前は○○です。年齢はXX歳です。
// // 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);
// // テンプレート文字列
// // バッククォートで囲む
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
// const func1a = function(str) {
//   return str
// }
// console.log(func1("hoge"));
// // アロー関数
// // const 関数名 = (引数) => 処{理}
// const func2 = (str) => {
//   return str;
// }
// // 引数が1つの場合はカッコ省略可
// const func2a = str2 => {
//   return str2;
// }
// console.log(func2("func2"));
// console.log(func2a("func2a"));
// // 1行で処理が終わる場合はreturnが省略できることも
// const func2b = (str) => str;
// console.log(func2b("func2b"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 99));
// const func3a = (num1, num2) => num1 + num2;
// console.log(func3a(12,345));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "aoki",
//   age: 51,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;

// const message2 = `名前は${name}ですの。年齢は${age}ですの。`;
// console.log(message2);

// const myProfile2 = ['aoki','51'];
// const message3 = `名前は${myProfile2[0]}で、${myProfile2[1]} years oldですの`;
// console.log(message3);

// const [name, age] = myProfile2;
// const message4 = `名前は${name}でして、年は${age}ですのだ`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayhello = (name = "GUEST") => console.log(`こんにちは${name}`);
// sayhello("ほげ");

/**
 * スプレッド構文
 */
//  const arr1 = [1, 2];
//console.log(arr1);
//console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列コピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log("arr6:" + arr6);
// console.log("arr4:" + arr4);
// const arr7 = [...arr4,...arr5];
// console.log(arr7);
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**.
 * mapやfilter
 */
const nameArr = ["青木","田中","山田"];
// map
//for (let idx = 0; idx < nameArr.length; idx++) {
  // console.log(nameArr[idx]);
//  console.log(`${idx+1}番目${nameArr[idx]}`);
// nameArr.map((name) => console.log(`${name}`))
// }
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name) => console.log(name));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
// if (name === "青木") {
//   return name
// } else {
//   return `${name}さん`
// }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件 ? true時 : false時
// const val1 = 1 < 0 ? 'true' : 'false';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100超え' : '許容範囲'
// }
// console.log(checkSum(10,0));

/**
 * 論理演算子の本当の意味
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1と2はtrue");
// }

// || は左側がfalseとなるとき、右側を返す
// const num = 100;
// const fee = num || "金額未設定";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
