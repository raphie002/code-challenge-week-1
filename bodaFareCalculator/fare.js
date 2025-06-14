function calculateBodaFare(distance) {
    let distanceInput = ("Unafika wapi Mkubwa? Kilometer ngagi?:");
    let distanceInKm = Number(distance);

    if(isNaN(distanceInKm) || distanceInKm <= 0) {
        console.log("Wewe chunga! Ingiza namba sahihi ya kilomita.");
        return;
    }

    const baseFare = 50;
    const chargePerKm = 15;

    let totalFare = baseFare + (distanceInKm * chargePerKm);

    let mpakaUkoCost = distanceInKm * chargePerKm;

    console.log("Uko kwote? Io ni " + distanceInKm + " km");
    console.log("Ukikalia Pikipiki: KES " + baseFare);
    console.log("Mpaka Uko: KES " + mpakaUkoCost);
    console.log("Total: KES " + totalFare);
    console.log("Panda Pikipiki!")
}

calculateBodaFare(5);