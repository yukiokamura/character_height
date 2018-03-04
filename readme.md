character_height
====

このライブラリは、line-heightが設定されている文字間のマージンを取る際に、余分なマージンを取っ払うライブラリです。
[]()

## Demo

line-hight 1.8が設定されている文字同士にmarginを20px開けようとしたら、

![normal](https://camo.qiitausercontent.com/0940979525b1cec56a1ab738adb5423bad1b8c66/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3138323231342f61633430363934372d646461362d313635642d636538332d3463313961303336336161632e706e67)
と20px以上空いてしまいます。

![](https://camo.qiitausercontent.com/9c92035a3198fb80a2da60b73ebcf2e85b9c99b1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3138323231342f32623737646534392d343835612d393137622d353930382d3634613964323538366436382e706e67)

このライブラリを使用することで、20pxぴったり開けられます。


## Requirement
jquery


## Usage
1.head内でwww/js/characterHeight.jsを読み込みます。

```html
<head>
  <meta charset="utf-8"/>
  <title>site name </title>
  <meta name="description" content="site description"/>
  <meta name="keywords" content="keyword">
  <script src="js/vender/lib.js"></script>
  <script src='js/characterHeight.js'></script>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/top.css">
</head>
```

2.cssに下記を追加してください。

```css
.mozi {
  position: relative;
  box-sizing: content-box;
  display: block; }
```

3.文字のマージンを開けたい場所でmoziクラスを付与してください。

```
  <div>
    <h1 class="mozi3 mozi">僕は耳と目を閉じ、口をつぐんだ人間になろうと考えた.<br/>I thought what I'd do was,<br/> I'd pretend I was one of those deaf-mutes</h1>
    <p class="mozi2 mozi">僕は耳と目を閉じ、口をつぐんだ人間になろうと考えた<br/>
    I thought what I'd do was, I'd pretend I was one of those deaf-mutes</p>
  </div>
```

## Install
npm i 


## Licence
MIT License

## Author
2018.3.4  
[yukiokamura](https://github.com/yukiokamura)
