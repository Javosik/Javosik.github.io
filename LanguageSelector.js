class LanguageSelector {
	setLang(lang)
	{
		l = lang.toLowerCase();
		localStorage.setItem('lang', l);
		return true;
	}
	getLang()
	{
		var lang = localStorage.getItem('lang');
		if (lang != null) {
			return lang;
		} else {
			return 'en';
		}
	}
	removeLang()
	{
		localStorage.removeItem('lang');

		return true;
	}
	loadLang()
	{	
		var l_c = this.getLang();
		var strs = lang[l_c];

		return strs;
	}
	parse()
	{	
		var lang = this.loadLang();
		var len = lang.length - 1;
		var keys = Object.keys(lang);
		var values = Object.values(lang);

		for (var i = 0; i <= keys.length - 1; i++) {
			if (keys[i] == ":title") {
				document.title = values[i]
			}
			$("body").children().each(function () {
		    	$(this).html( $(this).html().replace(keys[i],values[i]) );
			});					
		}
	}
}