/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    //127.0.0.1:27017
    //localhost:27017
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit",
    DB_URI: "",
  },
}

module.exports = nextConfig
