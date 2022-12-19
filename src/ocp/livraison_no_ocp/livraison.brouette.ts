import { Transport } from "./transport.abstract";

export class LivraisonBrouette extends Transport {

    constructor() {
        super();
        super.type = "Brouette";

    }
}