function highlight(table) {
  let rows = table.querySelectorAll('tr');

  for (let tr of rows) {
    for (let td of tr.children) {
      
      if (td.dataset.available === "true")  {
        tr.classList.add('available')
      } else if (td.dataset.available === "false") {
        tr.classList.add('unavailable')
      } else if (!td.dataset.available) {
        td.parentElement.hidden = true
      }

      if (td.innerHTML === "m") {
        tr.classList.add('male')
      } else if (td.innerHTML === "f") {
        tr.classList.add('female')
      }

      if (td.innerHTML < 18) {
        tr.style = "text-decoration: line-through"
      }

    }
  }

}
