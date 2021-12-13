import { createElement } from '../../../libs/DOM';
import './FormTextarea.scss';

const FormTextarea = ({ className, placeholder }) =>
  createElement(
    'textarea',
    {
      class: className,
      placeholder,
    },
    ''
  );

export default FormTextarea;
