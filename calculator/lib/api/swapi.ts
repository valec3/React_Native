import { Character, Film, Planet, PersonajeTraducido, PeliculaTraducida, PlanetaTraducido, SWAPIResponse } from './types';

const BASE_URL = 'https://swapi.py4e.com/api';

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Error en la conexión con la API');
  }
  return response.json();
}

export function traducirPelicula(film: Film): PeliculaTraducida {
  return {
    titulo: film.title,
    episodioId: film.episode_id,
    textoApertura: film.opening_crawl,
    director: film.director,
    productor: film.producer,
    fechaEstreno: film.release_date,
    url: film.url,
  };
}

export function traducirPlaneta(planet: Planet): PlanetaTraducido {
  return {
    nombre: planet.name,
    periodoRotacion: planet.rotation_period,
    periodoOrbital: planet.orbital_period,
    diametro: planet.diameter,
    clima: planet.climate,
    gravedad: planet.gravity,
    terreno: planet.terrain,
    aguaSuperficial: planet.surface_water,
    poblacion: planet.population,
    url: planet.url,
  };
}

export function traducirPersonaje(character: Character): PersonajeTraducido {
  return {
    nombre: character.name,
    altura: character.height,
    peso: character.mass,
    colorCabello: character.hair_color,
    colorPiel: character.skin_color,
    colorOjos: character.eye_color,
    anioNacimiento: character.birth_year,
    genero: character.gender,
    mundoNatal: character.homeworld,
    url: character.url,
  };
}

export async function obtenerPeliculas(): Promise<PeliculaTraducida[]> {
  const response = await fetchAPI<SWAPIResponse<Film>>('/films/');
  return response.results.map(traducirPelicula);
}

export async function obtenerPlanetas(page = 1): Promise<SWAPIResponse<PlanetaTraducido>> {
  const response = await fetchAPI<SWAPIResponse<Planet>>(`/planets/?page=${page}`);
  return {
    ...response,
    results: response.results.map(traducirPlaneta),
  };
}

export async function obtenerPersonajes(page = 1): Promise<SWAPIResponse<PersonajeTraducido>> {
  const response = await fetchAPI<SWAPIResponse<Character>>(`/people/?page=${page}`);
  return {
    ...response,
    results: response.results.map(traducirPersonaje),
  };
}

export async function buscarPersonajes(query: string): Promise<PersonajeTraducido[]> {
  const response = await fetchAPI<SWAPIResponse<Character>>(`/people/?search=${encodeURIComponent(query)}`);
  return response.results.map(traducirPersonaje);
}

export async function obtenerPersonaje(id: string): Promise<PersonajeTraducido> {
  const character = await fetchAPI<Character>(`/people/${id}/`);
  return traducirPersonaje(character);
}