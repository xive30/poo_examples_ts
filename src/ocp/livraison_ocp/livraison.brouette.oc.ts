import { TransportOc } from "./transport.abstract.oc";

export class LivraisonBrouetteOC extends TransportOc {
	constructor() {
		super();
		super.type = "Brouette";
		super.price = 13;
	}
}
