const fetch = require('node-fetch');
const SettingsUI = require('tera-mod-ui').Settings

async function detectLanguage(text) {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&dt=t&q=${encodeURI(text)}`;

        const response = await fetch(url);
        const data = await response.json();

        // 'data' contiene mucha información, incluyendo la detección del idioma
        // El idioma detectado se encuentra en data[2]
        return data[2];
    } catch (error) {
        console.error('Error during language detection:', error);
        return null;
    }
}

// Esta función usa un método no oficial para traducir texto usando Google Translate a través de una solicitud web.
async function translateText(input) {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURI(input)}`;

        const response = await fetch(url);
        const data = await response.json();

        // La respuesta es un array, con el texto traducido en la primera posición del primer array.
        return data[0][0][0];
    } catch (error) {
        console.error('Error during translation:', error);
        return null; // Retorna null en caso de un error.
    }
}

function cleanMessage(text) {
    return text.replace(/^<FONT>|<\/FONT>$/g, '');
}

module.exports = function translator(mod) {
	let ui = null;
	const options = mod.settings;
	if (global.TeraProxy.GUIMode) {
		ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, { height: 390 })
		ui.on('update', settings => {
			mod.settings = settings
		})
		
		this.destructor = () => {
			if (ui) {
				ui.close()
				ui = null
			}
		}
	}
	mod.command.add("trui", () => { if (ui) ui.show() });
    
	mod.hook('S_CHAT', 3, async (event) => {
		if(!options.enabled) return
        const originalMessage = event.message;
		const cleanedMessage = cleanMessage(originalMessage);
		const language = await detectLanguage(cleanedMessage);

		const languageMap = {
			'ru': options.ru,
			'de': options.de,
			'es': options.es,
			'fr': options.fr,
			'tr': options.tr,
			'it': options.it,
			'ar': options.ar,
			'zh-CN': options.zh,
			'zh-TW': options.zh,
			'ja': options.ja,
			'ko': options.ko
		};		

        if (languageMap[language]) {
            const translatedMessage = await translateText(cleanedMessage);
            if (translatedMessage) {
				mod.command.message(event.name + ': ' + `<font color='#00FFDC'>${(translatedMessage)}</font>`)
            }
        }
        
    });
}