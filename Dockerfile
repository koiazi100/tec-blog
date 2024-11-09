FROM node

RUN mkdir -m 700 ${HOME}/.ssh \
    && ssh-keyscan github.com > ${HOME}/.ssh/known_hosts

RUN yarn global add firebase-tools