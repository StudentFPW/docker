# Объяснение каждого шага:

#   FROM - инструкция извлечет образ версии Ubuntu 20.04 из Docker Hub.
#   Во второй строке мы устанавливаем Nginx.
#   Затем мы копируем конфигурационный файл Nginx по умолчанию из локального каталога files  в каталог целевого образа.
#   Далее мы копируем наш файл index.html из локального каталога files в каталог целевого образа. Он перезапишет файл по умолчанию index.html, созданный во время установки Nginx.
#   Мы открываем порт 80, поскольку служба Nginx прослушивает порт 80.
#   Наконец, мы запускаем сервер Nginx, используя инструкцию CMD при запуске образа Docker.

FROM ubuntu:20.04  
RUN  apt-get -y update && apt-get -y install nginx
COPY files/default /etc/nginx/sites-available/default
COPY files/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]