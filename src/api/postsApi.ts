import axios from 'axios';

const PAGE_SIZE = 10;

export const fetchPosts = async (page: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${
        (page - 1) * PAGE_SIZE
      }&_limit=${PAGE_SIZE}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
