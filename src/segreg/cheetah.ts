import { IAnimal } from "./animal.interface";
import { Baboon } from "./baboon";

export class Cheetah implements IAnimal {

    walk(): void {
        console.log("Like the king (when no lions there)")
    }
    run(): void {
        console.log("Fastest on earth")
    }

    hunt(): void {
        console.log("Eating smelly ape")
    }

}