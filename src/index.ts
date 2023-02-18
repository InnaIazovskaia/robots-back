import "./loadEnvironment.js";
import createDebug from "debug";
import chalk from "chalk";
import startServer from "./server/startServer.js";
import connectDataBase from "./database/connectDatabase.js";

const debug = createDebug("robots:root");

const port = process.env.PORT ?? 4000;
const connectionString = process.env.MONGODB_CONNECTION_URL!;

try {
  await startServer(+port);
  debug(chalk.green.bold(`Server is listening on http://localhost:${port}`));

  await connectDataBase(connectionString);
  debug(chalk.yellowBright.bold("Database connected"));
} catch (error) {
  debug(chalk.red.bold(`Error: ${(error as Error).message}`));
}
