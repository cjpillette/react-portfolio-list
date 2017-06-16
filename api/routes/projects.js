const express = require('express')

const router = express.Router()

const projects = [
  {
    title: 'Portfolio website',
    skills: ['html', 'css', 'design', 'wireframing']
  },
  {
    title: 'Ruby command line app',
    skills: ['rspec', 'stuff']
  },
  {
    title: 'Rails two sided marketplace',
    skills: ['ruby', 'rails', 'html', 'css', 'design', 'wireframing', 'user stories']
  },
  {
    title: 'React + NodeJS + MongoDB client project',
    skills: ['javascript', 'nodeJS', 'express', 'react', 'html', 'css', 'design', 'wireframing', 'user stories']
  }
]

router.get('/projects', (req, res) => {
  res.json(projects)
})

module.exports = router
//export default router
