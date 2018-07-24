[![CircleCI](https://circleci.com/gh/ahtee/mozart-web.svg?style=svg)](https://circleci.com/gh/ahtee/mozart-web) 

# Mozart

Find more information about [Mozart container orchestration](https://github.com/zbblanton/Mozart) tool. The informational site is built in [ReactJS](https://github.com/facebook/react) and uses tools like NodeJS and Babel for the http web server and for code linting.

## Installing

- Clone the repo to your local machine using git: `git clone https://github.com/ahtee/mozart-web.git`
- `cd mozart-web`

Run the code locally and open a web browser
```
npm start
```

You should be directed to `http://localhost:3000`

## Building and running in Docker

Run the following commands to build and run the Dockerfile in a container

```
docker build -q -t <image name> .

docker run -p 3000:3000 --rm --name=<container name> < image name>
```

Open your browser to `http://localhost:3000`

Continue!
