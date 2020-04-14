import axios from "axios";

const baseUrl = "https://pixabay.com/api/";
const API_KEY = "?key=15581732-f0b235014b6a569c91699f2a7";

export default {
  page: 1,
  perPage: 12,

  async fetchImg(query) {
    const requestParams = `&q=${query}&page=${this.page}&per_page=${this.perPage}&image_type=all&orientation=horizontal`;

    const { data } = await axios.get(baseUrl + API_KEY + requestParams);

    return data;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
