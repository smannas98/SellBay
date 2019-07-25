const express = require('express')
const app = express()
const port = 4000
const staticRoutes = require('routes/static');

app.use(staticRoutes);

app.listen(port, () => console.log(`server listening on port ${port}`))
