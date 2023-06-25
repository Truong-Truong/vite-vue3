import { get, post } from '@/services/api/api';
import ApiTop from '@/constants/ApiTop';

export function getBase() {
  return get(
    `${ApiTop.GetBase}`
  );
}

export function postBase({ name }) {
  const body = {
    _Token: {
      key: window.CSRF_TOKEN,
    },
    name,
  };
  return post(ApiTop.PostBase, body);
}
