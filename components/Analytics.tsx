import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-QZM7774P3J";

// Facebook Pixel ID - Replace with your actual ID
// Set to null to disable tracking until you have a real ID
const FB_PIXEL_ID = null; // Example: "1234567890123456"

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page views with Google Analytics (only if GA is enabled)
    if (GA_MEASUREMENT_ID && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }

    // Track page views with Facebook Pixel (only if Pixel is enabled)
    if (FB_PIXEL_ID && typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [location]);

  return (
    <Helmet>
      {/* Google Analytics 4 - Only load if ID is provided */}
      {GA_MEASUREMENT_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
              gtag('config', 'AW-17734809518');
            `}
          </script>
        </>
      )}

      {/* Facebook Pixel - Only load if ID is provided */}
      {FB_PIXEL_ID && (
        <>
          <script>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </script>
          <noscript>
            {`<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"
            />`}
          </noscript>
        </>
      )}

      {/* Google Tag Manager (Optional - uncomment and add GTM ID if needed) */}
      {/* 
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </script>
      */}
    </Helmet>
  );
}

// Conversion tracking helpers
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  // Google Analytics Event (only if enabled)
  if (GA_MEASUREMENT_ID && typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }

  // Facebook Pixel Event (only if enabled)
  if (FB_PIXEL_ID && typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, eventParams);
  }
};

// Predefined conversion events
export const trackPhoneClick = () => {
  trackEvent("contact", {
    method: "phone",
    event_category: "engagement",
    event_label: "Phone Click"
  });
};

export const trackWhatsAppClick = (service?: string) => {
  trackEvent("contact", {
    method: "whatsapp",
    service: service || "nespecificat",
    event_category: "engagement",
    event_label: service ? `WhatsApp - ${service}` : "WhatsApp Click"
  });
};

export const trackBookingClick = (service?: string) => {
  trackEvent("InitiateBooking", {
    service: service || "general",
    event_category: "conversion",
    event_label: "Booking Initiated"
  });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent("ViewContent", {
    content_name: serviceName,
    content_type: "service",
    event_category: "engagement"
  });
};

export const trackPriceListView = (serviceName: string) => {
  trackEvent("ViewContent", {
    content_name: `Price List - ${serviceName}`,
    content_type: "price_list",
    event_category: "engagement"
  });
};
