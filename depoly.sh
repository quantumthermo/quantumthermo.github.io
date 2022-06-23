#推送开发代码
git add -A
git commit -m 'update'
git push

#打包推送到github-pages
npm run build
npm run deploy
