# multi-language-translator

Description

This mod for Tera is designed to enhance communication by translating chat messages from multiple languages into English. It uses Google's unofficial translation API to detect and translate messages on-the-fly, with user-configurable language options.
Features

    Multi-Language Support: Translates messages from several languages including Russian, German, Spanish, French, Turkish, Italian, Arabic, Chinese, Japanese, and Korean.
    User-Selectable Languages: Users can choose which languages they want to be translated through a settings interface.
    Real-Time Translation: Translates chat messages in real-time, displaying them in English.
    Settings UI: A graphical user interface is available for adjusting mod settings, including language preferences.

Requirements

    Node.js Packages: node-fetch for making HTTP requests, tera-mod-ui for the settings interface.

Installation

    Place the mod files into the mods folder of your tera toolbox installation.
    Ensure that the required Node.js packages are installed (node-fetch, tera-mod-ui).

Usage

    Access the mod settings UI with the command trui in-game to select the languages you want to translate.
    The mod will automatically translate messages in the selected languages into English in the chat window.

Configurable Options

Users can enable or disable translation for the following languages:

    Russian (ru)
    German (de)
    Spanish (es)
    French (fr)
    Turkish (tr)
    Italian (it)
    Arabic (ar)
    Chinese Simplified (zh-CN) and Traditional (zh-TW)
    Japanese (ja)
    Korean (ko)

Functions

    detectLanguage(text): Detects the language of the provided text.
    translateText(input): Translates text to English.
    cleanMessage(text): Cleans the provided message text by removing HTML font tags.

Commands

    trui: Opens the settings UI where users can select their language preferences.

Disclaimer

The Google Translate API used is unofficial and may have limitations or restrictions.
