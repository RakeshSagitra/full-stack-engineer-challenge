import ActionBase from '../../utils/actionBase'
import { log } from '../../utils/decorators/log'
import { argumentsValidator } from '../../utils/decorators/argumentsValidator'
import models from '../../db/models'
const uuidv4 = require('uuid/v4');
const ScanResult = models.results

const schema = {
  status: { type: 'string' },
  repositoryName: { type: 'string' },
  queuedAt: { type: 'string' },
  scanningAt: { type: 'string' },
  finishedAt: { type: 'string' }
}

@log
export default class CreateScanResultService extends ActionBase {
  @argumentsValidator(schema)
  async perform(data) {
    data.resultUniqueId = uuidv4();
    console.log(data)
    const result = await ScanResult.create(data)
    return result
  }
}
