import { expect, tap } from 'tapbundle'
import * as appmanager from '../ts/index'

tap.test('first test', async () => {
  console.log(appmanager.standardExport)
})

tap.start()
