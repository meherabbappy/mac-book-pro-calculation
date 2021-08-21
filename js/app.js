// clicking update 
function totalMemoryCost(id,price){
    const memoryValue = document.getElementById(id);
     memoryValue.innerText = price;
}

// total cost calculation 

function totalCalculation(){
let baseExtra  = document.getElementById("basePrice").innerText;
let basePriceFloat = parseFloat(baseExtra);

let extraMemory  = document.getElementById("extraMemoryCost").innerText;
let memoryPriceFloat = parseFloat(extraMemory);

let storageExtra  = document.getElementById("extraStorageCost").innerText;
let storagePriceFloat = parseFloat(storageExtra);

let deliveryExtra  = document.getElementById("deliveryCharge").innerText;
let deliveryPriceFloat = parseFloat(deliveryExtra);

let finalTotal = basePriceFloat + memoryPriceFloat + storagePriceFloat + deliveryPriceFloat;

// finalTotal 
document.getElementById("totalPrice").innerText = finalTotal;
document.getElementById("grand-total").innerText = finalTotal;
}

totalCalculation();

// promo code 

function promoCode(){
    let finalPrice = document.getElementById("totalPrice").innerText;
    let finalMainPrice = parseFloat(finalPrice);

    let promoText = document.getElementById("promo-input").value;
    if(promoText == "stevekaku"){
        // console.log("clicked");
        let discount = finalMainPrice * 0.2;
        let finalTotal = finalMainPrice - discount;
        document.getElementById("grand-total").innerText = finalTotal;
    }
    else{
        document.getElementById("grand-total").innerText = finalMainPrice;
    }
    document.getElementById("promo-input").value = "";
}

document.getElementById("promo-button").addEventListener("click",function(){
    promoCode();
})


// memory 
document.getElementById("8gbMemory").addEventListener("click",function(){
    totalMemoryCost("extraMemoryCost",0);
    totalCalculation();
})

document.getElementById("16gbMemory").addEventListener("click",function(){
    totalMemoryCost("extraMemoryCost",180);
    totalCalculation();
})

// storage 
document.getElementById("256gbSsd").addEventListener("click",function(){
    totalMemoryCost("extraStorageCost",0);
    totalCalculation();
})
document.getElementById("512gbSsd").addEventListener("click",function(){
    totalMemoryCost("extraStorageCost",100);
    totalCalculation();
})
document.getElementById("1tbSsd").addEventListener("click",function(){
    totalMemoryCost("extraStorageCost",180);
    totalCalculation();
})

// delivery cost 

document.getElementById("25Aug").addEventListener("click",function(){
    totalMemoryCost("deliveryCharge",0);
    totalCalculation();
})
document.getElementById("21Aug").addEventListener("click",function(){
    totalMemoryCost("deliveryCharge",20);
    totalCalculation();
})


