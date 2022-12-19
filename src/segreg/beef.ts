import { IAnimal } from "./animal.interface";

export class Beef implements IAnimal {

    walk(): void {
        console.log("slowly !");
    }
    run():void {
        console.log("chargee ahead");
    }

}