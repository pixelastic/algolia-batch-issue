const algoliasearch = require('algoliasearch');
const readJson = require('firost/lib/readJson');

(async function () {
    const appId = 'O3F8QXYK6R',
    const apiKey = process.env.ALGOLIA_API_KEY,
    // const indexName: 'gamemaster_minipainting_manifest_tmp';

  const client = algoliasearch(appId, apiKey);
  const batchContent = await readJson('./input.json');

  try {
    await client.multipleBatch(chunk).wait();
  } catch (err) {
    console.info(err);
  }
})();
