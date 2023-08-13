const fetchGithubData = async (accessToken, query) => {
  let url = query;
  if (!query.includes("https://")) {
    url = "https://api.github.com/" + query;
    console.log(url);
  }
  const { data } = await axios({
    url: url,
    method: "get",
    headers: {
      Authorization: `token ${accessToken}`,
    },
    params: {
      sort: "created",
    },
  });
  console.log(data);
  return data;
};
module.exports = { fetchGithubData };
