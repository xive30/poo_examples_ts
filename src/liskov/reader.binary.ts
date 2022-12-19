import { Reader } from "./reader";

export class BinaryReader extends Reader {


    public read(i: number) : string {
        if (i == 0) throw new Error("Ha zéro");
        
        return "101010101100110101";

    }
}