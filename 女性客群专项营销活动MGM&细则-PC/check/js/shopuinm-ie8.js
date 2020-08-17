Array.prototype.contains = function(element) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                return true;
            }
        }
        return false;
    }
    //
var shopUI = {
    shopdata: null,
    element: {
        objProvince: null,
        objCity: null,
        objTable: null,
        objCardList: null
    },

    init: function(_shopdata, _objProvince, _objCity, _objTable, _objCardList) {
        shopUI.shopdata = _shopdata;
        shopUI.element = {
                objProvince: $(_objProvince),
                objCity: $(_objCity),
                objTable: $(_objTable),
                objCardList: $(_objCardList)
            },
        shopUI.eventBind();
        shopUI.initProvince();
        shopUI.loadCityList();
        shopUI.loadShopList();
    },
    //点击事件
    eventBind: function() {
        //联名卡切换
        if (shopUI.element.objCardList != null) {
            shopUI.element.objCardList.find("a").on("click", function() {
                shopUI.element.objCardList.find("a").removeClass("active");
                $(this).addClass("active");
                shopUI.shopdata = eval($(this).attr("card-data"));
                shopUI.initProvince();
                shopUI.loadCityList();
                shopUI.loadShopList();
            });
        }
        //省份切换
        shopUI.element.objProvince.change(function() {
            shopUI.loadCityList();
            shopUI.loadShopList();
        });
        //城市切换
        shopUI.element.objCity.change(function() {
            shopUI.loadShopList();
        });

    },
    initProvince: function() {
        shopUI.element.objProvince.empty();
        var ProvList = shopUI.getPrivinceList();
        shopUI.element.objProvince.append("<option>请选择省份</option>");
        for (var i = 0; i < ProvList.length; i++) {
            if (ProvList[i].indexOf("请选择省份") == -1) {
                shopUI.element.objProvince.append("<option>" + ProvList[i] + "</option>");

            } else {
                shopUI.element.objProvince.append("<option selected='true'>" + ProvList[i] + "</option>");
            }
			//shopUI.element.objProvince.append("<option selected='true'>" + ProvList[i].trim() + "</option>");
        }
    },
    resetCity: function() {
        shopUI.element.objCity.empty();
        //shopUI.element.objCity.append("<option>请选择城市</option>");
    },
    resetShopTable: function() {
        shopUI.element.objTable.find("tbody").html('');
        shopUI.element.objTable.fadeOut();
    },
    getPrivinceList: function() {
        var privinceList = new Array();
        for (var i = 0; i < shopUI.shopdata.length; i++) {
			try{
            	var proName = shopUI.shopdata[i][0];
			}catch(e){
            }
            if (!privinceList.contains(proName)) {
                privinceList.push(proName);
            }
        }
        return privinceList;
    },
    getCityListByProName: function(proname) {
        var cityList = [];
        for (var i = 0; i < shopUI.shopdata.length; i++) {
			try{
            	var bProName = shopUI.shopdata[i][0];
			}catch(e){
            }
			try{
            	var cityName = shopUI.shopdata[i][1];
			}catch(e){
            }
            
            
            if (bProName == proname && !cityList.contains(cityName)) {
                cityList.push(cityName);
            }
        }
        return cityList;
    },
    loadCityList: function(provName) {
        if (provName == null) {
            provName = shopUI.element.objProvince.find("option:selected").text();
        }
        shopUI.element.objCity.empty();
		shopUI.element.objCity.append("<option>请选择城市</option>");
        var CityList = shopUI.getCityListByProName(provName);
        if (CityList == null) return;
        for (var i = 0; i < CityList.length; i++) {
            shopUI.element.objCity.append("<option>" + CityList[i] + "</option>");
        }
    },
    getShopListByCity: function(proname, cityName) {
        var _shopList = [];
        for (var i = 0; i < shopUI.shopdata.length; i++) {
			try{
            	var bProName = shopUI.shopdata[i][0];
			}catch(e){
            }
			try{
            	var bCityName = shopUI.shopdata[i][1];
			}catch(e){
            }
            
            
            if (bProName == proname && bCityName == cityName) {
                _shopList.push(shopUI.shopdata[i]);
            }
        }
        return _shopList;
    },

    loadShopList: function() {
        var provName = shopUI.element.objProvince.find("option:selected").text();
        if (provName == null) provName = shopUI.element.objProvince.find("option:first").text();
		
        var cityname = shopUI.element.objCity.find("option:selected").text();
        if (cityname == null) cityname = shopUI.element.objCity.find("option:first").text();
		shopUI.element.objTable.find("tbody").html('');
		var htmlContent = "";
		if(provName == '请选择省份'){
			var province = shopUI.getPrivinceList();
			for(var i = 0; i<province.length; i++){
				var citylist = shopUI.getCityListByProName(province[i]);
				for(var j = 0; j<citylist.length; j++){
					var _selShopList = shopUI.getShopListByCity(province[i], citylist[j]);
					for (var m = 0; m < _selShopList.length; m++) {
						try{
							var d1 = _selShopList[m][0];
							var d2 = _selShopList[m][1];
							var d3 = _selShopList[m][2];
							var d4 = _selShopList[m][3];
						}catch(e){
						}
						
						htmlContent += '<tr>' +
							'<td class="nth1">' + d1 + '</td>' +
							'<td class="nth2">' + d2 + '</td>' +
							'<td class="nth3">' + d3 + '</td>' +
							'<td class="nth4">' + d4 + '</td>' +
							'</tr>';
					}
				}
			}
		}else{
			if(cityname == '请选择城市'){
				var citylist = shopUI.getCityListByProName(provName);
				for(var m=0;m<citylist.length;m++){
					var _selShopList = shopUI.getShopListByCity(provName, citylist[m]);
					for (var i = 0; i < _selShopList.length; i++) {
						htmlContent += '<tr>' +
							'<td class="nth1">' + _selShopList[i][0] + '</td>' +
							'<td class="nth2">' + _selShopList[i][1] + '</td>' +
							'<td class="nth3">' + _selShopList[i][2] + '</td>' +
							'<td class="nth4">' + _selShopList[i][3] + '</td>' +
							'</tr>';
			
					}
				}
			}else{
				var _selShopList = shopUI.getShopListByCity(provName, cityname);
				for (var i = 0; i < _selShopList.length; i++) {
					htmlContent += '<tr>' +
						'<td class="nth1">' + _selShopList[i][0] + '</td>' +
						'<td class="nth2">' + _selShopList[i][1] + '</td>' +
						'<td class="nth3">' + _selShopList[i][2] + '</td>' +
						'<td class="nth4">' + _selShopList[i][3] + '</td>' +
						'</tr>';
		
				}
			}
		}
        shopUI.element.objTable.find("tbody").html(htmlContent);
        shopUI.element.objTable.fadeIn();
    }
}
