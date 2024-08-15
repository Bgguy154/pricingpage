document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#data-table tbody');
    const toggle = document.getElementById('toggle');
    const body = document.body;

    // Sample data
    const data = [
        ["OpenAI", "GPT-3.5", "$0.002"],
        ["OpenAI", "GPT-4", "$0.03"],
        ["Together AI", "Liama-2-70b", "$0.0008"],
        ["Together AI", "Liama-2-13b", "$0.0006"],
    ];

    // Generate rows dynamically
    data.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });

    // Toggle light/dark mode
    toggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
    });
});
