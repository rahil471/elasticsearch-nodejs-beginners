const esClient = require('./client');
const createIndex = async function(indexName){
    return await esClient.indices.create({
        index: indexName
    });
}

module.exports = createIndex;

/**
 * Example
 */
async function test(){
    try {
        const resp = await createIndex('blog');
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}
// test();