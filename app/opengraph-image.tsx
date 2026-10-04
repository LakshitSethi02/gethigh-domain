import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'gethigh.in — A premium .in domain, for sale';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0B14',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(168,85,247,0.35), transparent 55%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 26,
            color: '#9CA3AF',
            letterSpacing: 4,
            display: 'flex',
            marginBottom: 8,
          }}
        >
          PREMIUM .IN DOMAIN
        </div>
        <div
          style={{
            fontSize: 128,
            backgroundImage:
              'linear-gradient(90deg, #A855F7 0%, #EC4899 55%, #F5A96E 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
          }}
        >
          gethigh.in
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            color: '#E5E7EB',
            display: 'flex',
          }}
        >
          Ready to transfer today — make an offer
        </div>
      </div>
    ),
    { ...size }
  );
}
