// UI

const currencyoneel= document.getElementById('currency-one'),
	amountoneel =document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
	amounttwoel = document.getElementById('amount-two');

const swapel =document.getElementById('swap'),
	rateel = document.getElementById('rate');

function calculate(){
    // console.log('hey');

    const amtone=amountoneel.value;
    const amttwo=amounttwoel.value;
    
    const crcyone=currencyoneel.value;
    const crcytwo=currencytwoel.value;

    const apikey= "d66bef85ced5d2aac452554c";

    const uri=`https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
    
    // console.log(uri);
    // console.log(crcyone,crcytwo);
    // console.log(amtone,amttwo);

    // AJAX request
        // api websiteeနဲ့ ကိုယ့် webချိတ်မချိတ်လှမ်းကြည့်
        // resultထဲက stautsက၂၀၀ဆိုရင် ချိတ်မိပြီ
    // console.log(fetch(uri));

        // apiကနေ  promiseလှမ်းတောင်းတာ
    fetch(uri)
            // ပြီးရင် json objectနဲ့ လှမ်းဆွဲထုတ်
    .then(res=>res.json())
             // ပြီးရင် data ထဲလှမ်းထည့်
    .then(req=>{
        // console.log(data);
        // console.log(data.conversion_rates);
        // console.log(data.conversion_rates.USD);

        const rate=req.conversion_rates[crcytwo];
        // console.log(rate);

        rateel.innerHTML =`1${crcyone} = ${rate} ${crcytwo}`;

        amounttwoel.value=(amountoneel.value * rate).toFixed(2);

    });

}


// Event listener

currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);


swapel.addEventListener('click',()=>{
	// console.log('already swape');

	const temp = currencyoneel.value;

	currencyoneel.value = currencytwoel.value;
	currencytwoel.value = temp;

	calculate();
})
