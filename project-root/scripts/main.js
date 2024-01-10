document.addEventListener("DOMContentLoaded", function () {
    
    fetch('assets/data.json')
      .then(response => response.json())
      .then(data => {
        
        createTable(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
  function createTable(data) {
   
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
    table.id = 'example'; 
    table.classList.add('display','sortable','paginated');
    table.innerHTML = `<thead><tr><th>ID</th><th>Name</th><th>Age</th><th>City</th></tr></thead><tbody></tbody>`;
    const tbody = table.querySelector('tbody');
  
    
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.age}</td><td>${item.city}</td>`;
      tbody.appendChild(row);
    });
  
    tableContainer.appendChild(table);
  
   
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }
  

  
