import "./loadEnvironment.js";
import createDebug from "debug";
import chalk from "chalk";
import startServer from "./server/startServer.js";

const debug = createDebug("robots:root");

const port = process.env.PORT ?? 4000;

try {
  await startServer(+port);
  debug(chalk.green.bold(`Server is listening on http://localhost:${port}`));
} catch (error) {
  debug(chalk.red.bold(`Error: ${(error as Error).message}`));
}
