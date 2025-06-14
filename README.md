CODE CHALLENGE WEEK ONE

Challenge 1: Chai Bora Ingridient Calculator;
Create a simple calculator to determine the basic ingridients needed to make a specific number of cups of Kenyan Chai.

The Standard Recipe for 1 cup of Chai:
1. Water: 200ml
2. Milk: 50ml
3. Tea Leaves (Majani): 1 tablespoon
4. Sugar (Sukari): 2 teaspoons

Code:
Write a function named 'calculateChaiIngridients' that;
1. Prompts the user to enter the number of chai cups they want to make. Convert the input into a number.
2. Take the 'numberOfCups' (as a number) as an argument.
3. Calculate the required amount for each ingridient (water, milk, tea leaves, sugar) based on the 'numberOfCups'.
4. Print the results to the console in a clear, readable format.

For 3 cups of Chai Bora:
User is prompted: "Karibu! How many cups of Chai Bora would you like to make?"
User enters : 3
Console output:
To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!


Challenge 2: Boda Boda Ride Fare Estimator:
Create a simple program to estimate the fare for a boda boda ride.

Fare Calculation Rules:
1. Base Fare: KES 50 (applied to every ride)
2. Per Kilometer Charge: KES 15 for every kilometer travelled

Code:
Write a Javascript function named 'calculateBodaFare' that;
1. Prompts the user distance of trip in kilometers. Convert the input into a number.
2. Takes the 'distanceInKm' (as a number) as an argument.
3. Calculates the total estimated fare using the formula: 'totalFare = baseFare + (distanceInKm * chargePerKm)'
4. Prints the result to the console in a user-friendly format.

For a trip of 5 km:
User is prompted: "Unafika wapi Mkubwa? Kilometer ngapi?:"
User enters: 5
Console output:
Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!


Challenge 3: Simplified Mobile Money Transaction Fee Estimator:
Create a simplified estimator for transaction fees.

Simplified Fee Structure:
1. Basic transaction fee is 1.5% of the transaction amount.
2. There's a minimum fee of KES 10. If 1.5% of the amount is less than KES 10, the fee charged is KES 10.
3. There's also a maximum fee of KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.

Code:
Write a Javascript function named 'estimateTransactionFee' that;
1. Prompts the user to enter the amount of money they wish to send. Convert the input into a number.
2. Takes the 'amountToSend' (as a number) as an argument.
3. Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum (KES 10) and maximum (KES 70) fee limits.
4. Calculates the total amount that will be debited (amount to send + transaction fee)
5. Prints the results to the console.

Interactions & Output:
User is prompted: "Unatuma Ngapi? (KES):"

Scenario 1: User enters 500;
(1.5% of 500 = 7.5. Fee becomes KES 10 due to minimum.)
Console output:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!

Scenario 2: User enters 2000;
(1.5% of 2000 = 30. Fee is KES 30.)
Console output:
Sending KES 2000:
Calculated Transaction Fee: KES 30
Total amount to be debited: KES 2030

Send Money Securely!

Scenario 3: User enters 10000;
(1.5% of 10000 = 150. Fee becomes KES 70 due to maximum.)
Console output:
Sending KES 10000:
Calculated Transaction Fee: KES 70
Total amount to be debited: KES 10070

Send Money Securely!