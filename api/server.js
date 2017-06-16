const express = require('express')
const projectsRouter = require('./routes/projects')

//Create our Express HTTP server
const server = express()


//Add routes
server.use('/api', projectsRouter)

//Start server
const port = 7000

server.listen(port, () => {
  console.log(`API server is running on port ${port}`)
})
