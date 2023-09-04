const express = require('express');
const morgan = require('morgan');

const breadcrumbsRouter = require('./router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', breadcrumbsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`✅ 서버가 http://localhost:${port}/ 에서 활성화되었습니다.`);
});
