import { IAnimal, IPredator } from "./animal.interface";


export class Cheetah implements IAnimal, IPredator {

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