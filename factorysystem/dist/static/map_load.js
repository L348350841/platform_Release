var bmapcfg={
    'imgext':'.png',//��Ƭͼ�ĺ�׺  ������Ҫ�޸�  һ��.jpg  .png
    'tiles_dir':'',//��ͨ��Ƭͼ�ĵ�ַ��Ϊ��Ĭ����tiles/Ŀ¼
};
var scripts=document.getElementsByTagName("script");
var JS_FILE_=scripts[scripts.length-1].getAttribute("src");//��õ�ǰjs�ļ�·��
bmapcfg.home=JS_FILE_.substr(0,JS_FILE_.lastIndexOf('/')+1);//��ͼapi��Ŀ¼���������ӡ����Ϊ./static/
