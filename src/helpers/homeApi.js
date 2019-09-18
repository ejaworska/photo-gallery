import { homeApiUrl } from './routes'
import { get } from './api'

export const getRandomImage = () => {
    return get(homeApiUrl());
}

