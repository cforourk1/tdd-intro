/**
 * @param {number} num1 - First number to add.
 * @param {number} num2 - Second number to add.
 * @returns {number} The sum, unless the two values are the same,
 * then returns double their sum.
 *
 * @example
 * sumDouble(1, 2); // 3
 * @example
 * sumDouble(2, 2); // 8
 * @example
 * sumDouble(5, 5); // 20
 */
export function sumDouble(num1, num2) {
/* I chose to see if num1 is absolute equal to num2 then return them added together, multiply sum by 2 if true. Else - return the two values added together.
*/
    if (num1 === num2) {
      return (num1 + num2) * 2
  } else {
    return (num1 + num2)
  }
}

/* second function
*/

/**
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {boolean} Whether at least one of the numbers is 10 or their sum is 10
 *
 * @example
 * makes10(10, 5); // true
 * @example
 * makes10(7, 3); // true
 * @example
 * makes10(4, 4); // false
 */
export function makes10(num1, num2) {
/* first if statement checks if either number is equal to 10. I misread it at first as greater than or equal to ten. Second statement if both numbers added together equal ten - then true. All else is false.
*/
    if (num1 === 10 || num2 === 10) {
      return true
    } else if (num1 + num2 === 10) {
      return true
    } else {
      return false
    }
}

/**
 * Hint: Math.abs(num) returns the absolute value of num.
 *
 * @param {number} n - The number to check.
 * @param {number} distance - The allowed distance from 100.
 * @returns {boolean} True if n is within the distance of 100, otherwise false.
 *
 * @example
 * near100(95, 5); // true
 * @example
 * near100(90, 5); // false
 * @example
 * near100(105, 10); // true
 */
export function near100(n, distance) {
/* math.abs is taking this and turning it into a positive. I understand we are seeing the difference of one value compared to another and then checking to see if THAT number is within an allowed range.
*/
      return Math.abs(n - 100) <= distance

}

/**
 * Hint: use the remainder operator (%)
 *
 * @param {number} n - The number to check.
 * @returns {boolean} Whether n is a multiple of 3 or 5.
 *
 * @example
 * isMultiple35(3); // true
 * @example
 * isMultiple35(10); // true
 * @example
 * isMultiple35(7); // false
 */
export function isMultiple35(n) {
/* I mistankingly was looking at wrong one in test. Checked to see if n % 3 or % 5 === 0 then return true. This checkes to see if n is a dumber than will have a remiander of 0 if divded by a three or a five.
*/
   if (n % 3 === 0) {
    return true
   } else if (n % 5 === 0) {
    return true
   } else {
    return false
  }
}

/**
 * Hint: use the remainder operator (%)
 *
 * @param {number} num1 - First positive number.
 * @param {number} num2 - Second positive number.
 * @returns {boolean} Whether both numbers share the same last digit
 *
 * @example
 * shareLastDigit(27, 7); // true
 * @example
 * shareLastDigit(123, 43); // true
 * @example
 * shareLastDigit(10, 21); // false
 */
export function shareLastDigit(num1, num2) {
/* getting the the remainder of the numbers divded by 10 will always get us the last digit. So we take that and compare the two number to see if they match with the absolute equal and if not return fals
*/
    if (num1 % 10 === num2 % 10) {
      return true
    } else {
      return false
    }
}

/**
 * @param {number} temp1 - First temperature.
 * @param {number} temp2 - Second temperature.
 * @returns {boolean} True if one temperature is less than 0 and
 * the other is greater than 100
 *
 * @example
 * isColdAndHot(-5, 120); // true
 * @example
 * isColdAndHot(150, -1); // true
 * @example
 * isColdAndHot(10, 50); // false
 */
export function isColdAndHot(temp1, temp2) {
/* first if to check if temp 1 is below 0 and if temp 2 is over 100 - opposite on second line - because those are the only two possibilities to be true - all else is false.
*/
  if (temp1 < 0 && temp2 > 100) {
    return true
  } else if (temp1 > 100 && temp2 < 0) {
    return true
  } else {
    return false
  }
}

/**
 * @param {string} A - First string.
 * @param {string} B - Second string.
 * @returns {string} A new string with the form ABBA
 *
 * @example
 * makeABBA("Hi", "Bye"); // "HiByeByeHi"
 * @example
 * makeABBA("Yo", "Alice"); // "YoAliceAliceYo"
 * @exampleﬁ
 * makeABBA("a", "b"); // "abba"
 */

export function makeABBA(A, B) {
/* took me a few tries to get it right. I didn't realize it was forwards then backwards! shoulda known from ABBA
*/
  return A.concat( B, B, A)
}

/**
 * Returns a string of the form short+long+short, with the shorter string
 * on the outside and the longer string on the inside.
 *
 * You may assume that the strings will have different lengths.
 *
 * @param {string} str1 - First string.
 * @param {string} str2 - Second string.
 * @returns {string} The combined short-long-short string.
 *
 * @example
 * makeSLS("Hi", "Hello"); // "HiHelloHi"
 * @example
 * makeSLS("Puppy", "Dog"); // "DogPuppyDog"
 * @example
 * makeSLS("a", "abc"); // "aabca"
 */
export function makeSLS(str1, str2) {
/* writing a function to assess string lengths and the concatenate accordingly
*/
    if (str1.length < str2.length) {
      return str1.concat( str2, str1)
    } else {
      return str2.concat( str1, str2)
    }
}

/**
 * You and your date are trying to get into an exclusive club.
 * If either of you is very stylish (8 or more), the result is 2 (yes).
 * With the exception that if either of you has style 2 or less, the result is 0 (no).
 * Otherwise, the result is 1 (maybe).
 *
 * @param {number} you - Your style rating from 0 to 10.
 * @param {number} date - Your date's style rating from 0 to 10.
 * @returns {number} 0 for no, 1 for maybe, 2 for yes.
 *
 * @example
 * canEnterClub(9, 5); // 2
 * @example
 * canEnterClub(1, 10); // 0
 * @example
 * canEnterClub(5, 5); // 1
 */
export function canEnterClub(you, date) {
/* okay so for this one we needed to see if either myself or my date was good enough to get into a club I myself would never go to in the first place. If I am hotter or my date is  than an 8 or a 2 then we get in. If one us is below a 2 then no, otherwise maybe. I say we leave and go get tacos my friend.
*/
   if (you >= 8 || you > 2 || date >= 8 || date > 2 ) {
    return 2
   } else if (you >= 8 || you < 2 || date >= 8 || date < 2 ) {
      return 0
   } else {
    return 1
   }
}

/**
 * Your phone rings. Normally you answer, except:
 * - In the morning, you only answer if it is your boss calling.
 * - If you are asleep, you do not answer at all.
 *
 * @param {boolean} isMorning - True if it is morning.
 * @param {boolean} isBoss - True if the caller is your boss.
 * @param {boolean} isAsleep - True if you are asleep.
 * @returns {boolean} True if you should answer the phone, otherwise false.
 *
 * @example
 * shouldAnswerPhone(false, false, false); // true
 * @example
 * shouldAnswerPhone(true, false, false); // false
 * @example
 * shouldAnswerPhone(true, true, false); // true
 */
export function shouldAnswerPhone(isMorning, isBoss, isAsleep) {
/* I honestly thought no it can't be that simple but it actually was.
*/
   if (isMorning === true && isBoss === true && isAsleep === false) {
    return true
   } else {
    return false
   }
}
