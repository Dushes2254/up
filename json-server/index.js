const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

server.use(async (_, __, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.use(jsonServer.defaults({
  bodyParser: true,
}));

// eslint-disable-next-line consistent-return
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
  const { users } = db;

  const userFromDB = users.find((user) => user.username === username && user.password === password);

  if (userFromDB) {
    return res.json(userFromDB);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.log('Json-server is running on port 8000');
});
