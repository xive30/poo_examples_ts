import { TransportOc } from "./transport.abstract.oc";

export class LivraisonPlanOC {

    private transports: TransportOc[];

    constructor(transports: TransportOc[]) {
        this.transports = transports;
    }

    calculerCoutLivraison(): number {
        return this.transports
        .reduce((sum, item) => sum + item.getPrice(), 0);

    }

}