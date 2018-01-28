# README

### docker-composeでのコンテナの立ち上げ手順

前提条件：dockerをインストールしていること

* （初回のみ）ビルド、イメージの作成  
`cd [docker-compose.ymlがあるディレクトリ]`  
`docker-compose build`  

* node_modulesのインストール（production環境で仕様）  
`docker-compose run --rm api npm install [インストールしたいパッケージ] --save`  

* node_modulesのインストール（development環境のみで仕様）  
`docker-compose run --rm api npm install [インストールしたいパッケージ] --save-dev`  