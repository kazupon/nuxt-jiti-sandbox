import { createCoreContext, translate } from '@intlify/core'

const ctx = createCoreContext({
  locale: 'en',
  messages: {
    en: {
      hello: 'Hello DIO!'
    },
    ja: {
      hello: 'やあ、ディオ！'
    }
  }
})

console.log(`translation key: hello -> ${translate(ctx, 'hello')}`)
