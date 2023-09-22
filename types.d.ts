interface Film {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
    created: string
    edited: string
    url: string
}

interface FilmsResponse {
    "count": number,
    "next": null | number,
    "previous": null | number,
    "results": Film[]
}

interface Film2 {
    properties: Properties
    description: string
    _id: string
    uid: string
    __v: number
}

interface Film2Properties {
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
    created: string
    edited: string
    producer: string
    title: string
    episode_id: number
    director: string
    release_date: string
    opening_crawl: string
    url: string
}

interface FilmsResponse2 {
    "message": string,
    "result": Film2[]
}
interface FilmResponse2 {
    "message": string,
    "result": Film2
}