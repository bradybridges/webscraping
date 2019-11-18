var Nightmare = require('nightmare');
var nightmare = Nightmare();
const city = process.argv[2];
const url = city ? `${city}.craigslist.org` : 'denver.craigslist.org';
nightmare
  .goto(`https://${url}`)
  .wait(2000)
  .click('.web')
  .wait(2000)
  // .click('.postedToday')
  // .wait(2000)
  .evaluate(function () {
    const noNewListings = document.getElementsByClassName('alert');
    if(noNewListings[0]) {
      return 'No Listings...';
    } else {
      var postingNodes = document.querySelectorAll('.hdrlnk');
      var list = [].slice.call(postingNodes);
      return list.map( node => {
        return {
          title: node.innerText,
          link: node.href,
        };
      });
    }
  })
  .end()
  .then(function (results) {
    if(typeof results === 'object') {
      results.forEach(result => console.log(`${result.title} - ${result.link}`));
    } else {
      console.log(results);
    }
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });