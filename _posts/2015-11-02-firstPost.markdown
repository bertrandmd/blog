---
layout: post


title: Faire son blog avec Jekyll
description: Pourquoi et comment créer son blog avec Jekyll plutôt qu'un bon vieux Wordpress des familles.
---

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");

.aaa{
color:red;
}
.bbb{
font-size:15.5px;
}
.ccc{
font-style: normal;
}
.blabla{
color:steelblue;
}
.console {
overflow:hidden;
  font-family:Courier;
 color: #80FF80;
  background: #000000;
  //border: 3px double #CCCCCC;
  padding: 10px;
  width: 130px;
}
table{padding:0}table tr{border-top:1px solid #ccc;background-color:#fff;margin:0;padding:0}table tr:nth-child(2n){background-color:#aaa}table tr th{font-weight:700;border:1px solid #ccc;text-align:left;margin:0;padding:6px 13px}table tr td{border:1px solid #ccc;text-align:left;margin:0;padding:6px 13px}table tr td :first-child,table tr th :first-child{margin-top:0}table tr td:last-child,table tr th :last-child{margin-bottom:0}
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
th, td {
    padding: 15px;
}
img{
display: block;
    margin: auto;
    vertical-align: center;
}
img + edm {color:steelblue; text-align: center;}
.caption {color:steelblue; text-align: center;}
.left {
    float:left;
    width:100%;
    max-width:300px;
    padding-right:10px;
}
.right {
    float:right;
    width:100%;
    max-width:300px;
    padding-left:10px;
}
p.clear {
    clear: both;
}
p.comment {
vertical-align: center;
text-align: justify;
/*padding-left: 305px;*/
/*padding-right: 5px;*/
}
</style>



TOC {#header0}
---
{: .no_toc}

* TOC
{:toc}
---

# Titre1
{: .no_toc}

## Titre2

### Titre3

<blockquote>

**GAZ!** 

</blockquote>

![mapping](../../../images/new-york-945240_640.jpg "TOTO")*Carte -- source[^0]*
{: .caption}



![mapping](../../../images/new-york-945240_640.jpg "TOTO"){: .right}*Carte -- source[^0]*
{: .caption .right}
*Carte -- source2[^0]*
{: .caption}
c'est genial ca qu'on a fait, blah blah blah, c'est genial ca qu'on a fait, blah blah blah, c'est genial ca qu'on a fait, blah blah blah, c'est genial ca qu'on a fait, blah blah blah, c'est genial ca qu'on a fait, blah blah blah, c'est genial ca qu'on a fait, blah blah blah, c'est genial ca qu'on a fait, blah blah blah, c'est genial ca qu'on a fait, blah blah blah, c'est genial ca qu'on a fait, blah blah blah.
{: .comment}
*Carte -- source2[^0]*
{: .caption .clear}
blabla
{: .clear}

[^0]: https://pixabay.com

This is some text not written in HTML but in another language!

*[another language]: It's called Markdown

*[HTML]: HyperTextMarkupLanguage
{:.mega-big}

<blockquote> 

+ a
+ b
+ C


</blockquote>

```css
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
```

```py
def fib(n):    # write Fibonacci series up to n
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print a,
        a, b = b, a+b
```
---

## <i class="fa fa-map-o fa-fw"></i> Mapping {#header1}

> Ouvrir les yeux sur le monde.
> *Beber in*{: .bbb .ccc} *Des Armes*{: .bbb} ---
{:.blockquote-reverse}

<iframe src="/map/leaflet_example.html" style="width:100%;height:420px;" frameborder="0" ></iframe>
[lien vers la carte](../../../map/leaflet_example.html)


### Les Shp



```php
<?php
print "Hello World";
?>
```

### Les GeoJson

```json
{ "one": 1, "two": 2 }
```

# Blabla {#blablaH}
{: .blabla}

This is some text.[^1]. Other text.[^footnote].ou encore [^2].

toto
{: .caption}

[^1]: Some *crazy* footnote definition.

[^footnote]:
    > Blockquotes can be in a footnote.

footnote[^1]

[^2]: bobby

- <a href="#header4"><i class="fa-li fa fa-area-chart" style="position: static;"></i>grap2
- <i class="fa-li fa fa-bar-chart" style="position: static;"></i>grap2
- <i class="fa-li fa fa-pie-chart" style="position: static;"></i>graph3
- <i class="fa-li fa fa-rocket" style="position: static;"></i>graph3
{: .fa-ul .list-inline}



## <i class="fa fa-home fa-fw"></i> TOC {#header10}

+ [Titre1](#header1)
+ [Titre2](#header2)
+ [Titre3](#header3)
+ [Titre4](#header4)


<samp>**>_ Hello world !**</samp>
{:  .console} 


>*salut hombre !*
><cite>Toto</cite>
><footer>toto</footer>
<i class="fa fa-github-alt"></i>

> salut hombre !
> -- bob in **LeGAz**

> It is the unofficial force—the Baker Street irregulars.
-- Sherlock Holmes, Sign of Four

- a
{:  .aaa}
- b
{:  .aaa}
- c
{:  .aaa}


id|name
---|---
1|beb
{:  .aaa}


HTML2

*[HTML2]: Extra Gaz

---

## <i class="fa fa-folder-open-o fa-fw"></i> Titre1 {#header1}

[Link back to TOC](#header0)

>Blah, BlahBlah
>*Ipsum*

This is *red*{: style="color: red"}.
This is *red*{: .aaa}.

> This is red.
{:  .aaa}

la ==balise== `bob` envoie du code, et retourne <samp>OK</samp> OK ?
ou <kbd>Test</kbd>

```javascript
var a = 1;
var map = L.map();
osm = l.geojson(data,{});
osm.addTo(map);
```

~~~ javascript
var a = 1;
~~~

~~~ ruby
def what?
  42
end
~~~
{: .language-ruby}

> A nice blockquote
{:  .aaa}

 
id|name
---|---
1|beb
{:  .table .table-striped}


| Header1 | Header2 | Header3 |
|:--------:|:-------:|--------:|
| <i class="fa fa-leaf"></i>   | [cell2](http://yahoo.com)   | cell3   |
| <i class="fa fa-car"></i>   | [cell5][3]   | cell6   |
| <i class="fa fa-anchor"></i>   | cell2   | cell3   |
| <i class="fa fa-plane"></i>   | cell5   | cell6   |
| <i class="fa fa-beer"></i>   | Foot2   | Foot3|
{:  .table .table-striped}


1. Item one
     1. sub item one
     2. sub item two
     3. sub item three
2. Item two 
     1. sub item one
     2. sub item two
     3. sub item three
4. ssss
{:  .aaa}

        print toto


```
  graph TD;A-->B;A-->C;B-->D;C-->D;
```

---

## Titre2 {#header2}

[Link back to TOC](#header0)
SO<sub>2</sub>
km<sup>2</sup>

---

## Titre3 {#header3}

[Link back to TOC](#header0)


---

## Titre4 {#header4}

[Link back to TOC](#header0)


[3]:http://github.com



