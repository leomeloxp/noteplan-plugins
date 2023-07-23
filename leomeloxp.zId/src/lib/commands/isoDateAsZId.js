// @flow

import { logDebug } from '../../../../helpers/dev'
import { getInput } from '../../../../helpers/userInput'
import pluginJson from '../../../plugin.json'
import { getRadix } from '../helpers/getRadix'

export async function isoDateAsZId() {
  const radix = getRadix()
  const defaultDate = new Date().toISOString()
  const dateString = await getInput('Enter a date in the ISO format YYYY-MM-DDTHH:MM:SSZ (defaults to now)', 'Generate ZID', 'Date to ZID', defaultDate)
  // Adding a few fallbacks to make sure we always have a valid date
  const date = dateString ? new Date(dateString) ?? new Date() : new Date()

  const unixTimestamp = Math.floor(date.getTime() / 1000)
  const zId = unixTimestamp.toString(radix)

  logDebug(pluginJson, `isoDateAsZId() radix: ${radix}`)
  logDebug(pluginJson, `isoDateAsZId() dateString: ${String(dateString)}`)
  logDebug(pluginJson, `isoDateAsZId() date: ${date.toISOString()}`)
  logDebug(pluginJson, `isoDateAsZId() unixTimestamp: ${unixTimestamp}`)
  logDebug(pluginJson, `isoDateAsZId() zId: ${zId}`)

  Editor.insertTextAtCursor(zId)
}
