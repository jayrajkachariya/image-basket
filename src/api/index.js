let URL = 'http://localhost:5000/get-images/';
// let URL = 'https://image-basket-api.herokuapp.com/get-images/';

const fetchImages = async ({ query, page }) => {
  const res = await fetch(URL, {
    method: 'post',
    body: JSON.stringify({
      search: query,
      page: page
    })
  });
  const data = await res.json();
  if (data.success) {
    return Promise.resolve(data.data);
  } else {
    return Promise.reject(data.message);
  }
};

export { fetchImages };
