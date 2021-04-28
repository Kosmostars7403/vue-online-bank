const ERROR_CODES = {
  EMEIL_NOT_FOUND: 'Email not found',
  INVALID_PASSWORD: 'Invalid password',
  auth: 'Please, login at first'
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error'
}
