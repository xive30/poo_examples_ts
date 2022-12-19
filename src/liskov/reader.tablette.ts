import { Reader } from "./reader";

export class TabletReader extends Reader {

    public read(i: number): string {
        return "Lit un truc sur une tablette";
    }
}