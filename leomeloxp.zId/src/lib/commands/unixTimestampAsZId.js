// @flow

import { logDebug } from '../../../../helpers/dev'
import pluginJson from '../../../plugin.json'
import { getRadix } from '../helpers/getRadix'

export function unixTimestampAsZId() {
  // Dividing by 1000 because we want seconds, not milliseconds
  const radix = getRadix()
  const unixTime = Math.floor(Date.now() / 1000)
  const zId = unixTime.toString(radix)

  logDebug(pluginJson, `'unixTimestampAsZId(): unixTime ${unixTime}`)
  logDebug(pluginJson, `'unixTimestampAsZId(): zId ${zId}`)
  Editor.insertTextAtCursor(zId)
}
