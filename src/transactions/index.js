//var txr = [];

const transactions = ["notebook", "notebook", "mouse", "keyboard", "mouse"];

function processTransactions(transactions) {
  let transactionsArray = [];

  //count each item in the array and insert into transactionsArray
  for (const t of transactions) {
    transactionsArray[t] = (transactionsArray[t] || 0) + 1;
  }

  console.log(transactionsArray);

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

console.log(processTransactions(transactions));
