// Задание 2
// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет, есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.
function checkPropInObj (str, obj) {
  return (str in obj);
}

const obj ={};
const str = "city";
const str2 = "New York"
const obj2= {
  city: "New York"
}

console.log(checkPropInObj(str, obj)); 
console.log(checkPropInObj(str, obj2));
console.log(checkPropInObj(str2, obj2));

// false
// true
// false
