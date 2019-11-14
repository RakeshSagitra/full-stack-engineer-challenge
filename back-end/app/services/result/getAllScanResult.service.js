import ActionBase from '../../utils/actionBase'
import { log } from '../../utils/decorators/log'
import { argumentsValidator } from '../../utils/decorators/argumentsValidator'
import models from '../../db/models'
import dbUtil from '../../db/utils'
import { groupBy, map, keys } from 'lodash'
const ScanResult = models.results
// const schema = {
//   limit: { type: 'number' },
//   offset: { type: 'number' }
// }
@log
export default class GetScanResultService extends ActionBase {
  // @argumentsValidator(schema)
  async perform({ limit, offset }) {
    let results;
    results = await ScanResult.findAll({
      limit,
      offset
    })
    return results
  }
}
