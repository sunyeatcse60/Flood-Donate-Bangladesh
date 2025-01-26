document.getElementById('btn-1').addEventListener('click', function(event){
    event.preventDefault();

    const inputAmount = parseInt(document.getElementById('input-amount').value); 
    let mainBalance = parseInt(document.getElementById('main-balance').innerText);

    if (inputAmount > 0 && inputAmount <= mainBalance) {

        const donationMainBalance = parseInt(document.getElementById('donation-balance').innerText); 

        const newDonationBalance = donationMainBalance + inputAmount;
        document.getElementById('donation-balance').innerText = newDonationBalance;

        
        const newMainBalance = mainBalance - inputAmount;
        document.getElementById('main-balance').innerText = newMainBalance;

        alert('Successfully Add your Donation!')

        // console.log('Updated Donation Balance:', newDonationBalance);
        // console.log('Updated Main Balance:', newMainBalance);

        const donationHistory = document.getElementById('donation-history');
        const donationDate = new Date().toLocaleString();

        const historyItem = document.createElement('div');
        historyItem.classList.add(
            'p-4',
            'border',
            'rounded-lg',
            'bg-gray-100',
            'shadow-sm',
            'mb-4'
        );
        historyItem.innerHTML = `
            <h3 class="text-lg font-bold text-gray-800">
                ${inputAmount} Taka is Donate for Flood at Noakhali, Bangladesh
            </h3>
            <p class="text-gray-600">Date: ${donationDate}</p>
        `;
        donationHistory.appendChild(historyItem);

        // const donationHistory = document.getElementById('donation-history');
        // const donationDate = new Date().toLocaleString();
        // const historyItem = document.createElement('li');
        // historyItem.className = "mb-2 p-2 border-b border-gray-300";
        // historyItem.textContent = `Donated: ${inputAmount} BDT on ${donationDate}`;
        // donationHistory.appendChild(historyItem);


    } 
    
    else {
        alert('Invalid donation amount or insufficient balance');
    }
});