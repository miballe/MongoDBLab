# MongoDBLab
Repository with the deliverables for the MongoDB Lab. Dec 11, 2015.

Edit Dec 19. By this time I realized that the repository didn't contain any file from the uploaded ones. The problem was because I tried to push the clean dataset and zipped was bigger than 50MB. Therefore, I reversed the commits and push again all files. Queries file was submited through the handin system and can be checked for consistency.

Client page:
- http://dsclabs.cloudapp.net:5454/
Please check this page first since some queries below make the server freeze and stop working until I restart the service. I tried to handle the server errors, but could not find a practical way to do so.

Query links:
- http://dsclabs.cloudapp.net:5454/mblog/uniqueusers/
- http://dsclabs.cloudapp.net:5454/mblog/top10users/
- http://dsclabs.cloudapp.net:5454/mblog/firstlastmsg/
- http://dsclabs.cloudapp.net:5454/mblog/meantimedelta/
- http://dsclabs.cloudapp.net:5454/mblog/meanlengthmsg/
- http://dsclabs.cloudapp.net:5454/mblog/top10unibigram/
- http://dsclabs.cloudapp.net:5454/mblog/avgnumhashtag/
- http://dsclabs.cloudapp.net:5454/mblog/lgstukpubarea/

## App folder
This folder contains the files that partially worked with some queries.

## Client folder
This folder contains a simple HTML page with a JS script that triggered requests to the published queries.

## Data folder
Was intended to contain the clean and raw datasets. The dataset is in MongoDB since the CSV was too big for GitHub. Even a ZIP was too big. It contains the data cleaning steps instead in a single PDF file.
