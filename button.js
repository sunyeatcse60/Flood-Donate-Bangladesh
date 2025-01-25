

function toggleTab(tab) {
    // Buttons
    const donationTab = document.getElementById("donation-tab");
    const historyTab = document.getElementById("history-tab");

    // Sections
    const donationSection = document.getElementById("donation-section");
    const historySection = document.getElementById("history-section");

    // Toggle active state and styles
    if (tab === "donation") {
        donationTab.classList.remove("bg-gray-200", "text-gray-700");
        donationTab.classList.add("bg-green-500", "text-white");
        historyTab.classList.remove("bg-green-500", "text-white");
        historyTab.classList.add("bg-gray-200", "text-gray-700");

        donationSection.classList.remove("hidden");
        historySection.classList.add("hidden");
    } 
    else if (tab === "history") {
        historyTab.classList.remove("bg-gray-200", "text-gray-700");
        historyTab.classList.add("bg-green-500", "text-white");
        donationTab.classList.remove("bg-green-500", "text-white");
        donationTab.classList.add("bg-gray-200", "text-gray-700");

        historySection.classList.remove("hidden");
        donationSection.classList.add("hidden");
    }
}