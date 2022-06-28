#打包推送到github-pages
npm run build
#取消SSL认证
git config --global http.sslVerify "false"
git config --global https.sslVerify "false"
npm run deploy


#推送开发代码
git add -A
git commit -m 'update'
git push

