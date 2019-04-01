const esClient = require('./client');
const insertDoc = async function(indexName, _id, mappingType, data){
    return await esClient.index({
        index: indexName,
        type: mappingType,
        id: _id,
        body: data
    });
}

module.exports = insertDoc;


async function test(){
    const data = {
        title: "Learn elastic search",
        tags: ['NodeJS', 'Programming'],
        body: `Lot of content here...
                .... article`
    }
    try {
        const resp = await insertDoc('blog', 2, 'ciphertrick', data);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}


//test();