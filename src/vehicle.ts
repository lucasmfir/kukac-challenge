const fs = require('fs')
import Car from './Car'
import Mottorcycle from './Mottorcycle';

const saveVehicle = (vehicle: any) => {

  let vehicleObj

  if (vehicle.type === "car")
    vehicleObj = new Car(vehicle.model, vehicle.year, vehicle.brand)
  else if (vehicle.type === "moto")
    vehicleObj = new Mottorcycle(vehicle.model, vehicle.year, vehicle.brand, vehicle.riders)


  // let data = JSON.stringify(vehicleObj);

  let fileData = fs.readFileSync('vehicles.json', "utf-8", (err: any) => {
    if (err) throw err;
  });

  fileData = JSON.parse(fileData)

  if(fileData[vehicle.type]){
    fileData[vehicle.type].push(vehicleObj)
  }else{
    fileData[vehicle.type] = [vehicleObj]
  }

  console.log("teste -> " , fileData)


  fs.writeFileSync('vehicles.json', JSON.stringify(fileData), (err: any) => {
    if (err) throw err;
  });



  return true
}

export default saveVehicle