import { mount } from './libs/DOM';
import { CREATE_MAIN_ID } from './constants/elementSelectors';
import App from './App';
import AddRecipeModal from './components/FoodPage/Header/AddRecipeModal';
import './assets/scss/styles.scss';

mount(document.getElementById('root'), App());

mount(document.getElementById(CREATE_MAIN_ID), AddRecipeModal());
