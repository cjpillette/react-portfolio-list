const express = require('express')

const router = express.Router()

const projects = [
  {
    title: 'Portfolio website'
  },
  {
    title: 'Ruby command line app'
  },
  {
    title: 'Rails two sided marketplace'
  },
  {
    title: 'React + NodeJS + MongoDB client project'
  }
]

router.get('/projects', (req, res) => {
  res.json(projects)
})

module.exports = router
//export default router
