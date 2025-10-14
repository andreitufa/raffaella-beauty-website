import { Helmet } from "react-helmet-async";

// Google Ads Conversion Tracking
// Replace with your actual conversion IDs
const GOOGLE_ADS_CONVERSION_ID = null; // Example: "AW-123456789"
const GOOGLE_ADS_PHONE_CONVERSION_LABEL = null; // Example: "abc123"
const GOOGLE_ADS_BOOKING_CONVERSION_LABEL = null; // Example: "def456"

export function GoogleAds() {
  return (
    <Helmet>
      {/* Google Ads Global Site Tag - Only load if conversion ID is provided */}
      {GOOGLE_ADS_CONVERSION_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`}
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_CONVERSION_ID}');
            `}
          </script>
        </>
      )}
    </Helmet>
  );
}

// Conversion tracking functions for Google Ads
export const trackGoogleAdsConversion = (conversionLabel: string, value?: number, currency = 'RON') => {
  if (!GOOGLE_ADS_CONVERSION_ID || !conversionLabel) return;
  
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
      'value': value,
      'currency': currency
    });
  }
};

// Predefined conversion events
export const trackPhoneCallConversion = () => {
  if (GOOGLE_ADS_PHONE_CONVERSION_LABEL) {
    trackGoogleAdsConversion(GOOGLE_ADS_PHONE_CONVERSION_LABEL, 1);
  }
};

export const trackBookingConversion = (value?: number) => {
  if (GOOGLE_ADS_BOOKING_CONVERSION_LABEL) {
    trackGoogleAdsConversion(GOOGLE_ADS_BOOKING_CONVERSION_LABEL, value);
  }
};

// Enhanced conversion tracking with customer data
export const trackEnhancedConversion = (conversionLabel: string, customerData?: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}) => {
  if (!GOOGLE_ADS_CONVERSION_ID || !conversionLabel) return;
  
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
      'user_data': customerData ? {
        email_address: customerData.email,
        phone_number: customerData.phone,
        first_name: customerData.firstName,
        last_name: customerData.lastName
      } : undefined
    });
  }
};
