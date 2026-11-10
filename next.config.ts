import type {NextConfig} from 'next';
const config:NextConfig={images:{formats:['image/webp'],minimumCacheTTL:86400,deviceSizes:[360,390,640,768,1024,1280,1440,1920],qualities:[75]},async headers(){return [{source:'/fonts/:path*',headers:[{key:'Cache-Control',value:'public, max-age=86400, stale-while-revalidate=604800'}]}]}};
export default config;
