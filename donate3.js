
document.getElementById('btn-3').addEventListener('click', function (event) {
    event.preventDefault();
   
    const inputAmount3 = parseInt(document.getElementById('input-amount3').value);
    let mainBalance = parseInt(document.getElementById('main-balance').innerText);


    if (inputAmount3 > 0 && inputAmount3 <= mainBalance) {
        const donationMainBalance3 = parseInt(document.getElementById('donation-balance3').innerText);
      

        const newDonationBalance3 = donationMainBalance3 + inputAmount3;
        document.getElementById('donation-balance3').innerText = newDonationBalance3;


        const newMainBalance3 = mainBalance - inputAmount3;
        document.getElementById('main-balance').innerText = newMainBalance3;

        alert('Successfully Add your Donation!');



        // const donationHistory = document.getElementById('donation-history3');
        // const donationDate = new Date().toLocaleString();

        // const historyItem = document.createElement('div');
        // historyItem.classList.add(
        //     'p-4',
        //     'border',
        //     'rounded-lg',
        //     'bg-gray-100',
        //     'shadow-sm',
        //     'mb-4'
        // );
        // historyItem.innerHTML = `
        //     <h3 class="text-lg font-bold text-gray-800">
        //         ${inputAmount3} Taka is Donate for Flood Relif in Feni, Bangladesh
        //     </h3>
        //     <p class="text-gray-600">Date: ${donationDate}</p>
        // `;

        // donationHistory.appendChild(historyItem);

    }

    else {
        alert('Invalid donation amount or insufficient balance');
    }


});