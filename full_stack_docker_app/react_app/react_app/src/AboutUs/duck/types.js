//Namespace
export const NAMESPACE = 'about-us';

const format = (value, type = 'action') => `${NAMESPACE}/${value}/${type}`;

//public actions
export const INCREMENT = format('INCREMENT');
export const DECREMENT = format('DECREMENT');
export const FETCH = format('fetch');
export const GET_API_DATA = format('get-api-data');
export const POST_API_STATUS = format('post-api-status');
export const PUT_API_STATUS = format('put-api-status');
export const DELETE_API_STATUS = format('delete-api-status');
export const GET_API_DATA_WITH_DELAY = format('get-api-data-with-delay');