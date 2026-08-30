import { SITE } from '../config';

export const ENTITY = SITE.legalName;
export const ADDRESS = SITE.address;
export const WEB = SITE.url;
export const APP = SITE.appUrl;
export const EMAIL = SITE.email;

export const CONTACT_BLOCK = `${ENTITY}, ${ADDRESS}. Email: ${EMAIL}. Web: ${WEB}.`;
