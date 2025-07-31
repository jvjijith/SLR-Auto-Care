import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css'

export const metadata: Metadata = {
  title: 'SLR',
  description: 'Website powered by Nexalogics',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
         <meta
          name="google-site-verification"
          content="bDTFdZ1M_GAWb7U85DcE2rXAGPPUvX7uhm8LQPpYiLs"
        />
          <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T5K7TSVK');
        `}
      </Script>
      </head>
     
      <body>
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-T5K7TSVK"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  ></iframe>
</noscript>

        {children}
        </body>
    </html>
  )
}
