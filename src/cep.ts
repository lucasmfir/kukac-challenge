const fetch = require('node-fetch');

const cep = async (ceps: Array<any>): Promise<any> => {

  let addressArray: Array<any> = []

  for(let cep of ceps){
    try {
      const addressResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const resp = await addressResponse.json();
      
      addressArray.push(resp)
  
    } catch (e) {
      addressArray.push(false)

    }
  }

  return addressArray
  
}

export default cep