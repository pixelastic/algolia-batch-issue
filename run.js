const algoliasearch = require('algoliasearch');
const readJson = require('firost/lib/readJson');
const pMap = require('p-map');

(async function () {
  const appId = 'O3F8QXYK6R';
  const apiKey = process.env.ALGOLIA_API_KEY;

  const client = algoliasearch(appId, apiKey);
  const batchContent = await readJson('./input.json');
  const indexName = "gamemaster_minipainting_manifest_tmp"
  const index = client.initIndex(indexName)


  try {
    const response = await client.batch(batchContent);
    console.info(response);
    const taskID = response.taskID[indexName]
    console.info(taskID);
    await index.waitTask(taskID);	

    console.info('✔ Success');
  } catch (err) {
    console.info('✘ Error');
    // console.info(err);
  }
})();
