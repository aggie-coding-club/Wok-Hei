
export default class foodItemClass {
    constructor(name, link, cal, ingredients, instructions, protein, carb, fat,id) {
        this.name = name;
        this.link = link;  
        this.cal = cal;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.protein = protein;
        this.carb = carb;
        this.fat = fat;
        this.id = id;
    }

    setProperty(propertyName, value) {
        if (this.hasOwnProperty(propertyName)) {
            this[propertyName] = value;
        } else {
            console.warn(`Property "${propertyName}" does not exist on ExperienceClass.`);
        }
    }
}