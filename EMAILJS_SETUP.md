# EmailJS Setup Guide

This guide will help you set up EmailJS to receive form submissions via email.

## Why EmailJS?

EmailJS is the **most popular** and **easiest** solution for handling contact forms without a backend:
- ✅ Free tier: 200 emails/month
- ✅ No backend required
- ✅ Easy setup (5 minutes)
- ✅ Direct email delivery
- ✅ Most coaching institutes use this
- ✅ Works with Gmail, Outlook, etc.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free account)
3. Sign up with your email or Google account

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup wizard to connect your email
5. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. **Set Recipient Email to:** `icchapurticoachingclasses.udgir@gmail.com`
4. Use this template:

```
Subject: New Inquiry from ICC Website - {{fullName}}

Hello,

You have received a new inquiry from the Icchapurti Coaching Classes website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STUDENT INFORMATION:
Name: {{fullName}}
Student Phone: {{studentPhone}}
Parent Phone: {{parentPhone}}
Course Interested: {{course}}

MESSAGE:
{{comment}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please respond to this inquiry at your earliest convenience.

This email was sent from the ICC Contact Form.
For support, contact: icchapurticoachingclasses.udgir@gmail.com
```

📝 **Note:** For more email templates (Welcome Email, Auto-Reply, etc.), see `EMAIL_TEMPLATES.md`

5. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

**This is the last key you need!** Here's exactly where to find it:

1. **Go to EmailJS Dashboard:** [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. **Look at the LEFT SIDEBAR** - Click on **"Account"** (or "Account Settings")
3. **On the Account page:**
   - You'll see tabs like: General, Integrations, Billing, etc.
   - Make sure you're on the **"General"** tab (it's usually the default)
4. **Scroll down** on the page until you see the **"API Keys"** section
5. **In the API Keys section**, you'll see:
   - **Public Key** - This is what you need! (Usually looks like: `abcdefghijklmnop` or similar)
   - Private Key (don't use this one)
6. **Click the copy button** next to your Public Key, or manually select and copy it
7. **The Public Key will look something like:** `abcdefghijklmnop1234` or `xyzABC123456`

💡 **Tip:** The Public Key is safe to use in frontend code - it's designed to be public!

## Step 5: Add Credentials to Project

### Option A: Environment Variables (Recommended)

1. **Create a `.env` file** in the project root (same folder as `package.json`):

```bash
VITE_EMAILJS_SERVICE_ID=service_qgm9sat
VITE_EMAILJS_TEMPLATE_ID=template_m7qw428
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

**Replace `your_actual_public_key_here` with the Public Key you copied from Step 4.**

2. **Restart the dev server:** 
```bash
npm run dev
```

✅ **You're all set!** Now test the contact form - it should send emails to `icchapurticoachingclasses.udgir@gmail.com`

### Option B: Direct Configuration

Edit `src/config/emailjs.js` and replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id',
  PUBLIC_KEY: 'your_actual_public_key',
}
```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox
4. You should receive the form submission!

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify all three credentials are correct
- Make sure EmailJS service is active

### Email not received?
- Check spam folder
- Verify email service is connected in EmailJS dashboard
- Check EmailJS dashboard → Activity for email logs

### Still having issues?
- EmailJS has great documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Check their support forum

## Security Note

✅ **Safe**: Public Key is safe to expose in frontend code
⚠️ **Never share**: Service ID and Template ID should be kept private (use environment variables)

## Alternative Solutions (Not Recommended)

If you don't want to use EmailJS, other options include:
- **Formspree**: Similar to EmailJS
- **Google Forms**: Less professional
- **Backend API**: Requires server setup (overkill for this)

**EmailJS is the best choice** for your use case - it's what most coaching institutes use!

