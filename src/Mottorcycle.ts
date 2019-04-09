import IVehicle from './IVehicle'

class Mottorcycle implements IVehicle {
  wheels = 2
  doors = 0

  constructor(public model: string, public year: number, public brand: string, public riders: number) {
    this.model = model
    this.year = year
    this.brand = brand
    this.riders = riders
  }
}

export default Mottorcycle