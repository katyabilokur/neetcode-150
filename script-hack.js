//-----  -----
//----- Hackerrank: Ice Cream Parlor -----
//-----  -----

// //Expected 1, 4
// const m = 4;
// const arr = [1, 4, 5, 3, 2];

// //Expected 1, 2
// const m1 = 4;
// const arr1 = [2, 2, 4, 3];

// function icecreamParlor(m, arr) {
//   let arrToCompare = [...arr];
//   arrToCompare.shift();
//   let indexesRemoved = 1;

//   for (let i = 0; i < arr.length; i++) {
//     const secondIceCream = arrToCompare.indexOf(m - arr[i]);

//     if (secondIceCream !== -1) {
//       return [i + 1, indexesRemoved + secondIceCream + 1];
//     }
//     indexesRemoved++;
//     arrToCompare.shift();
//   }

//   return [0, 0];
// }

// console.log(icecreamParlor(m1, arr1));

//-----  -----
//----- Hackerrank: Queue using Two Stacks -----
//-----  -----

//   1 x: Enqueue element  into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.

// function processData(input) {
//   let queue = [];

//   const inputData = input.split(/\r?\n/);
//   inputData.forEach((line) => {
//     const lineInput = line.split(" ");

//     if (+lineInput[0] === 1) {
//       queue.push(lineInput[1]);
//     }

//     if (+lineInput[0] === 2) {
//       queue.shift();
//     }

//     if (+lineInput[0] === 3) {
//       console.log(queue[0]);
//     }
//   });
// }

//-----  -----
//----- Hackerrank: Waiter -----
//-----  -----

// // 4 6 3 7 5
// const number = [3, 4, 7, 6, 5];
// const q = 1;

// //expected 2 4 6 3 5 7
// const number1 = [2, 3, 4, 5, 6, 7];
// const q1 = 3;

// function waiter(number, q) {
//   function getPrimes(n) {
//     const primes = [];
//     for (let num = 2; primes.length < n; num++) {
//       if (primes.every((p) => num % p !== 0)) primes.push(num);
//     }
//     return primes;
//   }

//   const primes = getPrimes(q);
//   let workingArr = [...number];
//   let A = [];
//   let B = [];
//   let answers = [];

//   for (let i = 0; i < q; i++) {
//     //Do initial sorting
//     while (workingArr.length > 0) {
//       const lastElement = workingArr.pop();
//       if (lastElement % primes[i] === 0) {
//         B.push(lastElement);
//       } else {
//         A.push(lastElement);
//       }
//     }

//     //Push B-th to 'answers' array
//     while (B.length > 0) {
//       answers.push(B.pop());
//     }

//     workingArr = [...A];
//     A = [];
//   }

//   //Push all remaining A-th (workingArr) to 'answers' array
//   while (workingArr.length > 0) {
//     answers.push(workingArr.pop());
//   }

//   return answers;
// }

// console.log(waiter(number1, q1));

//-----  -----
//----- Hackerrank: Simple Text Editor -----
//-----  -----

// 1. append - Append string to the end of .
// 3. delete - Delete the last characters of .
// 4. print - Print the  character of .
// 5. undo - Undo the last (not previously undone) operation of type  or , reverting  to the state it was in prior to that operation.

const input = `1 abcde
1 fg
3 6
2 5
4
3 7
4
3 4`;

const input1 = `1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`;

function processData(input) {
  let s = [];
  let operations = [];

  const inputData = input.split(/\r?\n/);
  inputData.forEach((line) => {
    const lineInput = line.split(" ");

    //Append
    if (+lineInput[0] === 1) {
      operations.push(line);
      for (const char of lineInput[1]) {
        s.push(char);
      }
    }

    //Delete last N characters
    if (+lineInput[0] === 2) {
      let deletedValues = [];
      for (let i = 0; i < +lineInput[1]; i++) {
        deletedValues.unshift(s.pop());
      }

      operations.push(`${line} ${deletedValues.join("")}`);
    }

    //Print the character of an index
    if (+lineInput[0] === 3) {
      console.log(s[+lineInput[1] - 1]);
    }
    //Undo previous action
    if (+lineInput[0] === 4) {
      const action = operations.pop();
      const actionArg = action.split(" ");

      //If action was to delete, add back
      if (+actionArg[0] === 2) {
        for (const char of actionArg[2]) {
          s.push(char);
        }
      }

      //If action was to add, delete
      if (+actionArg[0] === 1) {
        for (let i = 0; i < actionArg[1].length; i++) {
          s.pop();
        }
      }
    }
  });
}

processData(input1);
