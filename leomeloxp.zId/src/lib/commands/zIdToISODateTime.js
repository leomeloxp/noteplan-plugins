// @flow

import { logDebug } from '../../../../helpers/dev'
import { getInput } from '../../../../helpers/userInput'
import pluginJson from '../../../plugin.json'
import { getRadix } from '../helpers/getRadix'

export async function zIdToISODateTime() {
  const radix = getRadix()
  const zID = await getInput('Enter zID', 'Convert', 'ZID to ISO Date', '000000')
  const parsedZId = parseInt(zID, radix).toString()
  const unixTimestamp = parseInt(parsedZId, 10) * 1000
  const date = new Date(unixTimestamp).toISOString()

  logDebug(pluginJson, `zIdToISODateTime() radix: ${radix}`)
  logDebug(pluginJson, `zIdToISODateTime() zID: ${String(zID)}`)
  logDebug(pluginJson, `zIdToISODateTime() parsedZId: ${parsedZId}`)
  logDebug(pluginJson, `zIdToISODateTime() unixTimestamp: ${unixTimestamp}`)
  logDebug(pluginJson, `zIdToISODateTime() date: ${date}`)

  Editor.insertTextAtCursor(date)
}
