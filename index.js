console.log('Loading function');

var elasticsearch = require('./elastic/elastic');

elasticsearch.initIndex();

exports.handler = function(event) {
    var message = event.Records[0].Sns.Message;
    console.log('Message received from SNS:', message);

    elasticsearch.addDocument(JSON.parse(message));

    console.log('Document added to elastic');

    return 'Success';
};