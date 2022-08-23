import axios from "axios";

export const fetchAllArticles = (topic) => {
  return axios
    .get(`https://be-nc-news-je123.herokuapp.com/api/articles`, {
      params: { topic },
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchTopics = () => {
  return axios
    .get(`https://be-nc-news-je123.herokuapp.com/api/topics`)
    .then(({ data }) => {
      return data;
    });
};
