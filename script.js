function sortDrinkByPrice(drinks) {
    drinks.sort((a, b) => a.price - b.price); 
    return drinks;
}
