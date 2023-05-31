//var txr = [];

function processTransactions(transactionArrayParam) {
  let txr = [];

  //   if (!validateTransactions(transActions)) {
  //     throw new Error("Undefined collection of transactions");
  //   }

  if (transactionArrayParam === undefined)
    throw new Error("Undefined collection of transactions");

  let transactionsArray = [];

  //const numberOfTransactions = transActions.length;

  //   for (var i = 0; i < transActions.length; i++) {
  //     //const transaction = transActions[i];
  //     transactionsArray[transActions[i]]
  //       ? (transactionsArray[transActions[i]] += 1)
  //       : (transactionsArray[transActions[i]] = 1);
  //   }

  for (const transaction of transactionArrayParam) {
    transactionsArray[transaction]
      ? (transactionsArray[transaction] += 1)
      : (transactionsArray[transaction] = 1);
  }

  let sortedTransactionArray = sortByAmountThenName(transactionsArray);

  // Place them back in array for returning
  Object.keys(sortedTransactionArray).forEach(function (key, index) {
    txr[index] = `${key} ${sortedTransactionArray[key]}`;
  });

  return txr;
}

//  [ notebook: 2, mouse: 2, keyboard: 1 ]

function sortByAmountThenName(transactionsArray) {
  console.log(transactionsArray);
  console.log(Object.keys(transactionsArray));
  let sortedKeys = Object.keys(transactionsArray).sort((itemOne, itemTwo) => {
    console.log("ItemOne:" + itemOne);
    console.log("ItemTwo:" + itemTwo);
    console.log("transactionsArray[itemOne]:" + transactionsArray[itemOne]);
    console.log("transactionsArray[itemTwo]:" + transactionsArray[itemTwo]);
    let a = transactionsArray[itemTwo] - transactionsArray[itemOne];
    let b = itemOne > itemTwo;
    let c = -(itemOne < itemTwo);

    return a || b || c;
  });

  let sortedResults = {};
  for (let objectKey of sortedKeys) {
    sortedResults[objectKey] = transactionsArray[objectKey];
  }

  return sortedResults;
}

// function validateTransactions(transactions) {
//   if (transactions === undefined) {
//     return false;
//   }

//   return true;
// }

module.exports = processTransactions;
