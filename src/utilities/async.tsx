import axios from 'axios';
import { API_URL } from '../utilities/constants';
import { Options, Pagination } from '../types';
import { InitialPagination } from '../reducers';

interface Props {
  options: Options;
  pagination?: Pagination;
}

export const fetchMeteoristList = ({ options, pagination = InitialPagination }: Props) => {
  // example query
  // ?&$order=mass DESC&$where=lower(name) like '%25aa%25' AND mass > 100 AND mass < 1000 &$limit=50&$offset=50

  let query = `?$order=${options.ordered.by} ${
    options.ordered.ascending ? 'ASC' : 'DESC'
  }&$where=`;

  let queryList = [];
  if (options.searchQuery !== '') {
    queryList.push(
      `lower(name) like '%25${options.searchQuery.toLowerCase()}%25'`
    );
  }
  if (options.massRange.min !== '') {
    queryList.push(`mass > ${options.massRange.min}`);
  }
  if (options.massRange.max !== '') {
    queryList.push(`mass < ${options.massRange.max}`);
  }

  query += queryList.join(' AND ');

  query += `&$limit=${pagination.itemsPerPage}&$offset=${pagination.page *
    pagination.itemsPerPage}`;

  console.log(API_URL);
  console.log(query);
  return axios.get(API_URL.concat(query));
};
