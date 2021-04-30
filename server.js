
const express = require('express');
const path = require('path')
const app = express();


app.use('/', serveStatic(path.join(__dirname,'/dist')))

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

