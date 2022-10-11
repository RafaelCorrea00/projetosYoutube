import axios from 'axios'

// minha chave 5f36e4973a4f6eae4e42ee3a8d34abae7510bac3
export const key = "5f36e4973a4f6eae4e42ee3a8d34abae7510bac3"

const api = axios.create({
    // bitly
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api