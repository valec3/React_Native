import { traducirPelicula, traducirPlaneta, traducirPersonaje } from '../swapi';
import { Film, Planet, Character } from '../types';

describe('SWAPI Translations', () => {
  describe('traducirPelicula', () => {
    it('should correctly translate a film object', () => {
      const mockFilm: Film = {
        title: 'A New Hope',
        episode_id: 4,
        opening_crawl: 'It is a period of civil war...',
        director: 'George Lucas',
        producer: 'Gary Kurtz',
        release_date: '1977-05-25',
        url: 'https://swapi.py4e.com/api/films/1/',
      };

      const translated = traducirPelicula(mockFilm);

      expect(translated).toEqual({
        titulo: 'A New Hope',
        episodioId: 4,
        textoApertura: 'It is a period of civil war...',
        director: 'George Lucas',
        productor: 'Gary Kurtz',
        fechaEstreno: '1977-05-25',
        url: 'https://swapi.py4e.com/api/films/1/',
      });
    });
  });

  describe('traducirPlaneta', () => {
    it('should correctly translate a planet object', () => {
      const mockPlanet: Planet = {
        name: 'Tatooine',
        rotation_period: '23',
        orbital_period: '304',
        diameter: '10465',
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        surface_water: '1',
        population: '200000',
        url: 'https://swapi.py4e.com/api/planets/1/',
      };

      const translated = traducirPlaneta(mockPlanet);

      expect(translated).toEqual({
        nombre: 'Tatooine',
        periodoRotacion: '23',
        periodoOrbital: '304',
        diametro: '10465',
        clima: 'arid',
        gravedad: '1 standard',
        terreno: 'desert',
        aguaSuperficial: '1',
        poblacion: '200000',
        url: 'https://swapi.py4e.com/api/planets/1/',
      });
    });
  });

  describe('traducirPersonaje', () => {
    it('should correctly translate a character object', () => {
      const mockCharacter: Character = {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.py4e.com/api/planets/1/',
        url: 'https://swapi.py4e.com/api/people/1/',
      };

      const translated = traducirPersonaje(mockCharacter);

      expect(translated).toEqual({
        nombre: 'Luke Skywalker',
        altura: '172',
        peso: '77',
        colorCabello: 'blond',
        colorPiel: 'fair',
        colorOjos: 'blue',
        anioNacimiento: '19BBY',
        genero: 'male',
        mundoNatal: 'https://swapi.py4e.com/api/planets/1/',
        url: 'https://swapi.py4e.com/api/people/1/',
      });
    });
  });
});