// EmailJS Configuration
// 
// SETUP INSTRUCTIONS:
// 1. Option A (Recommended): Create a .env file in project root with:
//    VITE_EMAILJS_SERVICE_ID=service_qgm9sat
//    VITE_EMAILJS_TEMPLATE_ID=template_m7qw428
//    VITE_EMAILJS_PUBLIC_KEY=UbR5Ld_wKtvnrCCsc
//
// 2. Option B: Replace the values below directly
//
// ✅ ALL CREDENTIALS CONFIGURED:
// Service ID: service_qgm9sat ✅
// Template ID: template_m7qw428 ✅
// Public Key: UbR5Ld_wKtvnrCCsc ✅
//
// EmailJS is now fully configured and ready to use!
// Form submissions will be sent to: icchapurticoachingclasses.udgir@gmail.com
//
// Full setup guide: See EMAILJS_SETUP.md

export const EMAILJS_CONFIG = {
  // EmailJS Configuration - All credentials are set below
  // These will use environment variables if available, otherwise use the defaults below
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_qgm9sat',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_m7qw428',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'UbR5Ld_wKtvnrCCsc',
}

// Template variables should match your EmailJS template
// Make sure your EmailJS template has these variables:
// - {{fullName}}
// - {{studentPhone}}
// - {{parentPhone}}
// - {{course}}
// - {{comment}}
//
// Support Email: icchapurticoachingclasses.udgir@gmail.com
// For email templates, see: EMAIL_TEMPLATES.md

