import PropTypes from 'prop-types';

import { Wrapper, Buttons, ButtonSvg } from './Button.styled';

export const Button = ({ value, type = 'button', onBtnClick }) => {
  return (
    <Wrapper>
      <Buttons type={type} onClick={() => onBtnClick()}>
        <ButtonSvg />
        {value}
      </Buttons>
    </Wrapper>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onBtnClick: PropTypes.func,
};
export default Button;
