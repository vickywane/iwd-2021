import axios from 'axios';

export const fetchImage = async (id) => {
  try {
    const req = await axios.get(
      `${process.env.REACT_APP_WORDPRESS_ENDPOINT}/media/${id}`
    );

    const { source_url } = await req.data

    return source_url;
  } catch (e) {
    console.log(`Error fetching image ${e}`);
  }
};

export const stripString = (str) => {
  let strippedString = str.replace(/(<([^>]+)>)/gi, "");

  return strippedString;
};
