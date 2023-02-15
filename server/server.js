import express from "express";
import cors from "cors";
const app = express();

const itens = [
  {
    id: 1,
    name: "Carro",
  },
  {
    id: 2,
    name: "Bicicleta",
  },
  {
    id: 3,
    name: "Moto",
  },
  {
    id: 4,
    name: "Skate",
  },
];

app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
  })
);

app.get("/", (req, res) => {
  res.send(itens);
});

app.listen(3000, () => {
  console.log("O servidor está rodando.");
});
