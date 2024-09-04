// Define vacation data
const vacationData = [
    {
        type: 'Annual Vacation',
        dateFrom: '2024-01-15',
        dateTo: '2024-01-30',
        duration: '15 Days',
        approvedBy: 'John Doe'
    },
    {
        type: 'Sick Vacation',
        dateFrom: '2024-05-10',
        dateTo: '2024-05-20',
        duration: '10 Days',
        approvedBy: 'Jane Smith'
    },
    {
        type: 'Annual Vacation',
        dateFrom: '2024-09-01',
        dateTo: '2024-09-10',
        duration: '9 Days',
        approvedBy: 'Alex Johnson'
    },
    {
        type: 'Sick Vacation',
        dateFrom: '2024-08-15',
        dateTo: '2024-08-25',
        duration: '10 Days',
        approvedBy: 'Sarah Wilson'
    },
    {
        type: 'Non Paid Vacation',
        dateFrom: '2024-02-05',
        dateTo: '2024-02-20',
        duration: '15 Days',
        approvedBy: 'Michael Brown'
    },
    {
        type: 'Sick Vacation',
        dateFrom: '2024-06-10',
        dateTo: '2024-06-25',
        duration: '15 Days',
        approvedBy: 'Emily Davis'
    }
    // Add more vacation objects as needed
];

function createVacationCards(vacations) {
    return vacations.map(vacation => `
        <div class="col-md-3">
            <div class="card mb-3">
                <div class="card-body shadow" style="font-size: 12px;">
                    <h5 class="card-title fw-bold">${vacation.type}</h5>
                    <p class="card-text mb-1"><strong>Date From:</strong> ${vacation.dateFrom}</p>
                    <p class="card-text mb-1"><strong>Date To:</strong> ${vacation.dateTo}</p>
                    <p class="card-text mb-1"><strong>Duration:</strong> ${vacation.duration}</p>
                    <p class="card-text"><strong>Approved By:</strong> ${vacation.approvedBy}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function initVacationHistory() {
    const rowContainers = document.querySelectorAll('.row.mt-4');
    const firstRow = rowContainers[0];
    const secondRow = rowContainers[1];
    
    // Populate first row with the first 4 vacations
    firstRow.innerHTML = createVacationCards(vacationData.slice(0, 4));

    // Populate second row with the next 2 vacations
    secondRow.innerHTML = createVacationCards(vacationData.slice(4, 6)) + `
        <div class="d-flex mt-4 justify-content-end">
            <a href="#" class="text-success" style="font-size: 1.2rem; text-decoration: none;">View More ></a>
        </div>
    `;
}

// Initialize vacation history on page load
document.addEventListener('DOMContentLoaded', initVacationHistory);
