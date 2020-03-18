import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BaseForm } from 'uniforms';

const Bootstrap4 = (parent: any): any => {
  class _ extends parent {
    static Bootstrap4 = Bootstrap4;

    static displayName = `Bootstrap4${parent.displayName}`;

    static propTypes = {
      ...parent.propTypes,

      grid: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
        PropTypes.string,
      ]),
    };

    getChildContextState() {
      return {
        ...super.getChildContextState(),
        grid: this.props.grid,
      };
    }

    getNativeFormProps() {
      const error = this.getChildContextError();
      const {
        className,
        grid, // eslint-disable-line no-unused-vars

        ...props
      } = super.getNativeFormProps();

      return {
        ...props,
        className: classnames('form', { error }, className),
      };
    }
  }

  return _;
};

export default Bootstrap4(BaseForm);
