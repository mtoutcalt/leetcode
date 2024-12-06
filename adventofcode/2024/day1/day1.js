const fs = require('fs');

function totalDistanceBetweenLists(leftList, rightList) {
  if (leftList.length !== rightList.length) {
    throw new Error("Lists must be of the same length.");
  }

  const sortedLeft = leftList.slice().sort((a, b) => a - b);  //slice does a shallow copy then sort in asc 
  const sortedRight = rightList.slice().sort((a, b) => a - b);  //if a-b is negative, then a comes before b

  let totalDistance = 0;
  for (let i = 0; i < sortedLeft.length; i++) {
    totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
  }

  return totalDistance;
}

// Read the entire file (synchronous read for simplicity)
const data = fs.readFileSync('input.txt', 'utf8');

const leftList = [];
const rightList = [];

data.trim().split('\n').forEach(line => {
  // Split by whitespace to separate the two columns
  const [leftVal, rightVal] = line.trim().split(/\s+/);
  leftList.push(Number(leftVal));
  rightList.push(Number(rightVal));
});

const answer = totalDistanceBetweenLists(leftList, rightList);
console.log("Total Distance:", answer);

