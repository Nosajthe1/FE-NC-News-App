import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://be-nc-news-je123.herokuapp.com/api",
});

export const fetchAllArticles = (search) => {
  let path = "/articles"
  if (search) path += search;
  return axios
    .get(`https://be-nc-news-je123.herokuapp.com/api/articles`)
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



export const postComment = (article_id, body, username) => {
  const responseBody = { username, body };
  return axios
    .post(
      `https://be-nc-news-je123.herokuapp.com/api/articles/${article_id}/comments`,
      responseBody
    )
    .then(({ data }) => { 
      return data;
    });
};


export const getUsers = () => {
  return axios
    .get(`https://be-nc-news-je123.herokuapp.com/api/users`)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(`https://be-nc-news-je123.herokuapp.com/api/comments/${comment_id}`)
    .then(() => {
      return "deleted!";
    });
};

export const getData = (search) => {
  return articlesApi.get(`${search}`).then(({ data }) => {
    return data;
  });
};
