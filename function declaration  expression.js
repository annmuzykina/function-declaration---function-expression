/* 1) Function Declarations Объявление функции - это функция, привязанная к идентификатору или имени
Объявление функций требует функции ключевого слова, имени и тела функции. 
Вы можете определить это с помощью функции square () и {} ниже. Объявление функций 
НЕ заканчивается точкой с запятой*/
example:
function square (number) {
  return number * number; 
}

console.log(square(5));
// Output: 25.

example: 
function isGreaterThan (numberOne, numberTwo) {
  if (numberOne > numberTwo){
    return true;
  } else{ return false;}
} isGreaterThan(12, 34);


/*2) Function Expressions Выражение функции похоже на объявление функции, 
за исключением того, что идентификатор можно опустить, создавая анонимную функцию.
Выражения функций часто сохраняются в переменной. Вы можете идентифицировать 
выражение функции из-за отсутствия имени функции, сразу же возвращающего ключевое слово функции*/
example:
const square = function (number) {         |           const square = (number) => {
  return number * number;                  |           return number * number;
};                                         |           };
console.log(square(5));                    |           console.log(square(5)); 
                                           |
                                           |
// Output: 25.                             |           // Output: 25.

                                                        /*Вы можете идентифицировать функции стрелок с помощью 
                                                        круглых скобок и маркера стрелки () =>.*/

  


example:
