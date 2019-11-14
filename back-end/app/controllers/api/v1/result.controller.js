import CreateScanResult from '../../../services/result/createScanResult.service'
import GetScanResult from '../../../services/result/getScanResultById.service'
import GetAllScanResults from '../../../services/result/getAllScanResult.service'
// import Responder from '../../../../server/expressResponder'

export default class UserController {
  static async createScanResult (req, res) {
    const [response, err] = await CreateScanResult.run({ ...req.body })
    if (response) {
      return global.createdResponse(res, response)
      // Responder.sendJSONResponse(res, response)
    } else {
      throw global.badRequestError('Scan result not created', err)
      // res.boom.badRequest('Scan result not created', err)
    }
  }

  static async getScanResultById (req, res) {
    const [response, err] = await GetScanResult.run({ ...req.params, ...req.query, ...req })
    if (response) {
      return global.okResponse(res, response)
      // Responder.sendJSONResponse(res, response)
    } else {
      throw global.badRequestError('cannot get result', err)
      // res.boom.badRequest('cannot get result', err)
    }
  }

  static async getAllScanResults (req, res) {
    const [response, err] = await GetAllScanResults.run({ ...req.params, ...req.query, ...req })
    if (response) {
      return global.okResponse(res, response)
      // Responder.sendJSONResponse(res, response)
    } else {
      throw global.badRequestError('cannot get results', err)
      // res.boom.badRequest('cannot get results', err)
    }
  }
}
