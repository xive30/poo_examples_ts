import { Reader } from "./reader";
import { BinaryReader } from "./reader.binary";
import { BookReader } from "./reader.book";
import { TabletReader } from "./reader.tablette";

export class ReaderAction {

    //add binary reader

    public readAll(): void {
        const toRead: Reader[] = [new TabletReader(), new BookReader(), new BinaryReader()];
        toRead.forEach(reader => console.log(reader.read(0)));
    }

    
}