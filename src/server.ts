import express from "express";
import palindrome from "./palindrome";
import change from "./change";

const server = express();
const invalidDataMsg = "Dados informados inválidos"

server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

server.get("/palindrome", (req, res) => {

  let { begin, end } = req.query

  begin = parseInt(begin)
  end = parseInt(end)

  if ((begin === 0 || begin) && end >= begin) {
    const palindromeResp = palindrome(begin, end)
    res.send(`${palindromeResp}`);
  } else {
    res.send(`${invalidDataMsg}`);
  }
});


server.get("/change", (req, res) => {

  let { total, money } = req.query

  total = parseInt(total)
  money = parseInt(money)

  if (total > 0 && money >= total) {
    const changeResp = change(total, money)
    res.send(`${changeResp}`);
  } else {
    res.send(`${invalidDataMsg}`);
  }
});


export default server;