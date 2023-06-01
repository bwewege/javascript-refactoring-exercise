function processTransactions(transactions) {
  let transactionsArray = [];

  for (const t of transactions) {
    transactionsArray[t] = (transactionsArray[t] || 0) + 1;
  }

  const transactionArrayPairs = Object.entries(transactionsArray);

  transactionArrayPairs.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    return a[0].localeCompare(b[0]);
  });

  const sortedTransactions = transactionArrayPairs.map(
    ([item, count]) => `${item} ${count}`
  );

  return sortedTransactions;
}

module.exports = processTransactions;
