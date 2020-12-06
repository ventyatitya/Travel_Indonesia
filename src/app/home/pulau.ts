export interface pulau {
    pulauId: string
    nama: string;
    imageUrl: string;
    //provinsi:provinsi[];

}
export interface provinsi {
    pulauId: string;
    provId: string;
    nama: string;
    desc: string;
    imageUrl: string;
    //food:food[];
    //attraction:attraction[];
    //arts:arts[];
}
export interface food {
    provId: string;
    nama: string;
    desc: string;
    //  imageUrl: string;
}
export interface attraction {
    provId: string;
    nama: string;
    desc: string;
    //   imageUrl: string;
}
export interface arts {
    provId: string;
    nama: string;
    desc: string;
    //  imageUrl: string;
}