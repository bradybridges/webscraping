# Craiglist Developer Job Postings
- Grab process args to see if user is specifying city
- If no city in arguments then default to denver
- Visit https://[city].craigslist.org
- Click link with class `.web`
- If filtering by todays postings click li with class `.postedToday`
- Grab all links with class `hdrlnk`
- If none exist return no postings
- Else return innerText and href of each link

## How To Use
1. You must have node installed
1. Clone down this repo
1. `cd` into this repo
1. `npm i`
1. `node scrape.js [optional city]`

If a city is not supplied Denver will be used as the default city. You can uncomment lines 10 & 11 to only return listings posted today.

EXAMPLE
```
  node scrape.js denver

Front-End Web Developer/Designer - https://denver.craigslist.org/web/d/front-end-web-developer-designer/7016269657.html
Developer - SaaS Timeline Product for Legal Community - https://denver.craigslist.org/web/d/denver-developer-saas-timeline-product/7015455649.html
Have WordPress Skills! Join Our Design Team - https://denver.craigslist.org/web/d/denver-have-wordpress-skills-join-our/7014950855.html
Web Designer & Programmer - https://denver.craigslist.org/web/d/denver-web-designer-programmer/7014352780.html
Front End Developer (REACT) - https://denver.craigslist.org/web/d/littleton-front-end-developer-react/7000820314.html
Web Designer & Programmer - https://denver.craigslist.org/web/d/denver-web-designer-programmer/6999637536.html
JanSport and Eagle Creek: Graphic Designer - https://cosprings.craigslist.org/web/d/colorado-springs-jansport-and-eagle/7005745855.html
```

