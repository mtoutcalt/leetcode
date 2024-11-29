```
let seats = [
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0],
];

function reserveFirstAvailableSeat(seats) {
  rows: for (let i = 0; i < seats.length; i++) {
    columns: for (let j = 0; j < seats[i].length; j++) {
      if (seats[i][j] === 0) {
        seats[i][j] = 1; // Reserve the seat
        console.log(`Reserved seat at row ${i + 1}, column ${j + 1}`);
        break rows;
      }
    }
  }
}

reserveFirstAvailableSeat(seats);
```

* Without labels, break statement only breaks out of inner loop
* labels can be used for 'break' and 'continue'