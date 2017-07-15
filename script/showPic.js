function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var palcehodler = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("desciption");
	description.firstChild.nodeValue = text;
}

function countBodyChildren(){
	var num = 0;
	var body_element = document.getElementsByTagName("body")[0];
	//alert(body_element.childNodes.length);
	/*for(var i = 0; i < body_element.childNodes.length;i++)
	{
		if(body_element.nodeType == 1)
		{
			num += 1;
		}
	}*/
	alert(num);
}


//5.2 平稳退化
//浏览器不支持JavaScript的情况下仍能顺利地浏览你的网站
//创建新的浏览窗口
function popUp(winURL){
	window.open(winURL,"popup","width =480,height= 360");
}
