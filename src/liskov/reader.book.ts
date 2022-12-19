import { Reader } from "./reader";

export class BookReader extends Reader {

    public read(i: number): string {
        return "Lit un truc dans un livre";
    }
}