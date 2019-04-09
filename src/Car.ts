import IVehicle from './IVehicle'

class Car implements IVehicle {
  doors: number;

  constructor(public model: string, public year: number, public brand: string) {
    this.model = model
    this.year = year
    this.doors = 4
    this.brand = brand
  }
}

export default Car