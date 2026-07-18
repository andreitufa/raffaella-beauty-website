import { Helmet } from "react-helmet-async";

// Google Ads Conversion Tracking
const GOOGLE_ADS_CONVERSION_ID = "AW-17734809518";
const GOOGLE_ADS_PHONE_CONVERSION_LABEL = null; // To be configured later
const GOOGLE_ADS_BOOKING_CONVERSION_LABEL = "1M7-CL7VgsEbEK7vzohC"; // Book appointment conversion
const GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL = "PT9bCP6ivdIcEK7vzohC"; // Conversia "Programare WhatsApp"

export function GoogleAds() {
  // Google Ads config is now included in Analytics.tsx
  // This component only provides conversion tracking functions
  return null;
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

export const trackWhatsAppConversion = (value?: number) => {
  if (GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL) {
    trackGoogleAdsConversion(GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL, value);
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
