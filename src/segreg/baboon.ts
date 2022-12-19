import { IAnimal } from "./animal.interface";

export class Baboon implements IAnimal {

    walk(): void {
        console.log("Carefully, beware big cats !")
    }
    run(): void {
        console.log("Eeeeek !")
    }
    hunt(): void {
        console.log("Eating small beats")
    }
    
}