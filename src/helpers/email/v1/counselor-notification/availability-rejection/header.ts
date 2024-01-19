import {style} from './style';
export const getHeader = (data: {
  header?: string;
  title?: string;
  style?: string;
}) => {
  const defaultHeader = `
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if gte mso 12]><br /> <![endif]--> <!--[if (gte mso 9)|(IE)]> 
    <style type="text/css"> table { border-collapse: collapse; border-spacing: 0; } a{ text-decoration: none; color:#} </style>
    <![endif]--> 
    <title>${data.title || 'Title'}</title>
   ${data.style || style()}
 </head>`;
  return data.header || defaultHeader;
};
