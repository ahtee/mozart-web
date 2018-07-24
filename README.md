[![CircleCI](https://img.shields.io/circleci/project/github/ahtee/mozart-web.svg)](https://circleci.com/gh/ahtee/mozart-web)
[![Docker Build Status](https://img.shields.io/docker/build/ahtee/mozart-web-build.svg)](https://hub.docker.com/r/ahtee/mozart-web-build/)


# Mozart

Find more information about [Mozart container orchestration](https://github.com/zbblanton/Mozart) tool. The informational site is built in [ReactJS](https://github.com/facebook/react) and uses tools like NodeJS and Babel for the http web server and for code linting. 

## Installing and contributing on your local environment

- Clone the repo to your local machine using git: `git clone https://github.com/ahtee/mozart-web.git`
- `cd mozart-web`

Run the code locally and open a web browser:
```
npm start
```

You should be automatically directed to `http://localhost:3000` in your preferred browser.

Any features contributed by you would require you to clone the repository, create your features or make your changes, test the code, and then submit a Pull Request to have your code reviewed for merging into the project. You can develop on the master branch, as this is a static site.

## Building and running an image in Docker

Run the following commands to build and run the Dockerfile in a container:

```
docker build -q -t <image name> .

docker run -p 3000:3000 --rm --name=<container name> < image name>
```

Open your browser to `http://localhost:3000`

Continue!
