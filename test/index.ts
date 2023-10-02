import { test } from '@socketsupply/tapzero'
import { example } from '../dist/index.js'

test('example', async t => {
    t.ok('ok', 'should be an example')
    example()
})
