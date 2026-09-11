import Script from "next/script";

const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const microsoftClarityId = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID;

export function AnalyticsScripts() {
  return (
    <>
      {googleAdsId && (
        <>
          <Script
            id="google-ads-library"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-ads-initialization"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', ${JSON.stringify(googleAdsId)});
              `,
            }}
          />
        </>
      )}

      {metaPixelId && (
        <>
          <Script
            id="meta-pixel-initialization"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){
                  if(f.fbq)return;
                  n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;
                  n.push=n;
                  n.loaded=!0;
                  n.version='2.0';
                  n.queue=[];
                  t=b.createElement(e);
                  t.async=!0;
                  t.src=v;
                  s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s);
                }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${JSON.stringify(metaPixelId)});
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {microsoftClarityId && (
        <Script
          id="microsoft-clarity-initialization"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);
                t.async=1;
                t.src='https://www.clarity.ms/tag/'+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window,document,'clarity','script',${JSON.stringify(microsoftClarityId)});
            `,
          }}
        />
      )}
    </>
  );
}
