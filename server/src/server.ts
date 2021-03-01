import * as Koa from 'koa';
var bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
require('dotenv').config();

// Routes
import { routes } from './routes';

const app = new Koa();

// For local development allow CORS
if(process.env.NODE_ENV === "LOCAL"){
    app.use(cors());
}

app.use(bodyParser());
app.use(routes);

app.use(async (ctx) => {
    ctx.body = ctx.request.body;
});

app.listen(4000);

console.log(`Server running on port 4000`);