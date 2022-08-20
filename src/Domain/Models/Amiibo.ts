export interface AmiiboList {
    amiibo: Amiibo[]
}

export interface AmiiboDetails {
    amiibo: Amiibo[]
}

export interface Amiibo {
    tail: string,
    character: string,
    gameSeries: string,
    image: string,
    name: string,
    amiiboSeries: string,
}