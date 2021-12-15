import { createElement } from '../../../libs/DOM';
import './FormTextarea.scss';

const FormTextarea = ({
  className = 'default-form-input',
  placeholder,
  name,
  labelText = '',
}) =>
  createElement('label', {}, [
    labelText,
    createElement('textarea', {
      class: className,
      placeholder,
      name,
    }),
  ]);

export default FormTextarea;
