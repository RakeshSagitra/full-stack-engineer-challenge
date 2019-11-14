import express from 'express'
import resultController from '../../../app/controllers/api/v1/result.controller'

const args = { mergeParams: true }
const resultRouter = express.Router(args)

resultRouter.route('')
  .post(resultController.createScanResult)

resultRouter.route('')
  .get(resultController.getAllScanResults)

resultRouter.route('/:resultId')
  .get(resultController.getScanResultById)

export { resultRouter }
