import { Transport } from "./transport.abstract";

export class LivraisonNavire extends Transport {

    constructor() {
        super();
        super.type = "Navire";

    }
}