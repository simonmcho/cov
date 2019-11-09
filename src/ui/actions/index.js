import { INIT, UPLOAD } from './action-names'

export const init = (payload = []) => ({ type: INIT, payload })
export const uploadCSV = (payload = []) => ({ type: UPLOAD, payload })
