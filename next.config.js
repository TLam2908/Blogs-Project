/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.licdn.com",
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
