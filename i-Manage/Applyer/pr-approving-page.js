document.addEventListener('DOMContentLoaded', function() {
    const prPoData = [
        {
            prPoNumber: 'PR12345',
            companyName: 'IMI',
            vendorName: 'Vendor 123',
            budgetType: 'Capex',
            description: 'Purchase of new equipment',
            budgetNumber: 'B123',
            approvals: {
                budgetApprover: true,
                departmentApprover: true,
                cft1: false,
                cft2: false,
                topManagement: false
            }
        },
        {
            prPoNumber: 'PR12346',
            companyName: 'IEBCI',
            vendorName: 'Vendor 456',
            budgetType: 'Opex',
            description: 'Office supplies',
            budgetNumber: 'B456',
            approvals: {
                budgetApprover: true,
                departmentApprover: true,
                cft1: true,
                cft2: true,
                topManagement: true
            }
        },
        {
            prPoNumber: 'PR12346',
            companyName: 'IEBCI',
            vendorName: 'Vendor 456',
            budgetType: 'Opex',
            description: 'Office supplies',
            budgetNumber: 'B456',
            approvals: {
                budgetApprover: true,
                departmentApprover: true,
                cft1: true,
                cft2: true,
                topManagement: true
            }
        },
        {
            prPoNumber: 'PR12346',
            companyName: 'IEBCI',
            vendorName: 'Vendor 456',
            budgetType: 'Opex',
            description: 'Office supplies',
            budgetNumber: 'B456',
            approvals: {
                budgetApprover: true,
                departmentApprover: true,
                cft1: true,
                cft2: true,
                topManagement: true
            }
        },
        {
            prPoNumber: 'PR12346',
            companyName: 'IEBCI',
            vendorName: 'Vendor 456',
            budgetType: 'Opex',
            description: 'Office supplies',
            budgetNumber: 'B456',
            approvals: {
                budgetApprover: true,
                departmentApprover: true,
                cft1: true,
                cft2: true,
                topManagement: true
            }
        },
        {
            prPoNumber: 'PR12346',
            companyName: 'IEBCI',
            vendorName: 'Vendor 456',
            budgetType: 'Opex',
            description: 'Office supplies',
            budgetNumber: 'B456',
            approvals: {
                budgetApprover: true,
                departmentApprover: true,
                cft1: true,
                cft2: true,
                topManagement: true
            }
        },
        {
            prPoNumber: 'PR12346',
            companyName: 'IEBCI',
            vendorName: 'Vendor 456',
            budgetType: 'Opex',
            description: 'Office supplies',
            budgetNumber: 'B456',
            approvals: {
                budgetApprover: true,
                departmentApprover: true,
                cft1: true,
                cft2: true,
                topManagement: true
            }
        },
        {
            prPoNumber: 'PR12346',
            companyName: 'IEBCI',
            vendorName: 'Vendor 456',
            budgetType: 'Opex',
            description: 'Office supplies',
            budgetNumber: 'B456',
            approvals: {
                budgetApprover: true,
                departmentApprover: true,
                cft1: true,
                cft2: true,
                topManagement: true
            }
        }
    ];

    const statusTableBody = document.getElementById('status-table').getElementsByTagName('tbody')[0];

    prPoData.forEach(data => {
        const row = statusTableBody.insertRow();
        row.insertCell(0).textContent = data.prPoNumber;
        row.insertCell(1).textContent = data.companyName;
        row.insertCell(2).textContent = data.vendorName;
        row.insertCell(3).textContent = data.budgetType;
        row.insertCell(4).textContent = data.description;
        row.insertCell(5).textContent = data.budgetNumber;

        const budgetApproverCell = row.insertCell(6);
        budgetApproverCell.textContent = data.approvals.budgetApprover ? '✔️' : '❌';
        budgetApproverCell.className = data.approvals.budgetApprover ? 'approved' : 'not-approved';

        const departmentApproverCell = row.insertCell(7);
        departmentApproverCell.textContent = data.approvals.departmentApprover ? '✔️' : '❌';
        departmentApproverCell.className = data.approvals.departmentApprover ? 'approved' : 'not-approved';

        const cft1Cell = row.insertCell(8);
        cft1Cell.textContent = data.approvals.cft1 ? '✔️' : '❌';
        cft1Cell.className = data.approvals.cft1 ? 'approved' : 'not-approved';

        const cft2Cell = row.insertCell(9);
        cft2Cell.textContent = data.approvals.cft2 ? '✔️' : '❌';
        cft2Cell.className = data.approvals.cft2 ? 'approved' : 'not-approved';

        const topManagementCell = row.insertCell(10);
        topManagementCell.textContent = data.approvals.topManagement ? '✔️' : '❌';
        topManagementCell.className = data.approvals.topManagement ? 'approved' : 'not-approved';
    });
});
