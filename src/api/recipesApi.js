import { BASE_API_URL } from '../config';

const fetchRecipes = async () => {
  const response = await fetch(`${BASE_API_URL}/recipes`);
  return response.json();
};

const fetchRecipe = async (id) => {
  const response = await fetch(`${BASE_API_URL}/recipes/${id}`);
  return response.json();
};

const searchRecipes = async (query) => {
  const response = await fetch(`${BASE_API_URL}/recipes/?q=${query}`);
  return response.json();
};

const addRecipe = async (recipe) => {
  const response = await fetch(`${BASE_API_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  });

  return response.json();
};

export { fetchRecipes, fetchRecipe, searchRecipes, addRecipe };
