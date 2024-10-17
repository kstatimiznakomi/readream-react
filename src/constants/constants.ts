export const baseUrl = 'http://localhost:3000/search?'
export const apiSearchUrl = 'http://localhost:8000/api/v1/search'
export const searchParams = document.URL.slice(document.URL.indexOf('?'), document.URL.length)
export const searchStart = '/search'
export const backendPort = 8000
export const expressBaseApi = '/api/v1'
export const page = document.URL.substring(document.URL.lastIndexOf('/') + 1)