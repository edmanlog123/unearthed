import pg from 'pg'
import './dotenv.js'

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: process.env.PGHOST && process.env.PGHOST !== 'localhost' ? {
        rejectUnauthorized: false
    } : false
}

export const pool = new pg.Pool(config)

