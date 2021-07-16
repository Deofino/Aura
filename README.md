![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png)
# Project Name

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veritatis voluptas laudantium omnis quidem nostrum
tempora eius illum est illo!


## Authors

- [@Deofino](https://www.github.com/Deofino)
- [@Vitoria](https://github.com/vitoriaGoncalves08)



## Tech Stack

**Front-end:** Html, Css, Javascript, Twig, Apache.

**Back-end:** Php, Mysql, Composer, Git, Github.



## Features

- Url amigável
- Crud completo com Ajax
- Envio de E-mail
- Gráficos usando API do Google Charts
- Api do Google Maps
- Leitura de PDF dinâmica
- Site responsivo
- MVC




## Run Locally

Clone o projeto dentro de um servidor APACHE (C:/xampp/htdocs/)

```bash
git clone https://github.com/Deofino/FinalSemestrePW
```

Entre no projeto

```bash
cd FinalSemestrePW
```

Instale as dependências com composer (Tenha instalado, https://getcomposer.org/download/)

```bash
cd lib/
composer install
```

### Dentro da raiz do projeto, configure o arquivo config.php... Ele conterá as contantes globais
### Com servidor Apache ligado, entre no seu PhpMyAdmin, e importe o arquivo dentro de /app/model/Banco.sql

Procure seu projeto no seu servidor Apache e entre na pasta "public"

```bash
Exemplo Url: http://localhost/FinalSemestrePW/public/
```



## Screenshots


![home](https://user-images.githubusercontent.com/56117556/123862459-bed73600-d8fe-11eb-820b-aaee0903473d.png)

![dashboard](https://user-images.githubusercontent.com/56117556/123862648-fba32d00-d8fe-11eb-882d-a6f86258cb7e.png)

![produtos](https://user-images.githubusercontent.com/56117556/123862723-1675a180-d8ff-11eb-991d-34f337d44812.png)



## API Reference
#### Login
```http
EMAIL: admin@admin.com
```
```http
SENHA: 12345678
```
#### Get products
```http
GET /public/product/read
```
```http
GET /public/product/buscar/{string a ser buscada}
```
```http
GET /public/product/orderar/{1(Nome crescente), 1!(Nome descrescente), 2(Valor crescente), 2!(Valor decrescente)}
```
```http
GET /public/product/filtrar/{categoria,genero,marca}
```
```http
POST /public/product/create (recebe dados do post)
```
```http
POST /public/product/update (recebe dados do post)
```
```http
DELETE /public/product/delete/{id}
```
#### Get categories

```http
GET /public/category/read
```
```http
POST /public/category/create
```
#### Get brands

```http
GET /public/brand/read
```
```http
POST /public/brand/create