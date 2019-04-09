import express from "express";
import palindrome from "./palindrome";
import change from "./change";
import cep from "./cep";
import saveVehicle from "./vehicle";

const server = express();

const invalidDataMsg = "Dados informados inválidos"


// var options = {
//   // dotfiles: 'ignore',
//   // etag: false,
//   // extensions: ['htm', 'html'],
//   // index: false,
//   // maxAge: '1d',
//   // redirect: false,
//   setHeaders: function (res: { set: (arg0: string, arg1: number) => void; }) {
//     res.set('x-timestamp', Date.now())
//   }
// }

// server.use(express.static('public', options))

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

server.get("/palindrome", (req, res) => {

  let { begin, end } = req.query

  begin = parseInt(begin)
  end = parseInt(end)

  if ((begin === 0 || begin) && end >= begin) {
    const palindromeResp = palindrome(begin, end)
    return res.json({data:palindromeResp});
  } else {
    return res.json({error:invalidDataMsg});
  }
});


server.get("/change", (req, res) => {

  let { total, money } = req.query

  total = parseInt(total)
  money = parseInt(money)

  if (total > 0 && money >= total) {
    const changeResp = change(total, money)
    return res.json({data:changeResp});
  } else {
    return res.json({error:invalidDataMsg});
  }
});

server.get("/cep", async (req, res) => {

  let { ceps } = req.query
  
  const cepsArray = ceps ? ceps.split(",") : null

  if (cepsArray && cepsArray.length <= 5) {
    const cepsResp = await cep(cepsArray)
    return res.json({data:cepsResp});

  } else {
    return res.json(`${invalidDataMsg}`);
  }
});

server.get("/vehicle", (req, res) => {

  let vehicle = { ...req.query }
  
  if (vehicle) {
    const vehicleResp = saveVehicle(vehicle)
    return res.json({data:vehicleResp});

  } else {
    return res.json({error:invalidDataMsg});
  }
});

export default server;