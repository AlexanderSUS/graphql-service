import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../const/queryParams';
import { QueryParams } from '../types/common';

const getQueryParams = (queryParams?: QueryParams) => `?limit=${queryParams?.limit || DEFAULT_LIMIT}&offset=${queryParams?.offset || DEFAULT_OFFSET}`;

export default getQueryParams;
