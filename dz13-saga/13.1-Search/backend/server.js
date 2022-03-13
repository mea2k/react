const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cors());
app.use(koaBody({ json: true }));

let nextId = 1;
const services = [
    { id: nextId++, name: 'Замена стекла', price: 21000, content: 'Стекло оригинал от Apple' },
    { id: nextId++, name: 'Замена дисплея', price: 25000, content: 'Дисплей оригинал от Foxconn' },
    { id: nextId++, name: 'Замена аккумулятора', price: 4000, content: 'Новый на 4000 mAh' },
    { id: nextId++, name: 'Замена микрофона', price: 2500, content: 'Оригинальный от Apple' },
];

const router = new Router();

function fortune(ctx, body = null, status = 200, successProb = 0.5) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 1 - successProb) {
                ctx.response.status = status;
                ctx.response.body = body;
                resolve();
                return;
            }

            reject(new Error(ctx.method + ' ' + ctx.url + ' - Something bad happened'));
        }, 2 * 1000);
    })
}

router.get('/api/search', async (ctx, next) => {
    const { name, price } = ctx.request.query;
    var body = [];
    if (name)
        body = services.filter(o => o.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    if (price)
        body = [...body, ...services.filter(o => Number(o.price) >= Number(price) && body.indexOf(o) === -1)];

    return fortune(ctx, body);
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
