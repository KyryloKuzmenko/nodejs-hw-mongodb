import { TEMP_UPLOAD_DIR, TEMPLATES_DIR } from "./constants/index.js";
import { initMongoConection } from "./db/initMongoConection.js";
import { setupServer } from "./server.js";
import { createDirIfNotExists } from "./utils/createDirIfNotExists.js";

const bootstrap = async () => {
    await initMongoConection();
    await createDirIfNotExists(TEMP_UPLOAD_DIR);
    await createDirIfNotExists(TEMPLATES_DIR);
    setupServer();
};

bootstrap();