export abstract class Transport {
    protected type: string;

    public getType(): string {
        return this.type;
    }
}
