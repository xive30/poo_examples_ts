export abstract class TransportOc {
    protected type: string;
    protected price: number;

    public getType(): string {
        return this.type;
    }

    public getPrice(): number {
        return this.price;
    }
}
