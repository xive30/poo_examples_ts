import { Transport } from "./transport.abstract";

export class LivraisonPlan {

    private transports: Transport[];

    constructor(transports: Transport[]) {
        this.transports = transports;
    }

    calculerCoutLivraison(): number {
        return this.transports
        .map((t): number => {

            if (t.getType() == "Navire") {
                return 150;
            }

            if (t.getType() == "Avion") {
                return 900;
            }

            if (t.getType() == "Biclou") {
                return 2;
            }

            if (t.getType() == "Brouette") {
                return 13;
            }

            return 0;
        })
        .reduce((sum, r) => sum + r);

    }

}