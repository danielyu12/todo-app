const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const response = require('koa/lib/response');
const fs = require('fs');

const app = new Koa();
const router = new Router();
app.use(cors());
app.use(bodyParser());

router.post('/update', (ctx) => {
  if (ctx.request.body.type === 'delete') {
    const contents = fs.readFileSync('test.txt', 'utf-8').split('\n');
    const index = contents.indexOf(ctx.request.body.message);
    contents.splice(index, 1);
    fs.truncate('test.txt', 0, function () {});
    contents.forEach((element) => {
      fs.appendFile('test.txt', element + '\n', { flag: 'a+' }, (err) => {});
    });
  } else if (
    ctx.request.body.type === 'create' &&
    ctx.request.body.message != ''
  ) {
    fs.appendFile(
      'test.txt',
      ctx.request.body.message + '\n',
      { flag: 'a+' },
      (err) => {}
    );
  } else {
    console.log('error');
  }
});

router.get('/update', (ctx) => {
  const contents = fs.readFileSync('test.txt', 'utf-8').split('\n');
  ctx.response.body = {
    todos: contents,
  };
  ctx.response.status = 200;
  // console.log(ctx.response);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000);
