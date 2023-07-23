// @flow

import { logDebug } from '../../../../helpers/dev'
import pluginJson from '../../../plugin.json'

/**
 * Get the radix from plugin settings as a number between 2 and 36
 */
export function getRadix(): number {
  const dataStoreRadix = DataStore.settings.radix
  const radix = Math.max(2, Math.min(parseInt(dataStoreRadix ?? 36, 10), 36))

  logDebug(pluginJson, `getRadix() dataStoreRadix: ${dataStoreRadix}`)
  logDebug(pluginJson, `getRadix() radix: ${radix}`)

  return radix
}
