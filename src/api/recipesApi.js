import { BASE_API_URL } from '../config';

const fetchRecipes = async () => {
  const response = await fetch(`${BASE_API_URL}/recipes`);
  return response.json();
};

export { fetchRecipes };
