/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
  if (numbers.length == 0) {
    return numbers;
  }
  const firstArray: number[] = [numbers[0]];
  const secondArray: number[] = [...firstArray, numbers[numbers.length - 1]];
  return secondArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
  const tripled = numbers.map((num: number): number => num * 3);
  return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
  const result: number[] = numbers.map((num: string): number =>
    Number(num) ? Number(num) : 0,
  );
  return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
  const first: string[] = amounts.map((str: string): string =>
    str[0] == "$" ? str.slice(1) : str,
  );
  const result: number[] = first.map((num: string): number =>
    Number(num) ? Number(num) : 0,
  );
  return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
  const upperCase = messages.map((message: string): string =>
    message[message.length - 1] == "!" ? message.toUpperCase() : message,
  );
  const removeQ = upperCase.filter(
    (message: string): boolean => message[message.length - 1] != "?",
  );
  return removeQ;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
  const lessThanFour = words.filter((word: string): boolean => word.length < 4);
  return lessThanFour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
  if (colors.length == 0) {
    return true;
  }
  const onlyRGB = colors.filter(
    (color: string): boolean =>
      color == "red" || color == "blue" || color == "green",
  );
  return onlyRGB.length == colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
  let add: string = "";
  const sum = addends.reduce(
    (currentTotal: number, num: number): number => currentTotal + num,
    0,
  );
  if (addends.length != 0) {
    add = addends.join("+");
  }
  if (addends.length == 0) {
    add = "0";
  }

  return `${sum}=` + add;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
  const firstNegative: number = values.findIndex(
    (value: number): boolean => value < 0,
  );
  if (firstNegative == -1) {
    const sum = values.reduce(
      (currentTotal: number, num: number): number => currentTotal + num,
      0,
    );
    const result: number[] = [...values, sum];
    return result;
  } else {
    let num: number = 0;
    for (let i = 0; i < firstNegative; i += 1) {
      num += values[i];
    }
    const result: number[] = [...values];
    result.splice(firstNegative + 1, 0, num);
    return result;
  }
}
