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

        // console.log('Updated Donation Balance:', newDonationBalance);
        // console.log('Updated Main Balance:', newMainBalance);

        const donationHistory = document.getElementById('donation-history');
        const donationDate = new Date().toLocaleString();
        const historyItem = document.createElement('li');
        historyItem.textContent = `Donated: ${inputAmount} on ${donationDate}`;
        donationHistory.appendChild(historyItem);
    } 
    
    else {
        alert('Invalid donation amount or insufficient balance');
    }
});