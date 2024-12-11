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

// const input = `1 abcde
// 1 fg
// 3 6
// 2 5
// 4
// 3 7
// 4
// 3 4`;

// const input1 = `1 abc
// 3 3
// 2 3
// 1 xy
// 3 2
// 4
// 4
// 3 1`;

// function processData(input) {
//   let s = [];
//   let operations = [];

//   const inputData = input.split(/\r?\n/);
//   inputData.forEach((line) => {
//     const lineInput = line.split(" ");

//     //Append
//     if (+lineInput[0] === 1) {
//       operations.push(line);
//       for (const char of lineInput[1]) {
//         s.push(char);
//       }
//     }

//     //Delete last N characters
//     if (+lineInput[0] === 2) {
//       let deletedValues = [];
//       for (let i = 0; i < +lineInput[1]; i++) {
//         deletedValues.unshift(s.pop());
//       }

//       operations.push(`${line} ${deletedValues.join("")}`);
//     }

//     //Print the character of an index
//     if (+lineInput[0] === 3) {
//       console.log(s[+lineInput[1] - 1]);
//     }
//     //Undo previous action
//     if (+lineInput[0] === 4) {
//       const action = operations.pop();
//       const actionArg = action.split(" ");

//       //If action was to delete, add back
//       if (+actionArg[0] === 2) {
//         for (const char of actionArg[2]) {
//           s.push(char);
//         }
//       }

//       //If action was to add, delete
//       if (+actionArg[0] === 1) {
//         for (let i = 0; i < actionArg[1].length; i++) {
//           s.pop();
//         }
//       }
//     }
//   });
// }

// processData(input1);

//-----  -----
//----- Hackerrank: Equal Stacks -----
//-----  -----

//expected 2
// const h1 = [1, 2, 1, 1];
// const h2 = [1, 2];
// const h3 = [1, 1];

//expected 5
// const h1 = [3, 2, 1, 1, 1];
// const h2 = [4, 3, 2];
// const h3 = [1, 1, 4, 1];

//expected 0
// const h1 = [1, 1, 1, 1, 2];
// const h2 = [3, 7];
// const h3 = [1, 3, 1];

// function equalStacks(h1, h2, h3) {
//   function sum(arr) {
//     return arr.reduce((cur, sum) => cur + sum, 0);
//   }
//   let sums = [sum(h1), sum(h2), sum(h3)];
//   let piles = [[...h1], [...h2], [...h3]];

//   while ([...new Set(sums)].length > 1) {
//     if (Math.min(...sums) === 0) {
//       sums[0] = 0;
//       break;
//     }

//     const highestPile = Math.max(...sums);
//     const pileIndex = sums.indexOf(highestPile);

//     sums[pileIndex] = sums[pileIndex] - piles[pileIndex].shift();
//   }

//   return sums[0];
// }

// console.log(equalStacks(h1, h2, h3));

//-----  -----
//----- Hackerrank: Jesse and Cookies -----
//-----  -----

//HEAP JS implementation
//min heap is verified It works
class MinHeap {
  constructor() {
    this.store = [];
  }

  size() {
    return this.store.length;
  }

  front() {
    return this.store[0];
  }

  secondFront() {
    if (this.size() < 2) return null;
    const left = 1;
    const right = 2;
    if (right < this.size()) {
      return Math.max(this.store[left], this.store[right]);
    }
    return this.store[left];
  }

  enqueue(el) {
    this.store.push(el);
    this._heapifyUp();
  }

  dequeue() {
    const min = this.store[0];
    const last = this.store.pop();
    if (this.size() > 0) {
      this.store[0] = last;
      this._heapifyDown();
    }
    return min;
  }

  delete(el) {
    const idx = this.store.indexOf(el);
    if (idx === -1) return false; // Element not found

    const last = this.store.pop();
    if (idx < this.size()) {
      this.store[idx] = last;
      this._heapifyDown(idx);
      this._heapifyUp(idx);
    }
    return true;
  }

  _heapifyUp(startIdx = this.size() - 1) {
    let idx = startIdx;
    while (idx > 0) {
      const parentIdx = (idx - 1) >> 1; // Faster division
      if (this.store[idx] >= this.store[parentIdx]) break;
      [this.store[idx], this.store[parentIdx]] = [
        this.store[parentIdx],
        this.store[idx],
      ];
      idx = parentIdx;
    }
  }

  _heapifyDown(startIdx = 0) {
    let idx = startIdx;
    const size = this.size();

    while (true) {
      const left = (idx << 1) + 1; // 2 * idx + 1
      const right = left + 1; // 2 * idx + 2
      let smallest = idx;

      if (left < size && this.store[left] < this.store[smallest]) {
        smallest = left;
      }
      if (right < size && this.store[right] < this.store[smallest]) {
        smallest = right;
      }
      if (smallest === idx) break;

      [this.store[idx], this.store[smallest]] = [
        this.store[smallest],
        this.store[idx],
      ];
      idx = smallest;
    }
  }
}

//NOTE: Max heap is not verified. Min is working
// class MaxHeap {
//   constructor() {
//     this.store = [];
//   }

//   size() {
//     return this.store.length;
//   }

//   front() {
//     return this.store[0];
//   }

//   enqueue(el) {
//     this.store.push(el);
//     this._heapifyUp();
//   }

//   dequeue() {
//     const max = this.store[0];
//     const last = this.store.pop();
//     if (this.size() > 0) {
//       this.store[0] = last;
//       this._heapifyDown();
//     }
//     return max;
//   }

//   delete(el) {
//     const idx = this.store.indexOf(el);
//     if (idx === -1) return false; // Element not found

//     const last = this.store.pop();
//     if (idx < this.size()) {
//       this.store[idx] = last;
//       this._heapifyDown(idx);
//       this._heapifyUp(idx);
//     }
//     return true;
//   }

//   _heapifyUp(startIdx = this.size() - 1) {
//     let idx = startIdx;
//     while (idx > 0) {
//       const parentIdx = (idx - 1) >> 1; // Faster division
//       if (this.store[idx] <= this.store[parentIdx]) break;
//       [this.store[idx], this.store[parentIdx]] = [
//         this.store[parentIdx],
//         this.store[idx],
//       ];
//       idx = parentIdx;
//     }
//   }

//   _heapifyDown(startIdx = 0) {
//     let idx = startIdx;
//     const size = this.size();

//     while (true) {
//       const left = (idx << 1) + 1; // 2 * idx + 1
//       const right = left + 1; // 2 * idx + 2
//       let largest = idx;

//       if (left < size && this.store[left] > this.store[largest]) {
//         largest = left;
//       }
//       if (right < size && this.store[right] > this.store[largest]) {
//         largest = right;
//       }
//       if (largest === idx) break;

//       [this.store[idx], this.store[largest]] = [
//         this.store[largest],
//         this.store[idx],
//       ];
//       idx = largest;
//     }
//   }
// }

// const k = 9;
// const A = [2, 7, 3, 6, 4, 6];

// const k1 = 10;
// const A1 = [1, 1, 1];

// function cookies(k, A) {
//   let count = 0;
//   let minHeap = new MinHeap();
//   let minTemp = null;

//   A.forEach((element) => {
//     minHeap.enqueue(element);
//   });

//   while (minHeap.front() < k && minHeap.size() > 1) {
//     // console.log(minHeap.data);
//     const cookie1 = minHeap.dequeue();
//     const cookie2 = minHeap.dequeue();
//     // console.log(`Mix: ${cookie1} and ${cookie2}`);

//     const newValue = cookie1 + 2 * cookie2;
//     if (newValue < k) {
//       minHeap.enqueue(newValue);
//     } else {
//       minTemp = minTemp === null ? newValue : Math.min(minTemp, newValue);
//     }

//     count++;
//   }

//   if (minHeap.size() === 0 || minHeap.front() >= k) return count;

//   if (minHeap.size() === 1 && minTemp === null) return -1;

//   //calculate a last edge case. minHeap has one element that is < k
//   const lastEl =
//     minHeap.front() < minTemp
//       ? minHeap.front() + 2 * minTemp
//       : minTemp + 2 * minHeap.front();
//   if (lastEl >= k) return ++count;

//   return -1;

//   // return minHeap.front() >= k ? count : -1;
// }

// // console.log(cookies(k, A));
// console.log(cookies(k1, A1));

//-----  -----
//----- Hackerrank: QHEAP1 -----
//-----  -----

// const input = `1 4
// 1 9
// 3
// 2 4
// 3`;

// const input1 = `
// 1 10
// 1 9
// 3
// 1 3
// 3
// 2 9
// 3
// 2 3
// 3
// 1 5
// 1 2
// 3`;

// function processData(input) {
//   let heap = new MinHeap();

//   const inputData = input.split(/\r?\n/);
//   inputData.forEach((line) => {
//     const lineInput = line.split(" ");

//     if (+lineInput[0] === 1) heap.enqueue(+lineInput[1]);
//     if (+lineInput[0] === 2) heap.delete(+lineInput[1]);
//     if (+lineInput[0] === 3) console.log(heap.front());
//   });
// }

// processData(input1);

//TEST 1 Visit all petrolium stations (solution 1 has a bug)
// const petrolpumps = [
//   [1, 5],
//   [10, 3],
//   [3, 4],
// ];

// function truckTour(petrolpumps) {
//   const pumps = [...petrolpumps];
//   const tryNumbers = pumps.length;

//   for (let k = 0; k < tryNumbers; k++) {
//     let petrol = 0;

//     for (let i = 0; i < pumps.length - 1; i++) {
//       petrol += pumps[i][0];

//       if (petrol >= pumps[i][1]) {
//         petrol -= pumps[i][1];
//         petrol += pumps[i + 1][1];
//       } else break;

//       if (i === pumps.length - 2) return k;
//     }

//     const temp = pumps.shift();
//     pumps.push(temp);
//   }

//   return -1;
// }

//WORKING
// function truckTour(petrolpumps) {

//   for (let i = 0; i < petrolpumps.length; i++) {
//     if (petrolpumps[i][0] < petrolpumps[i][1]) continue;

//     let tank = 0;
//     let position = i;
//     let pumpCount = 0;

//     while (true) {
//       if (pumpCount === size) return i;
//       if (tank < 0) break;

//       tank += petrolpumps[position % petrolpumps.length][0] - petrolpumps[position % petrolpumps.length][1];

//       position++;
//       pumpCount++;
//     }
//   }

//   return -1;
// }

//console.log(truckTour(petrolpumps));

//expected 3
// const arr = [1, 2, 3, 4];
// const k = 1;

// function pairs(k, arr) {
//   let res = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (Math.abs(arr[i] - arr[j]) === k) res++;
//     }
//   }
//   return res;
// }

// console.log(pairs(k, arr));

//BigInt sorting
// const unsorted = ["1", "200", "150", "3"];

// function bigSorting(unsorted) {
//   let nums = [];
//   let res = [];

//   unsorted.forEach((el) => {
//     nums.push(BigInt(el));
//   });

//   nums.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

//   nums.forEach((el) => {
//     res.push(el.toString());
//   });

//   return res;
// }

// console.log(bigSorting(unsorted));

//-----  -----
//----- Hackerrank: Hackerland Radio Transmitters -----
//-----  -----

//expected 3
const k = 1;
const x = [1, 2, 3, 4, 5, 9];

//expected 2
const k1 = 1;
const x1 = [1, 2, 3, 4, 5];

//expected 3
const k2 = 2;
const x2 = [7, 2, 4, 6, 5, 9, 12, 11];

function hackerlandRadioTransmitters(x, k) {
  //Define the Lane/street length
  const uniqueHouses = [...new Set(x)];
  const houseLaneLenght = Math.max(...uniqueHouses);
  let transmitters = 0;

  //Create the initial street with houses setup.
  //0: no house
  //1: there is one or more houses
  let lane = new Array(houseLaneLenght - 1).fill(0);
  uniqueHouses.forEach((house) => {
    lane[house - 1] = 1;
  });

  let curPositionI = 0;
  while (curPositionI < lane.length) {
    //1. Find a first house to be covered
    let firstHouseI = null;
    for (let i = curPositionI; i < lane.length; i++) {
      if (lane[i] === 1) {
        firstHouseI = i;
        break;
      }
    }
    //2. Find a nearest further house to put the transmitter
    for (
      let i = Math.min(firstHouseI + k, lane.length - 1);
      i >= firstHouseI;
      i--
    ) {
      if (lane[i] === 1) {
        transmitters++; //House to set a transmitter is defined. Update number of them
        curPositionI = i + k + 1;
        break;
      }
    }
  }
  return transmitters;
}

console.log(hackerlandRadioTransmitters(x, k));
console.log(hackerlandRadioTransmitters(x1, k1));
console.log(hackerlandRadioTransmitters(x2, k2));
