const esClient = require('./client');
const addmappingToIndex = async function(indexName, mappingType, mapping){
    console.log(mapping);
    return await esClient.indices.putMapping({
        index: indexName,
        type: mappingType,
        body: mapping
    });
}

module.exports = addmappingToIndex;


async function test(){
    const mapping = {
        properties: {
            title: {
                type: "text"
            },
            tags: {
                type: "keyword"
            },
            body: {
                type: "text"
            },
            timestamp: {
                type: "date",
                format: "epoch_millis"
            }
        }
    }
    try {
        const resp = await addmappingToIndex('blog', 'test', mapping);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}


test();