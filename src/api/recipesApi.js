import { BASE_API_URL } from '../config';

const fetchRecipes = async () => {
  const response = await fetch(`${BASE_API_URL}/recipes`);
  return response.json();
};

const addRecipe = async (data) => {
  const response = await fetch(`${BASE_API_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export { fetchRecipes, addRecipe };
