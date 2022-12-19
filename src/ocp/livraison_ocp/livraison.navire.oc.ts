import { TransportOc } from "./transport.abstract.oc";

export class LivraisonNavireOC extends TransportOc {

    constructor() {
        super();
        super.type = "Navire";
        super.price = 150;

    }
}