let shoppingCart = {
    items: [],
    add: function (name, price) {
        this.items.push({
            name: name,
            price: price
        });
    },
    removeByIndex: function (i) {
        if (i >= this.items.length) return;
        this.items.splice(i, 1);
    },
    printInfo: function () {
        let finalPrice = 0;
        for (let i = 0; i < this.items.length; i++){
            let element = this.items[i];
            finalPrice += element.price;

            console.log(`W koszyku: ${element.name}, cena: ${element.price}`);
        }
        console.log(`Wartosc koszyka: ${finalPrice}`);  
    }
};

shoppingCart.add("TV", 1000);
shoppingCart.add("Radio", 250);
shoppingCart.printInfo();
shoppingCart.removeByIndex(0);
shoppingCart.printInfo();
shoppingCart.add("Telefon", 500);
shoppingCart.printInfo();