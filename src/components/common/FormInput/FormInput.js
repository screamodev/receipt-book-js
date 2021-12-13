import { createElement } from '../../../libs/DOM';
import './FormInput.scss';

const FormInput = ({ className, placeholder }) =>
  createElement('input', {
    class: className,
    placeholder,
  });

export default FormInput;
