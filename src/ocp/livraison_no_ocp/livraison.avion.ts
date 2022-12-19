import { Transport } from "./transport.abstract";

export class LivraisonAvion extends Transport {

    constructor() {
        super();
        super.type = "Avion";

    }
}