/*
散点图基本的图文组件
 */
var H5ComponentPoint = function(name,cfg){
	var component = new H5ComponentBase(name,cfg);
	//测试component.text('test H5ComponentPoint');
	var base = cfg.data[0][1];  //以第一个数据的比例为大小的100%；
	$.each(cfg.data,function(idx,item){
		var point = $('<div class="point point'+idx+'" >');
		//point.text(item[0]+'-'+item[1]);

		var name = $('<div class = "name">'+item[0]+'</div>');
		var rate = $('<div class = "per">'+(item[1]*100)+'%</div>');

		name.append(rate);
		point.append(name);
		//d第一个数item[1]/base = 0.4/0.4 = 1 =100%
		//d第二个数item[1]/base = 0.2/0.4 = 0.5 =50%
		var per = (item[1]/base*100)+'%';
		//console.log(per);

		point.width(per).height(per);

		if (item[2]) {
			point.css('backgroundColor',item[2])
		}
		if(item[3]!==undefined&&item[4]!==undefined){
			point.css('left',item[3]).css('top',item[4]);
			
		}
		component.append(point);
	});

	return component;
}
