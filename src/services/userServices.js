import { sendGet } from '../shared';

export const getListUser = (payload: any) => sendGet('/user', payload);
