// Write html for footer ? What ?

export const getFooter = (data: {footer?: string}) => {
  const defaultFooter = ``;
  return data.footer || defaultFooter;
};
