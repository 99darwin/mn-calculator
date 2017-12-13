const rp = require('request-promise')
const keys = require('./keys.js')

const weiMultiplier = 1000000000000000000

const total = {
    method: 'GET',
    uri: 'https://api.etherscan.io/api',
    qs: {
        module: 'stats',
        action: 'tokensupply',
        contractaddress: keys.contractAddress,
        apikey: keys.etherscanKey
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
}
rp(total)
    .then(function(res) {
        const totalSupply = Math.floor(res.result / weiMultiplier)
        console.log(`Total supply of DIVX: ${totalSupply} DIVX`)
    })
    .catch(function(err) {
        if (err) throw err
    })
