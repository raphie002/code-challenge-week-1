function estimateTransactionFee(amount) {
    let amountInInput = ("Unatumi ngapi? (KES): ");
    let amountToSend = Number(amount)

    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Please enter a valid positive amount.");
        return;
    }

    let calculatedFee = amountToSend * 0.015;
     
    let finalFee = Math.max(calculatedFee, 10);

    finalFee = Math.min(finalFee, 70);

    let totalAmountDebited = amountToSend + finalFee;
    
    console.log(`\nSending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${finalFee}`);
    console.log(`Total amount to be debited: KES ${totalAmountDebited}`);
    console.log("\nSend Money Securely!");
}

estimateTransactionFee(500);
estimateTransactionFee(2000);
estimateTransactionFee(10000);
