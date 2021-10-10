import { Muz } from "./muz";
import { Termin } from "./termin";
import { Zena } from "./zena";

export class Zahtev{
    id!: number;
    adresa!: string;
    izlazMaticara!: boolean;
    pdfDokazUplata!: BinaryType;
    pdfDokazUplataIzlazak!: BinaryType;
    straniDrzavljaninMuz!: boolean;
    straniDrzavljaninZena!: boolean;
    muz!: Muz;
    termin!: Termin;
    zena!: Zena;
}