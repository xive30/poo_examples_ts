
export class BuildingWithinjection {

    private ground: Ground = new Ground();
    private employee: EmployeeType;

    constructor(employee: EmployeeType) {
        this.employee = employee;
    }

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

export interface EmployeeType {
    wash(ground: Ground): void;
}

export class BrushEmployee implements EmployeeType{

    wash(ground: Ground): void {
        ground.setLastWashed(new Date())
        console.log("washed with a brush")
    }
}

export class MachineEmployee implements EmployeeType {
 
    wash(ground: Ground) : void {
        ground.setLastWashed(new Date())
        console.log("washed with the machine")
    }

}



