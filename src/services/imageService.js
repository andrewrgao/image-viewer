import axios from 'axios';

const baseUrl = `https://collectionapi.metmuseum.org/public/collection/v1/`

const getData = async (objectId) => {
  const request = await axios.get(`${baseUrl}objects/${objectId}`);
  return request.data;
};

const searchQuery = async (query) => {
  const response = await axios.get(`${baseUrl}search?q=${query}`);
  if (await response.data.total === 0) {
    return [];
  }
  let data = await axios.all(response.data.objectIDs.map((objectId) => axios.get(`${baseUrl}objects/${objectId}`)))
  data = await data.map((response) => response.data)
  return data;
};

const searchPopularQuery = async (query) => {
  const request = await axios.get(`${baseUrl}search?q=${query}&isHighlight=true`);
  return request.data;
};

const services = {searchQuery,searchPopularQuery}

export default services
