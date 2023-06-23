import * as process from 'process';

export default () => ({
  database: {
    name: process.env.DB_NAME,
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    port: parseInt(process.env.DB_PORT, 10),
  },
  keyJwt: process.env.JWT_SECRET,
});
