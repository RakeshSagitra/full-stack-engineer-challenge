import apiRoutes from './api'

const initRoutes = (app) => {
  app.use(apiRoutes)

  app.use((err, req, res, next) => {
    if (err) {
      res.status(err.statusCode || err.status || 500).send(err || {})
      console.error(err)
    } else {
      res.header('Access-Control-Allow-Origin', 'http://localhost:4000/api/v1') // update to match the domain you will make the request from
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      next()
    }
  })

  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
  })
}

export default initRoutes
