export default function calculateWinner(
  columns: number,
  rows: number,
  circles: any[][]
) {
  // check for vertical win
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      if (circles[c][r]) {
        if (
          circles[c][r] === circles[c][r + 1] &&
          circles[c][r + 1] === circles[c][r + 2] &&
          circles[c][r + 2] === circles[c][r + 3]
        ) {
          return circles[c][r];
        }
      }
    }
  }

  // check for horizontal win
  for (let c = 0; c < columns - 3; c++) {
    for (let r = 0; r < rows; r++) {
      if (circles[c][r]) {
        if (
          circles[c][r] === circles[c + 1][r] &&
          circles[c + 1][r] === circles[c + 2][r] &&
          circles[c + 2][r] === circles[c + 3][r]
        ) {
          return circles[c][r];
        }
      }
    }
  }

  // check for diagnol descending (↘) win
  for (let c = 0; c < columns - 3; c++) {
    for (let r = 0; r < rows - 3; r++) {
      if (circles[c][r]) {
        if (
          circles[c][r] === circles[c + 1][r + 1] &&
          circles[c + 1][r + 1] === circles[c + 2][r + 2] &&
          circles[c + 2][r + 2] === circles[c + 3][r + 3]
        ) {
          return circles[c][r];
        }
      }
    }
  }

  // check for diagnol ascending (↗) win
  for (let c = 0; c < columns - 3; c++) {
    for (let r = 3; r < rows; r++) {
      if (circles[c][r]) {
        if (
          circles[c][r] === circles[c + 1][r - 1] &&
          circles[c + 1][r - 1] === circles[c + 2][r - 2] &&
          circles[c + 2][r - 2] === circles[c + 3][r - 3]
        ) {
          return circles[c][r];
        }
      }
    }
  }
}
