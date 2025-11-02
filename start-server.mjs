// start-server.mjs
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Registra ts-node con soporte ESM
register("ts-node/esm", pathToFileURL("./"));

// Ejecuta tu servidor principal
import("./server.ts");
