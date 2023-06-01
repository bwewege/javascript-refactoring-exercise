// var txr = [];

// function processTransactions(transactionArrayParam) {
//   let txr = [];

//   //   if (!validateTransactions(transActions)) {
//   //     throw new Error("Undefined collection of transactions");
//   //   }

//   if (transactionArrayParam === undefined)
//     throw new Error("Undefined collection of transactions");

//   let transactionsArray = [];

//   //const numberOfTransactions = transActions.length;

//   //   for (var i = 0; i < transActions.length; i++) {
//   //     //const transaction = transActions[i];
//   //     transactionsArray[transActions[i]]
//   //       ? (transactionsArray[transActions[i]] += 1)
//   //       : (transactionsArray[transActions[i]] = 1);
//   //   }

//   for (const transaction of transactionArrayParam) {
//     transactionsArray[transaction]
//       ? (transactionsArray[transaction] += 1)
//       : (transactionsArray[transaction] = 1);
//   }

//   let sortedTransactionArray = sortByAmountThenName(transactionsArray);

//   // Place them back in array for returning
//   Object.keys(sortedTransactionArray).forEach(function (key, index) {
//     txr[index] = `${key} ${sortedTransactionArray[key]}`;
//   });

//   return txr;
// }

// //  [ notebook: 2, mouse: 2, keyboard: 1 ]

// function sortByAmountThenName(transactionsArray) {
//   console.log(transactionsArray);
//   console.log(Object.keys(transactionsArray));
//   let sortedKeys = Object.keys(transactionsArray).sort((itemOne, itemTwo) => {
//     let a = transactionsArray[itemTwo] - transactionsArray[itemOne];
//     let b = itemOne > itemTwo;
//     let c = -(itemOne < itemTwo);

//     console.log(
//       transactionsArray[itemTwo] +
//         " - " +
//         transactionsArray[itemOne] +
//         " = " +
//         a
//     );
//     console.log(itemOne + " > " + itemTwo + " = " + b);
//     console.log("-(" + itemOne + " < " + itemTwo + ") = " + c);

//     return a || b || c;
//   });

//   let sortedResults = {};
//   for (let objectKey of sortedKeys) {
//     sortedResults[objectKey] = transactionsArray[objectKey];
//   }

//   return sortedResults;
// }

// // function validateTransactions(transactions) {
// //   if (transactions === undefined) {
// //     return false;
// //   }

// //   return true;
// // }

function processTransactions(transactions) {
  let transactionsArray = [];

  //count each item in the array and insert into transactionsArray
  for (const t of transactions) {
    transactionsArray[t] = (transactionsArray[t] || 0) + 1;
  }

  //break up array into array pairs within the array
  const transactionArrayPairs = Object.entries(transactionsArray);

  //sort the pairs by count and then alphabetically.
  transactionArrayPairs.sort((a, b) => {
    //sort by count descending
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    //If count is the same sort alpha
    return a[0].localeCompare(b[0]);
  });

  // convert the array pars into string objects for the final array.
  const sortedTransactions = transactionArrayPairs.map(
    ([item, count]) => `${item} ${count}`
  );

  return sortedTransactions;
}

module.exports = processTransactions;
