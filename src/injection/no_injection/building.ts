export class Building {

    private ground: Ground = new Ground();
    private employee: MachineEmployee = new MachineEmployee();

    makeMaintenance(): void {
        this.employee.wash(this.ground);
        console.log(this.ground.getLastWashed())
    }

}

class Ground {
    private lastWashed: Date;

    constructor() {
        this.lastWashed = new Date('2022-01-01');
    }

    public setLastWashed(date: Date) {
        this.lastWashed = date;
    }

    public getLastWashed() {
        return this.lastWashed;
    }
}

class BrushEmployee {

    wash(ground: Ground): void {
        ground.setLastWashed(new Date())
        console.log("washed with a brush")
    }
}

class MachineEmployee {
 
    wash(ground: Ground) : void {
        ground.setLastWashed(new Date())
        console.log("washed with the machine")
    }

}