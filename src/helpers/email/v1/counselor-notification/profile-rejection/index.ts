import {getBody} from './body';
import {getFooter} from './footer';
import {getHeader} from './header';
import {getText} from './text';

const counselorProfileRejection = (values: any) => {
  const html = getHeader({}) + getBody({placeholders: values}) + getFooter({});
  const text = getText({placeholders: values});
  return {
    html,
    text
  };
};

export {counselorProfileRejection};
