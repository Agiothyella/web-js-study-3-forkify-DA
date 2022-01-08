import timeout from '../timeout';
import { TIMEOUT_SEC } from '../../config/config';

const sendJSON = async function (url, uploadData) {
  try {
    const fetchUrl = fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchUrl, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};

export default sendJSON;
