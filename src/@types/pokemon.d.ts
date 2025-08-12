export type Pokemons = Pokemon[]

export interface Pokemon {
  pokedex_id: number
  generation: number
  category: string
  name: Name
  sprites: Sprites
  types?: Type[]
  talents?: Talent[]
  stats?: Stats
  resistances?: Resistance[]
  evolution?: Evolution
  height?: string
  weight?: string
  egg_groups?: string[]
  sexe?: Sexe
  catch_rate?: number
  level_100?: number
  formes?: Forme[]
  next: any
}

export interface Name {
  fr: string
  en: string
  jp: string
}

export interface Sprites {
  regular: string
  shiny?: string
  gmax?: Sprites
}

export interface Type {
  name: string
  image: string
}

export interface Talent {
  name: string
  tc: boolean
}

export interface Stats {
  hp: number
  atk: number
  def: number
  spe_atk: number
  spe_def: number
  vit: number
}

export interface Resistance {
  name: string
  multiplier: number
}

export interface Evolution {
  pre?: Pre[]
  next?: Next[]
  mega?: Mega[]
}

export interface Pre {
  pokedex_id: number
  name: string
  condition?: string
  conditio?: string
}

export interface Next {
  pokedex_id: number
  name: string
  condition: string
}

export interface Mega {
  orbe: string
  sprites: Sprites
}

export interface Sexe {
  male: number
  female: number
}

export interface Forme {
  region: string
  name: Name
}

