import fs from "fs";
import compile from "./src/compile.js";

// const input = fs.readFileSync("./scripts/variable.b", {
const input = fs.readFileSync("./scripts/loop.b", {
  encoding: "utf-8",
});

const result = compile(input);

console.log({ result });
