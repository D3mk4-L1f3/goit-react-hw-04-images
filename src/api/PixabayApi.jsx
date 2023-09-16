import axios from 'axios';

const PIXABAY_API_KEY = '38987421-e938289573b3f0089dcf530c5';
const PIXABAY_BASE_URL = 'https://pixabay.com/api/';

export async function getPhoto(searchValue, page) {
  try {
    const response = await axios.get(`${PIXABAY_BASE_URL}`, {
      params: {
        key: PIXABAY_API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: page,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Pixabay API returned status code ${response.status}`);
    }

    if (response.data.hits.length === 0) {
      throw new Error('No results found!');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}
