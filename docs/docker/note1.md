

# linux服务器安装docker 

- https://get.docker.com/ 下载get-docker.sh
- curl -fsSL get.docker.com -o get-docker.sh
- sudo sh get-docker.sh
- sudo systemctl start docker
- docker container run  nginx
- docker contain ps -a
- docker container stop container_id



# 学习多个容器的操作

- docker container run -d --name my-nginx nginx
- docker container stop $(docker container ps -aq)
- docker container rm $(docker container ps -aq)


# 端口映射
- docker container run  -p 80:80 nginx

- docker run -d -p 80:80 --name my-nginx nginx  detached模式 关掉脚本后容器依然运行
- docker attach container_id 将后台服务转化为前台服务运行


# 常见问题

- 如何查看容器日志?
  - `docker logs container_id/name` 查看容器日志
  - `docker logs -f container_id/name` 实时查看容器日志

- 如何进入容器内部?
  - `docker exec -it container_id/name bash` 进入容器内部
  - `docker exec -it container_id/name sh` 如果容器内没有bash可以用sh

- 如何复制容器内的文件到宿主机?
  - `docker cp container_id:/path/to/file /host/path` 从容器复制到宿主机
  - `docker cp /host/path container_id:/path/to/file` 从宿主机复制到容器

- 容器无法启动怎么办?
  - 查看容器日志 `docker logs container_id`
  - 检查端口映射是否正确
  - 检查容器配置文件
  - 检查宿主机资源使用情况