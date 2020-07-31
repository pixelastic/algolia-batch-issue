const algoliasearch = require('algoliasearch');
const readJson = require('firost/lib/readJson');

(async function () {
  const appId = 'O3F8QXYK6R';
  const apiKey = process.env.ALGOLIA_API_KEY;

  const client = algoliasearch(appId, apiKey);
  const batchContent = await readJson('./input.json');

  try {
    await client.multipleBatch(batchContent).wait();
    console.info('✔ Success');
  } catch (err) {
    console.info('✘ Error');
    console.info(err);
  }
})();
