// Base interfaces for API responses
export interface SWAPIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
}

// Translated interfaces
export interface PeliculaTraducida {
  titulo: string;
  episodioId: number;
  textoApertura: string;
  director: string;
  productor: string;
  fechaEstreno: string;
  url: string;
}

export interface PlanetaTraducido {
  nombre: string;
  periodoRotacion: string;
  periodoOrbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  aguaSuperficial: string;
  poblacion: string;
  url: string;
}

export interface PersonajeTraducido {
  nombre: string;
  altura: string;
  peso: string;
  colorCabello: string;
  colorPiel: string;
  colorOjos: string;
  anioNacimiento: string;
  genero: string;
  mundoNatal: string;
  url: string;
}