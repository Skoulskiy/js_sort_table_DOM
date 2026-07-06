'use strict';

// write code here
const headers = document.querySelector('thead');

headers.querySelectorAll('th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    sortTableByHeader(table, header.textContent.toLowerCase());
  });
})

function sortTableByHeader(table, name) {
  const tbody = table.querySelector('tbody');
  if(name === 'name') {
    tbody.append(...Array.from(tbody.querySelectorAll('tr')).sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent)));
  }
  if(name === 'position') {
    tbody.append(...Array.from(tbody.querySelectorAll('tr')).sort((a, b) => a.cells[1].textContent.localeCompare(b.cells[1].textContent)));
  }
  if(name === 'age') {
    tbody.append(...Array.from(tbody.querySelectorAll('tr')).sort((a, b) => a.cells[2].textContent - b.cells[2].textContent));
  }
  if(name === 'salary') {
    tbody.append(...Array.from(tbody.querySelectorAll('tr')).sort((a, b) => Number(a.cells[3].textContent.replace(/[^0-9.-]+/g,"")) - Number(b.cells[3].textContent.replace(/[^0-9.-]+/g,""))));
  }
}