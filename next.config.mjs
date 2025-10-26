/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Protect dashboard routes: if missing auth-token cookie, send to login
      {
        source: '/dashboard/:path*',
        missing: [
          { type: 'cookie', key: 'auth-token' },
        ],
        destination: '/login',
        permanent: false,
      },
      // If already authenticated, keep users out of login/register
      {
        source: '/login',
        has: [
          { type: 'cookie', key: 'auth-token' },
        ],
        destination: '/dashboard',
        permanent: false,
      },
      {
        source: '/register',
        has: [
          { type: 'cookie', key: 'auth-token' },
        ],
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
