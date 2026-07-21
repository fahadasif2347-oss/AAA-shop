
// let stock = JSON.parse(localStorage.getItem("stock")) || [];
// let bill = [];

// /* ---------- DAILY SALES LOGIC ---------- */
// let today = new Date().toLocaleDateString();
// let savedDate = localStorage.getItem("saleDate");

// if (savedDate !== today) {
//     localStorage.setItem("saleDate", today);
//     localStorage.setItem("dailySales", JSON.stringify([]));
// }
// let dailySales = JSON.parse(localStorage.getItem("dailySales")) || [];

// /* ---------- SAVE FUNCTIONS ---------- */
// function saveStock() {
//     localStorage.setItem("stock", JSON.stringify(stock));
//     localStorage.setItem("dailySales", JSON.stringify(dailySales));
// }

// /* ---------- ADD STOCK ---------- */
// function addItem() {
//     let name = itemName.value;
//     let price = Number(itemPrice.value);
//     let qty = Number(itemQty.value);

//     let item = stock.find(i => i.name === name);

//     if (item) {
//         item.qty += qty;
//     } else {
//         stock.push({ name, price, qty });
//     }

//     saveStock();
//     displayStock();
// }

// /* ---------- ADD TO BILL ---------- */
// function addToBill() {
//     let name = billItem.value;
//     let qty = Number(billQty.value);

//     let item = stock.find(i => i.name === name);

//     if (!item || item.qty < qty) {
//         alert("Not enough stock!");
//         return;
//     }

//     let exist = bill.find(b => b.name === name);

//     if (exist) {
//         exist.qty += qty;
//     } else {
//         bill.push({ name, qty, price: item.price });
//     }

//     displayBill();
// }

// /* ---------- DISPLAY BILL ---------- */
// function displayBill() {
//     billTable.innerHTML = "";
//     let total = 0;

//     bill.forEach(item => {
//         let sum = item.qty * item.price;
//         total += sum;

//         billTable.innerHTML += `
//             <tr>
//                 <td>${item.name}</td>
//                 <td>${item.qty}</td>
//                 <td>${item.price}</td>
//                 <td>${sum}</td>
//             </tr>
//         `;
//     });

//     billTotal.innerText = total;
// }

// /* ---------- CONFIRM SALE ---------- */
// function confirmBill() {
//     bill.forEach(billItem => {
//         let stockItem = stock.find(s => s.name === billItem.name);
//         stockItem.qty -= billItem.qty;

//         // DAILY SALES UPDATE
//         let saleItem = dailySales.find(d => d.name === billItem.name);
//         if (saleItem) {
//             saleItem.qty += billItem.qty;
//         } else {
//             dailySales.push({ name: billItem.name, qty: billItem.qty });
//         }
//     });

//     bill = [];
//     saveStock();
//     displayStock();
//     displayBill();
//     displayDailySales();
//     alert("Sale completed!");
// }

// /* ---------- DISPLAY STOCK ---------- */
// function displayStock() {
//     stockTable.innerHTML = "";
//     stock.forEach(item => {
//         stockTable.innerHTML += `
//             <tr>
//                 <td>${item.name}</td>
//                 <td>${item.price}</td>
//                 <td>${item.qty}</td>
//             </tr>
//         `;
//     });
// }

// /* ---------- DISPLAY DAILY SALES ---------- */
// function displayDailySales() {
//     dailySalesList.innerHTML = "";
//     dailySales.forEach(item => {
//         dailySalesList.innerHTML += `
//             <li>${item.name} → Sold: ${item.qty}</li>

//         `;
//     });
// }

// /* ---------- INITIAL LOAD ---------- */
// displayStock();
// displayDailySales();
// function printReport() {
//     window.print();
// }
// function resetDailySales() {
//     if (confirm("Reset today's sales?")) {
//         dailySales = [];
//         dailyIncome = 0;
//         localStorage.setItem("dailySales", JSON.stringify([]));
//         localStorage.setItem("dailyIncome", 0);
//         displayDailySales();
//         document.getElementById("dailyIncome").innerText = 0;
//     }
// }
// function clearAllData() {
//     if (confirm("Delete everything?")) {
//         localStorage.clear();
//         location.reload();
//     }
// } 
// let stock = JSON.parse(localStorage.getItem("stock")) || [];
// let bill = [];

// /* ---------- DATE CHECK ---------- */
// let today = new Date().toLocaleDateString();
// let savedDate = localStorage.getItem("saleDate");

// if (savedDate !== today) {
//     localStorage.setItem("saleDate", today);
//     localStorage.setItem("dailySales", JSON.stringify([]));
// }

// let dailySales = JSON.parse(localStorage.getItem("dailySales")) || [];

// /* ---------- SAFE ELEMENT SELECT ---------- */
// const stockTable = document.getElementById("stockTable");
// const billTable = document.getElementById("billTable");
// const billTotal = document.getElementById("billTotal");
// const dailySalesList = document.getElementById("dailySalesList");
// const todayDate = document.getElementById("todayDate");

// /* ---------- DISPLAY STOCK ---------- */
// function displayStock() {
//     if (!stockTable) return;

//     stockTable.innerHTML = "";
//     stock.forEach(item => {
//         stockTable.innerHTML += `
//             <tr>
//                 <td>${item.name}</td>
//                 <td>${item.price}</td>
//                 <td>${item.qty}</td>
//             </tr>
//         `;
//     });
// }

// /* ---------- BILL ---------- */
// function addToBill() {
//     if (!billTable) return;

//     let name = document.getElementById("billItem").value;
//     let qty = Number(document.getElementById("billQty").value);

//     let item = stock.find(i => i.name === name);
//     if (!item || item.qty < qty) {
//         alert("Not enough stock");
//         return;
//     }

//     let exist = bill.find(b => b.name === name);
//     if (exist) exist.qty += qty;
//     else bill.push({ name, qty, price: item.price });

//     displayBill();
// }

// function displayBill() {
//     if (!billTable) return;

//     billTable.innerHTML = "";
//     let total = 0;

//     bill.forEach(item => {
//         let sum = item.qty * item.price;
//         total += sum;

//         billTable.innerHTML += `
//             <tr>
//                 <td>${item.name}</td>
//                 <td>${item.qty}</td>
//                 <td>${item.price}</td>
//                 <td>${sum}</td>
//             </tr>
//         `;
//     });

//     if (billTotal) billTotal.innerText = total;
// }

// function confirmBill() {
//     if (bill.length === 0) {
//         alert("Bill is empty");
//         return;
//     }

//     bill.forEach(b => {
//         let s = stock.find(i => i.name === b.name);
//         s.qty -= b.qty;

//         let sale = dailySales.find(d => d.name === b.name);
//         if (sale) sale.qty += b.qty;
//         else dailySales.push({ name: b.name, qty: b.qty });
//     });

//     localStorage.setItem("stock", JSON.stringify(stock));
//     localStorage.setItem("dailySales", JSON.stringify(dailySales));

//     bill = [];
//     displayBill();
//     displayDailySales();
//     alert("Sale completed");
// }

// /* ---------- DAILY SALES ---------- */
// function displayDailySales() {
//     if (!dailySalesList) return;

//     dailySalesList.innerHTML = "";
//     dailySales.forEach(item => {
//         dailySalesList.innerHTML += `<li>${item.name} → ${item.qty}</li>`;
//     });
// }

// function printReport() {
//     window.print();
// }

// function resetDailySales() {
//     if (!confirm("Reset today's sales?")) return;
//     dailySales = [];
//     localStorage.setItem("dailySales", JSON.stringify([]));
//     displayDailySales();
// }

// /* ---------- INIT ---------- */
// if (todayDate) todayDate.innerText = today;
// displayStock();
// displayDailySales();
/***********************
  GLOBAL DATA LOAD
************************/

let stock = JSON.parse(localStorage.getItem("stock"));
if (!Array.isArray(stock)) stock = [];

let bill = [];

let today = new Date().toLocaleDateString();
let savedDate = localStorage.getItem("saleDate");

/***********************
  DAILY RESET LOGIC
************************/
if (savedDate !== today) {
    localStorage.setItem("saleDate", today);
    localStorage.setItem("dailySales", JSON.stringify([]));
}

let dailySales = JSON.parse(localStorage.getItem("dailySales"));
if (!Array.isArray(dailySales)) dailySales = [];

/***********************
  SAFE ELEMENT SELECT
************************/
const stockTable = document.getElementById("stockTable");
const billTable = document.getElementById("billTable");
const billTotal = document.getElementById("billTotal");
const dailySalesList = document.getElementById("dailySalesList");
const todayDate = document.getElementById("todayDate");

/***********************
  SAVE FUNCTIONS
************************/
function saveStock() {
    localStorage.setItem("stock", JSON.stringify(stock));
}

function saveDailySales() {
    localStorage.setItem("dailySales", JSON.stringify(dailySales));
}

/***********************
  STOCK FUNCTIONS
************************/
function addItem() {
    let name = document.getElementById("itemName")?.value.trim();
    let price = Number(document.getElementById("itemPrice")?.value);
    let qty = Number(document.getElementById("itemQty")?.value);

    if (!name || price <= 0 || qty <= 0) {
        alert("Enter valid stock data");
        return;
    }

    let item = stock.find(i => i.name === name);

    if (item) {
        item.qty += qty;
    } else {
        stock.push({ name, price, qty });
    }

    saveStock();
    displayStock();
}

function displayStock() {
    if (!stockTable) return;

    stockTable.innerHTML = "";
    stock.forEach(item => {
        stockTable.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
            </tr>
        `;
    });
}

/***********************
  BILL FUNCTIONS
************************/
function addToBill() {
    if (!billTable) return;

    let name = document.getElementById("billItem")?.value.trim();
    let qty = Number(document.getElementById("billQty")?.value);

    if (!name || qty <= 0) {
        alert("Enter item and quantity");
        return;
    }

    let stockItem = stock.find(i => i.name === name);

    if (!stockItem || stockItem.qty < qty) {
        alert("Not enough stock");
        return;
    }

    let billItem = bill.find(b => b.name === name);

    if (billItem) {
        billItem.qty += qty;
    } else {
        bill.push({ name, qty, price: stockItem.price });
    }

    displayBill();
}

function displayBill() {
    if (!billTable) return;

    billTable.innerHTML = "";
    let total = 0;

    bill.forEach(item => {
        let sum = item.qty * item.price;
        total += sum;

        billTable.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price}</td>
                <td>${sum}</td>
            </tr>
        `;
    });

    if (billTotal) billTotal.innerText = total;
}

function confirmBill() {
    if (bill.length === 0) {
        alert("Bill is empty");
        return;
    }

    bill.forEach(b => {
        let stockItem = stock.find(i => i.name === b.name);
        stockItem.qty -= b.qty;

        let saleItem = dailySales.find(d => d.name === b.name);
        if (saleItem) {
            saleItem.qty += b.qty;
        } else {
            dailySales.push({ name: b.name, qty: b.qty });
        }
    });

    saveStock();
    saveDailySales();

    bill = [];
    displayBill();
    displayStock();
    displayDailySales();

    alert("Sale completed successfully");
}

/***********************
  DAILY SALES
************************/
function displayDailySales() {
    if (!dailySalesList) return;

    dailySalesList.innerHTML = "";
    dailySales.forEach(item => {
        dailySalesList.innerHTML += `
            <li>${item.name} → Sold: ${item.qty}</li>
        `;
    });
}

function resetDailySales() {
    if (!confirm("Reset today's sales?")) return;

    dailySales = [];
    saveDailySales();
    displayDailySales();
}

/***********************
  PRINT
************************/
function printReport() {
    window.print();
}

/***********************
  INIT ON PAGE LOAD
************************/
if (todayDate) todayDate.innerText = today;

displayStock();
displayDailySales();



function displayStock() {

    if (!stockTable) return;

    stockTable.innerHTML = "";

    stock.forEach((item, index) => {

        stockTable.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>

            <td>

                <button onclick="editStock(${index})">
                    Edit
                </button>

                <button onclick="deleteStock(${index})">
                    Delete
                </button>

            </td>

        </tr>
        `;

    });

}

function editStock(index) {

    let item = stock[index];

    let newName = prompt("Medicine Name", item.name);

    if (newName == null) return;

    let newPrice = prompt("Price", item.price);

    if (newPrice == null) return;

    let newQty = prompt("Quantity", item.qty);

    if (newQty == null) return;

    stock[index] = {

        name: newName.trim(),

        price: Number(newPrice),

        qty: Number(newQty)

    };

    saveStock();

    displayStock();

}

function loadStockList() {

    const stockList = document.getElementById("stockList");

    stockList.innerHTML = "";

    stock.forEach(item => {

        stockList.innerHTML += `
            <option value="${item.name}">
        `;

    });

}
document.getElementById("billItem").addEventListener("input", function () {

    let name = this.value.trim();

    let item = stock.find(i => i.name.toLowerCase() === name.toLowerCase());

    const stockInfo = document.getElementById("stockInfo");

    if (item) {

        stockInfo.innerHTML = `
            Price: Rs ${item.price} |
            Available Stock: ${item.qty}
        `;

    } else {

        stockInfo.innerHTML = "Medicine not found.";

    }

}); 