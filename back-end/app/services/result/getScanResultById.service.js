import ActionBase from '../../utils/actionBase'
import { log } from '../../utils/decorators/log'
import models from '../../db/models'
const Result = models.results
// const schema = {
//   limit: { type: 'number' },
//   offset: { type: 'number' }
// }
@log
export default class GetResultByIdService extends ActionBase {
  // @argumentsValidator(schema)
  async perform({ resultId }) {
    let results;

    results = await Result.findOne({
      where: {
        id: resultId,
      }
    })

    return results
  }
}
