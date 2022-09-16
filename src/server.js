import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './renderers/jsxRenderer';
import indexRouter from './routers/indexRouter';

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));

app.use(async (req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server started! \nWe cruisin' on: ${PORT}`));
