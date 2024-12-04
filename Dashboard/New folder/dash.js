let button=document.querySelector('#bbs');
let fname=document.querySelector('.fname');
let lname=document.querySelector('.lname');
let country=document.querySelector('.country');
let score=document.querySelector('.score');
let container=document.querySelector('.container');
let playerList=[];
// let expenseChart;
// Select form and result elements
const taxForm = document.getElementById("taxForm");
const totalIncomeDisplay = document.getElementById("totalIncome");
const taxRateDisplay = document.getElementById("taxRate");
const taxPayableDisplay = document.getElementById("taxPayable");
const amountLeftDisplay = document.getElementById("amountLeft");


button.addEventListener('click',function(e){
    e.preventDefault();
    if(fname.value=="" || lname.value=="" || score.value==""|| country.value=="")
    {
        alert("Entered all fields");
    }
    else{
       let Mdate=new Date();
    //    console.log(Mdate);
       let a=Mdate.getDate();
       let b=Mdate.getDay();
       let c=Mdate.getFullYear();
       console.log(a,b,c);
    let player={
        name:`${fname.value} ${lname.value}`,
        country:country.value,
        date:`${a}-${b}-${c}`,
        score:score.value
    }
    playerList.push(player);
    updatedata();
    fname.value="";
    lname.value='';
    country.value="";
    score.value="";
    }
    
})
function updatedata(){
    if(playerList.length>0){
        container.style.display="block";
    }
    else{
        container.style.display="none";
    }
    container.innerHTML='';

    

    // // Calculate the total score
    // const totalAmount = playerList.reduce((sum, player) => sum + parseFloat(player.score), 0);
    // totalAmountDiv.innerText = `Total: ₹${totalAmount.toFixed(2)}`;
    // container.appendChild(totalAmountDiv);

    playerList.sort((player1,player2)=>player2.score-player1.score);
    playerList.forEach((item)=>{
        let main=document.createElement("div");
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        let div4=document.createElement("div");
        let del=document.createElement("div");
        let inc=document.createElement("div");
        let dec=document.createElement("div");
        
       
    div4.appendChild(del);
    div4.appendChild(dec);
    div4.appendChild(inc);
    del.innerHTML=`<i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg></i> `;
   

    // console.log(div4);
    main.appendChild(div1);
    main.appendChild(div2);
    main.appendChild(div3);
    main.appendChild(div4);
  div1.style.width="20%";
  div2.style.width="20%";
  div3.style.width="20%";
  div4.style.width="22%";
    main.style.display="flex";
    main.style.justifyContent="space-between";
    main.style.alignItems="center";
    // main.style.border="4px solid black";
    // main.style.borderTopRightRadius="100px";
    // main.style.borderBottomRightRadius="100px";
    main.style.width="94%";
    // main.style.height="500px";
    main.style.padding="30px 10px";
    main.style.margin="15px";
    main.style.color="white";
    main.style.background="rgb(17, 125, 206)";
    div4.style.display="flex";
    div4.style.justifyContent="space-between";
    div1.style.textAlign="center";
    div2.style.textAlign="center";
    div3.style.textAlign="center";
    div4.style.textAlign="center";
    div1.style.fontSize="25px";
    div2.style.fontSize="25px";
    div3.style.fontSize="25px";
    div4.style.fontSize="25px";
    del.style.padding="5px 20px";
    inc.style.padding="5px 20px";
    dec.style.padding="5px 20px";
    container.appendChild(main);
    let name=item.name,date=item.date;
    div1.innerText=`${name} \n ${date}`;
    div2.innerText=item.country;
    div3.innerText=item.score;
    

    del.addEventListener('click',function(){
        const index = playerList.indexOf(item);

        // Remove the item from the array using splice
        if (index !== -1) {
            playerList.splice(index, 1);
        }
            updatedata();
    });
    });
    
    const totalAmountDiv = document.createElement('div');
    totalAmountDiv.className = 'total-amount';

     // Calculate the total score
     const totalAmount = playerList.reduce((sum, player) => sum + parseFloat(player.score), 0);
     totalAmountDiv.innerText = `Total: ₹${totalAmount.toFixed(2)}`;
     totalAmountDiv.style.marginTop = "20px";

    container.appendChild(totalAmountDiv);
    renderChart();
}

// Render Polar Area Chart
// Declare expenseChart only if it is not already declared
let expenseChart; // Declare globally if not already defined

function renderChart() {
    const categories = ["Utilitis", "Entertainment", "Food", "Study", "Medical"];
    const categoryTotals = categories.map(cat => {
        return playerList
            .filter(player => player.country === cat)
            .reduce((sum, player) => sum + player.score, 0);
    });

    const ctx = document.getElementById('expenseChart');
    if (!ctx) {
        console.error("Canvas element with id 'expenseChart' not found.");
        return;
    }

    if (expenseChart) {
        expenseChart.destroy(); // Destroy previous chart before rendering a new one
    }

    expenseChart = new Chart(ctx.getContext('2d'), { // Ensure context is fetched correctly
        type: 'polarArea',
        data: {
            labels: categories,
            datasets: [{
                label: 'Expenses by Category',
                data: categoryTotals,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        }
    });
}



// Define tax thresholds and rates
const taxBrackets = [
    { threshold: 1000000, rate: 20 },
    { threshold: 700000, rate: 15 },
    { threshold: 500000, rate: 10 },
    { threshold: 300000, rate: 5 },
];

// Event listener for form submission
taxForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get income value
    const income = parseFloat(document.getElementById("income").value);

    // Calculate tax rate and payable tax
    let taxRate = 0;
    for (const bracket of taxBrackets) {
        if (income > bracket.threshold) {
            taxRate = bracket.rate;
            break;
        }
    }
    const taxPayable = (income * taxRate) / 100;
    const amountLeft = income - taxPayable;

    // Update UI with calculated values
    totalIncomeDisplay.textContent = income.toFixed(2);
    taxRateDisplay.textContent = taxRate;
    taxPayableDisplay.textContent = taxPayable.toFixed(2);
    amountLeftDisplay.textContent = amountLeft.toFixed(2);
});



async function fetchRates() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    conversionRates = data.rates; // Update rates dynamically
}
fetchRates();
