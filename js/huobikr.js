'use strict';

// ---------------------------------------------------------------------------

const huobipro = require ('./huobipro.js');

// ---------------------------------------------------------------------------

module.exports = class huobikr extends huobipro {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'huobikr',
            'name': 'Huobi Korea',
            'hostname': 'api-cloud.huobi.co.kr',
            'has': {
                'CORS': false,
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/27766569-15aa7b9a-5edd-11e7-9e7f-44791f4ee49c.jpg',
                'api': {
                    'public': 'https://api-cloud.huobi.co.kr',
                    'private': 'https://api-cloud.huobi.co.kr',
                    'market': 'https://api-cloud.huobi.co.kr',
                },
                'www': 'https://www.huobi.co.kr',
                'doc': 'https://github.com/alphaex-api/BAPI_Docs_ko/wiki/REST-API-Reference',
            },
        });
    }
};
