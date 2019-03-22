const es = require('elasticsearch');
const esClient = new es.Client({
	host: 'localhost:9200',
	log: 'trace'
});

module.exports = esClient;