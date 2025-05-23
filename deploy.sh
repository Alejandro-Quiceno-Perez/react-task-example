#!usr/bin/env sh

# abort on errors
set -e
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
# if you are deploying to https://<USERNAME>.github.io
git push -f

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@githun.com:Alejandro-Quiceno-Perez/react-task-example.git master:gh-pages
cd -
