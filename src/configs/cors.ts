import _ from 'lodash';

const envs: any = process.env;
const originCSPDomains: string[] = envs?.CSP_DOMAIN_ALLOW?.split('||');
export const origin = ['self', "https://*.zoho.in", "https://*.zoho.com", ...originCSPDomains];
export const CORS = {
    credentials: true,
    maxAge: 60 * 60 * 24,
    exposedHeaders: [
        'Cache-Control',
        'Content-Language',
        'Content-Type',
        'Expires',
        'Last-Modified',
        'Pragma'
    ],
    allowedHeaders: ['Content-Type', 'Origin', 'Authorization'],
    methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
    origin: _.map(origin, whiteUrl => new RegExp(whiteUrl)),
    optionsSuccessStatus: 200
};
