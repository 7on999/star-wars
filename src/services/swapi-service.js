export default class swapiService {
    _baseAPI = `https://swapi.dev/api/`;
   
     async getResource(url){
         const res = await fetch(`${this._baseAPI}${url}`);
         if (!res.ok) {
         throw new Error(`Could not fetch ${url}, receiver ${res.status}`)
         }
         const body = await res.json();
         return body
     }
   
      getPerson=async(id)=> {
       const person = await this.getResource(`people/${id}`);
       return this._transformPerson(person);
     }

     _transformPerson=(person) =>{
       return {
        gender:person.gender,
        height: person.height,
        mass: person.mass,
        name:person.name,
        skinColor:person.skin_color,
        birthYear:person.birth_year,
        eyeColor:person.eye_color,
        id:this._exctractId(person),
       }
     }
   
      getAllPeople=async()=> {
       const res = await this.getResource(`people/`);
      return res.results.map(this._transformPerson)
     }
   
     getPlanet=async(id)=> {
       const planet = await this.getResource(`planets/${id}`);
       return this._transformPlanet(planet);
     }
   
     _exctractId(item){
       const idRexExp= /\/([0-9]*)\/$/;
       return item.url.match(idRexExp)[1]
     }
      _transformPlanet=(planet)=>{
        return {
          id: this._exctractId(planet),
          name:planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter,
        }
      }
      getAllPlanets=async()=> {
       const res = await this.getResource(`planets/`);
      return res.results.map(this._transformPlanet)
      
     }
   
      getStarship = async(id)=> {
       const starship = await this.getResource(`starships/${id}`);
       return this._transformStarship(starship);
     }
   
      _transformStarship=(starship)=>{
        return {
          lengthOfStarship: starship.length,
          consumables: starship.consumables,
          costInCredits: starship.cost_in_credits,
          crew: starship.crew,
          name: starship.name,
          model: starship.model,
          manufacturer:starship.manufacturer,
          passengers: starship.passengers,
          cargoCapacity: starship.cargo_capacity,
          id: this._exctractId(starship),
         }
      }

      getAllStarships=async()=> {
       const res = await this.getResource(`starships/`);
      return res.results.map(this._transformStarship)
     }
   
   }