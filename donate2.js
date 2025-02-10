// console.log('love you Bangladesh');

document.getElementById('btn-2').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('button clicked');
    const inputAmount2 = parseInt(document.getElementById('input-amount2').value);
    let mainBalance = parseInt(document.getElementById('main-balance').innerText);
    // console.log(inputAmount2, mainBalance);


    if (inputAmount2 > 0 && inputAmount2 <= mainBalance) {
        const donationMainBalance2 = parseInt(document.getElementById('donation-balance2').innerText);
        // console.log(donationMainBalance2);

        const newDonationBalance2 = donationMainBalance2 + inputAmount2;
        document.getElementById('donation-balance2').innerText = newDonationBalance2;


        const newMainBalance2 = mainBalance - inputAmount2;
        document.getElementById('main-balance').innerText = newMainBalance2;

        alert('Successfully Add your Donation!');



      
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
                ${inputAmount2} Taka is Donate for Flood Relif in Feni, Bangladesh
            </h3>
            <p class="text-gray-600">Date: ${donationDate}</p>
        `;

        donationHistory.appendChild(historyItem);

    }

    else {
        alert('Invalid donation amount or insufficient balance');
    }


});