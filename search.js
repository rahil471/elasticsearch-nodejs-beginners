const esClient = require('./client');
const searchDoc = async function(indexName, mappingType, payload){
    return await esClient.search({
        index: indexName,
        type: mappingType,
        body: payload
    });
}

module.exports = searchDoc;


async function test(){
    const body = {
        query: {
            match: {
                "tags": "SQL"
            }
        }
    }
    try {
        const resp = await searchDoc('blog', 'test', body);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}


test();