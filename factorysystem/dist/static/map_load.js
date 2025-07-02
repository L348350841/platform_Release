var bmapcfg={
    'imgext':'.png',//瓦片图的后缀  根据需要修改  一般.jpg  .png
    'tiles_dir':'',//普通瓦片图的地址，为空默认在tiles/目录
};
var scripts=document.getElementsByTagName("script");
var JS_FILE_=scripts[scripts.length-1].getAttribute("src");//获得当前js文件路径
bmapcfg.home=JS_FILE_.substr(0,JS_FILE_.lastIndexOf('/')+1);//地图api主目录，我这里打印出来为./static/
