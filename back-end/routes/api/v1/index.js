import express from 'express'
import { resultRouter } from './result.router'

const router = express.Router()
const NAMESPACE = 'v1'

// Example API
router.use(`/${NAMESPACE}/results`, resultRouter)

export default router
