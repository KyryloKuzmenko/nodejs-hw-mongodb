import { initMongoConection } from "./db/initMongoConection.js";
import { setupServer } from "./server.js";

const bootstrap = async () => {
    await initMongoConection();
    setupServer();
};

bootstrap();