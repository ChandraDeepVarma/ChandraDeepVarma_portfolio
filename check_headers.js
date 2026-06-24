const https = require('https');

const url = 'https://res.cloudinary.com/defchwsv9/image/upload/v1782280421/portfolio/zdfukd88nthco00okld7.pdf';

https.request(url, { method: 'HEAD' }, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', JSON.stringify(res.headers, null, 2));
  process.exit(0);
}).on('error', (err) => {
  console.error(err);
  process.exit(1);
}).end();
