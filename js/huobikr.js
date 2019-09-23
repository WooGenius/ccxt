"use strict"

// ---------------------------------------------------------------------------

const huobipro = require("./huobipro.js")

// ---------------------------------------------------------------------------

module.exports = class huobikr extends huobipro {
  describe() {
    return this.deepExtend(super.describe(), {
      id: "huobikr",
      name: "Huobi Korea",
      hostname: "krapi.huobi.pro",
      has: {
        CORS: false
      },
      urls: {
        logo: "https://user-images.githubusercontent.com/1294454/27766569-15aa7b9a-5edd-11e7-9e7f-44791f4ee49c.jpg",
        api: {
          public: "https://krapi.huobi.pro",
          private: "https://krapi.huobi.pro",
          market: "https://krapi.huobi.pro"
        },
        www: "https://www.huobi.co.kr",
        doc: "https://github.com/alphaex-api/BAPI_Docs_ko/wiki/REST-API-Reference"
      }
    })
  }
}
