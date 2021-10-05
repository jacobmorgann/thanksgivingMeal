const thanksgivingMeal = {

    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,

    prettyPrint : function(){

 let menuStr = console.log(thanksgivingMeal);

    },
    totalPrice(isSenior) {
        isSenior = true;
        let focusedAttribute= "";
        if (isSenior){
            focusedAttribute = totalcost*.9
            console.log("Your discounted price is:" + focusedAttribute)
        }
        else 
            focusedAttribute = console.log("You are not avaliable for a Senior Discount");
        
    },

    totalCalories : function() {
        return (this.starter.calories + this.entree.calories + this.dessert.calories) },

    caloriesFrom: function(indicator) {
        return console.log ("1 - " + this.starter.calories + "2 - " + this.entree.calories + "3 - " + this.dessert.calories);
    } 

};

let str = prettyPrint;
console.log(str);

