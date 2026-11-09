import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'gethigh.in | A name with room to rise';
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
          backgroundColor: '#0b0b0e',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(215,245,155,0.08), transparent 55%)',
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
          AVAILABLE TO BUY OR RENT
        </div>
        <div
          style={{
            fontSize: 128,
            color: '#d7f59b',
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
          A name with room to rise. Buy or rent.
        </div>
      </div>
    ),
    { ...size }
  );
}

