import { IAnimal, IPredator } from "./animal.interface";

export class Baboon implements IAnimal,IPredator {

    walk(): void {
        console.log("Carefully, beware big cats !")
    }
    run(): void {
        console.log("Eeeeek !")
    }
    hunt(): void {
        console.log("Eating small beasts")
    }
    
}