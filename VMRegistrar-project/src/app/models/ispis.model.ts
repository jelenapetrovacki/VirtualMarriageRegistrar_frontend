export class Ispis {
    public datumRodjenja: string;
    public regija: string;
    public pol: string;
    public brojBebe: string;
    public kontrolnaCifra: number;
    public nazivMeseca:string;
    public nazivDana: string;
    public prestupnaG: string;

   
    constructor(
        datumRodjenja: string,
        regija: string,
        pol: string,
        brojBebe: string,
        kontrolnaCifra: number,
        nazivMeseca:string,
        nazivDana:string,
        prestupnaG:string) {
        this.datumRodjenja = datumRodjenja,
        this.regija = regija,
        this.pol = pol,
        this.brojBebe = brojBebe,
        this.kontrolnaCifra = kontrolnaCifra,
        this.nazivMeseca = nazivMeseca,
        this.nazivDana=nazivDana,
        this.prestupnaG=prestupnaG

        

    }


}