// @flow

import { logDebug } from '../../../../helpers/dev'
import { getInput } from '../../../../helpers/userInput'
import pluginJson from '../../../plugin.json'
import { getRadix } from '../helpers/getRadix'

export async function dateAsZId() {
  const radix = getRadix()
  const defaultDate = new Date().toISOString().split('T')[0]
  const dateString = await getInput('Enter a date in the format YYYY-MM-DD (defaults to today)', 'Generate ZID', 'Date to ZID', defaultDate)
  // Adding a few fallbacks to make sure we always have a valid date
  const date = dateString ? new Date(dateString) ?? new Date() : new Date()

  const unixTimestamp = Math.floor(date.getTime() / 1000)
  const zId = unixTimestamp.toString(radix)

  logDebug(pluginJson, `dateAsZId() radix: ${radix}`)
  logDebug(pluginJson, `dateAsZId() dateString: ${String(dateString)}`)
  logDebug(pluginJson, `dateAsZId() date: ${date.toISOString()}`)
  logDebug(pluginJson, `dateAsZId() unixTimestamp: ${unixTimestamp}`)
  logDebug(pluginJson, `dateAsZId() zId: ${zId}`)

  Editor.insertTextAtCursor(zId)
}
