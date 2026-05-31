if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(){

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;

    const transaction = {
        title,
        amount,
        type
    };

    transactions.push(transaction);

    localStorage.setItem("transactions",
    JSON.stringify(transactions));

    showTransactions();
}

function showTransactions(){

    const historyList =
    document.getElementById("historyList");

    historyList.innerHTML = "";

    transactions.forEach((t) => {

        const li = document.createElement("li");

        li.innerHTML =
        `${t.title} - $${t.amount} (${t.type})`;

        historyList.appendChild(li);

    });
}

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";
}

showTransactions();

const ctx =
document.getElementById("expenseChart");

new Chart(ctx, {
    type:'line',
    data:{
        labels:['Mon','Tue','Wed','Thu','Fri'],
        datasets:[{
            label:'Expenses',
            data:[500,700,400,900,650],
            borderWidth:3
        }]
    }
});
