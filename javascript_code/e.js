var countryState = {
    nigeria : 'Abuja',
    london : 'England',
    ghana : 'Accra',
    togo: 'Lome',
    cameroon: "i don't know"
}
for (const element of Object.keys(countryState)) {
    console.log(element, ": ", countryState[element])
}