import { TransportOc } from "./transport.abstract.oc";

export class LivraisonVeloOC extends TransportOc {

    constructor() {
        super();
        super.type = "Biclou";
        super.price = 2;

    }
}