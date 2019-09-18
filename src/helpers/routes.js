const serverUrl = 'https://api.unsplash.com/';
const clientId = '94cbcaaf5d975c1f6d44d529eebd9b9c2ac5275908d8664c73dd1db20fb21f9b';
const clientSecret = 'eff8f5c3c7ecf36acfc76dad2264fd10a245bede300aae1fb049f1c0754fa2ec';

const searchResource = 'search/photos/';
const searchQuery = query => `&query=${query}`;
const searchPagination = (page, perPage) => `?page=${page}&per_page=${perPage}`;
export const searchApiUrl = (query, page, perPage) => {
    return `${serverUrl}${searchResource}${searchPagination(page, perPage)}${searchQuery(query)}&client_id=${clientId}`;
}

const homeResource = 'photos/random';
const homeFiltering = '?orientation=landscape';
export const homeApiUrl = () => `${serverUrl}${homeResource}${homeFiltering}&client_id=${clientId}`;

//used for going to authorization outer page
const authUrl = 'https://unsplash.com/oauth/authorize?';
const authScope = 'public+write_likes+read_user';

const authRedirectURl = 'https://ejaworska.github.io/photo-gallery/login';
export const authorizationUrl = ()=> {
    return `${authUrl}client_id=${clientId}&redirect_uri=${authRedirectURl}&response_type=code&scope=${authScope}`;
}

//used in post request for receiving access token
const tokenRedirectURl = 'https://ejaworska.github.io/photo-gallery/login';
const accessTokenEntry = 'https://unsplash.com/oauth/token?';
export const accessTokenUrl = (code) => {
    return `${accessTokenEntry}client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${tokenRedirectURl}&code=${code}&grant_type=authorization_code`;
};

export const photoUrl = id => {
    return `${serverUrl}photos/${id}/like`;
}

const likedPhotosEntry = username => `users/${username}/likes`;
const likedPagination = (page, perPage) => `page=${page}&per_page=${perPage}`
export const getLikedPhotosUrl = (username, page, perPage, orderBy) => {
    return `${serverUrl}${likedPhotosEntry(username)}?${likedPagination(page, perPage)}&order_by=${orderBy}`
}

export const currentUserUrl = `${serverUrl}me`;


