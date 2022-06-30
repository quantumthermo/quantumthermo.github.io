#打包推送到github-pages
#npm run build
#取消SSL认证
git config --global --unset http.proxy
git config --global --unset https.proxy

npm run deploy


#推送开发代码
git add -A
git commit -m 'update'
git push

