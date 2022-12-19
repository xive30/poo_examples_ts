import { TransportOc } from "./transport.abstract.oc";

export class LivraisonAvionOC extends TransportOc {

    constructor() {
        super();
        super.type = "Avion";
        super.price = 900;
    }
}