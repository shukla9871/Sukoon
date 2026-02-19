document.getElementById("connectWallet").addEventListener("click", async () => {
    alert("Wallet Connected (Demo Mode)");
});

document.getElementById("interactContract").addEventListener("click", async () => {
    document.getElementById("result").innerHTML = 
        "Smart Contract interaction simulated on Testnet!";
});

const modal = document.getElementById("walletModal");
const closeBtn = document.querySelector(".close");

document.getElementById("connectWallet").addEventListener("click", function() {
    modal.style.display = "block";
    document.getElementById("walletStatus").innerHTML =
        "Wallet Connected Successfully! <br> Network: Algorand Testnet";
});

document.getElementById("interactContract").addEventListener("click", function() {
    modal.style.display = "block";
    document.getElementById("walletStatus").innerHTML =
        "Smart Contract Interaction Successful! <br> App ID: 78546739";
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};