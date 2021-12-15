import { createElement } from '../../../libs/DOM';
import './FormInput.scss';

const FormInput = ({ className, placeholder, name, labelText = '' }) =>
  createElement('label', {}, [
    labelText,
    createElement('input', {
      class: className,
      placeholder,
      name,
    }),
  ]);

export default FormInput;
