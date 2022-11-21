const express = require('express')
const router = express.Router()
const path = require('path')

//const hm = __dirname
//const hm2 = path,join('views', 'index.html')

//console.log(`hm ${hm}`)
//console.log(`hm2 ${hm2}`)

router.get('^/$|/index(.html)?', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router