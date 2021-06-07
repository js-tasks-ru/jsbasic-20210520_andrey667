function makeDiagonalRed(table) {
  
  for (let i = 0; i < table.rows.length; i++) {
    const redCells = table.rows[i];
    redCells.cells[i].style.backgroundColor = 'red';
  }

}
