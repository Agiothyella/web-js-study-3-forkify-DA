import timeout from '../timeout';
import { TIMEOUT_SEC } from '../../config/config';

const getJSON = async function (url) {
  try {
    const fetchUrl = fetch(url);
    const res = await Promise.race([fetchUrl, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};

export default getJSON;
