import { Request, Response } from "express";
import { MachineEmployee, BuildingWithinjection } from "~/injection/injection/building.inject";
import { Building } from "~/injection/no_injection/building";
import { ReaderAction } from "~/liskov/reader.action";
import { LivraisonAvion } from "~/ocp/livraison_no_ocp/livraison.avion";
import { LivraisonNavire } from "~/ocp/livraison_no_ocp/livraison.navire";
import { LivraisonVelo } from "~/ocp/livraison_no_ocp/livraison.velo";
import { LivraisonBrouette } from "~/ocp/livraison_no_ocp/livraison.brouette";
import { LivraisonPlan } from "~/ocp/livraison_no_ocp/livraison_plan";
import { LivraisonAvionOC } from "~/ocp/livraison_ocp/livraison.avion.oc";
import { LivraisonNavireOC } from "~/ocp/livraison_ocp/livraison.navire.oc";
import { LivraisonVeloOC } from "~/ocp/livraison_ocp/livraison.velo.oc";
import { LivraisonBrouetteOC } from "~/ocp/livraison_ocp/livraison.brouette.oc";
import { LivraisonPlanOC } from "~/ocp/livraison_ocp/livraison_plan.oc";
import { IAnimal, IPredator } from "~/segreg/animal.interface";
import { Baboon } from "~/segreg/baboon";
import { Cheetah } from "~/segreg/cheetah";
import { Beef } from "~/segreg/beef";

/**
 * 
 * @param req 
 * @param res 
 */
function testOcp(req: Request, res: Response) {

    //ajouter un nouveau type de transport (par brouette ?) pour chaque façon de procéder
    const transport = [new LivraisonAvion(), new LivraisonNavire(), new LivraisonVelo(), new LivraisonBrouette()]
    const transportOc = [new LivraisonAvionOC(), new LivraisonNavireOC(), new LivraisonVeloOC(), new LivraisonBrouetteOC()]

    const livraison = new LivraisonPlan(transport);
    const livraisonOc = new LivraisonPlanOC(transportOc);

    const result = {
        "livraison": livraison.calculerCoutLivraison(),
        "livraisonOc": livraisonOc.calculerCoutLivraison()
    }

    console.log(result)

    res.status(200).json(   "wiki : une entité applicative (classe, fonction, module ...) doit être fermée à la modification directe mais ouverte à l'extension");
}

/**
 * 
 * @param req 
 * @param res 
 */
function testSubstitutionLiskov(req: Request, res: Response) {

    const reader = new ReaderAction();
    reader.readAll();
    res.status(200).json("une instance de type T doit pouvoir être remplacée par une instance de type G, tel que G sous-type de T, sans que cela ne modifie la cohérence du programme")
    
}

/**
 * 
 * @param req 
 * @param res 
 */
function testInterfaceSegregation(req: Request, res: Response) {

    //add a beef
    const animals: IAnimal[] = [new Cheetah(), new Baboon(), new Beef()];
    const predators: IPredator[] = [new Cheetah(), new Baboon()];

    animals.forEach(animal => {
        animal.walk();
        animal.run();
    });

    predators.forEach(predator => {
        predator.hunt();
    });

    res.status(200).json("Wiki : préférer plusieurs interfaces spécifiques pour chaque client plutôt qu'une seule interface générale")
}

/**
 * 
 * @param req 
 * @param res
 */
function testDependencyInjection(req: Request, res: Response) {


    //change both with Machine employee
    const building1 = new Building();
    building1.makeMaintenance();

    const building2 = new BuildingWithinjection(new MachineEmployee());
    building2.makeMaintenance()

    res.status(200).json("Il faut dépendre des abstractions, pas des implémentations");
}

export const handler = { testOcp, testSubstitutionLiskov, testInterfaceSegregation, testDependencyInjection }


