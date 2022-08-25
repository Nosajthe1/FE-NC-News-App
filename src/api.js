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

export const fetchArticleByID = (article_id) => {
  return axios
    .get(`https://be-nc-news-je123.herokuapp.com/api/articles/${article_id}`, {
      params: { article_id },
    })
    .then(({ data }) => {
      return data;
    });
};

export const patchVotes = (article_id, inc_votes) => {
  return axios
    .patch(
      `https://be-nc-news-je123.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: inc_votes }
    )
    .then(({ data }) => {
      return data;
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(
      `https://be-nc-news-je123.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};
