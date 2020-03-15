const path = require("path")

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    config.resolve.alias['assets'] = path.join(__dirname, "src", 'assets')
    config.resolve.alias['components'] = path.join(__dirname, "src", 'components')
    config.resolve.alias['layouts'] = path.join(__dirname, "src", 'layouts')
    return config
  }
})