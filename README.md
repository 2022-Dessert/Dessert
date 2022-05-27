# Dessert Project
- 2022 오픈소스 웹 소프트웨어 기말 프로젝트
- 디저트를 커스텀할 수 있는 웹사이트

<h2>헤더 파일 사용하는 법</h2>

1. head 부분에 넣어주기
```html
<link rel="stylesheet" href="../static/css/header.css"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
```
2. body에 header 태그 추가(안에 내용 비워둬야함)
```html
    <header>
    </header>
```
3. header 색깔 바뀌게 할 시작 지점에 section 태그 추가
```html
    <section class="page-start">
    내용
    </section>
```
4. body 마지막에 script 추가
```html
    <script src="../static/js/header.js"></script>
```
