import env from 'dotenv';
import envvar from 'env-var';

env.config();  // Esta línea asegura que el archivo .env se cargue correctamente

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
};
