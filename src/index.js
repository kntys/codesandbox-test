// function func1(str){
//   return str;
// }
// const func1 = function(str){
//   return str
// }

// console.log(func1("func1です"));

// const func2 =(str)=>{
//   return str
// }

//const func2 = str => str;

// const func2 = str => {
//   return str;
//};

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// const func3 = (num1, num2) => num1 +num2

// console.log(func2("func2です"));

//console.log(func3(10, 20));

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

// const myProfile = ["じゃけぇ", 28];
// const message4 = `なまえは${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message4);

// const [name, age] = myProfile;
// const message5 = `なまえは${name}です。年齢は${age}です。`;
// console.log(message5);
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

// const arr1 = [1, 2];
// console.log(arr1)
// console.log(...arr1);

//まとめる

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// console.log(arr4 == arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`要素${index+1}番目は${name}です。`));

//nameArr.map((name) => console.log(name));
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   if(name === "じゃけぇ"){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
//

//三項演算子
//ある条件 ？ 条件がtreの時： 条件がfalseの時
//
// const num = 1300;
// //console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して下さい';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
// }

// console.log(checkSum(50, 60));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log("1か2はtrueになります。");
// }

// if (flag1 && flag2){
//   console.log("1も2もtrueになります。");
// }

//||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です。";
console.log(fee);
//＆＆は左側がtrueなら右側を返す。
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
