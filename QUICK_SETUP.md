# Quick EmailJS Setup Guide

## ✅ What You Already Have:
- **Service ID:** `service_qgm9sat` ✅
- **Template ID:** `template_m7qw428` ✅
- **Public Key:** ⚠️ **Need to get this**

## 📍 How to Get Your Public Key (Last Step!)

### Step-by-Step Instructions:

1. **Open EmailJS Dashboard:**
   - Go to: https://dashboard.emailjs.com/admin
   - Make sure you're logged in

2. **Navigate to Account Settings:**
   - Click **"Account"** in the left sidebar (or "Account Settings")
   
3. **Find API Keys Section:**
   - You'll be on the "General" tab (default)
   - Scroll down until you see **"API Keys"** section
   - It looks like this:

   ```
   ┌─────────────────────────────┐
   │ API Keys                      │
   ├─────────────────────────────┤
   │ Public Key: [abcd1234...] [📋]│
   │ Private Key: [xyz789...]    │
   └─────────────────────────────┘
   ```

4. **Copy Your Public Key:**
   - Click the copy button (📋) next to **Public Key**
   - Or manually select and copy it
   - It will look like: `abcdefghijklmnop` or `xyz123ABC456`

5. **Add to Your Project:**
   
   **Option A: Create .env file** (Recommended)
   - Create a file named `.env` in your project root
   - Add these lines:
   ```bash
   VITE_EMAILJS_SERVICE_ID=service_qgm9sat
   VITE_EMAILJS_TEMPLATE_ID=template_m7qw428
   VITE_EMAILJS_PUBLIC_KEY=paste_your_public_key_here
   ```
   - Save the file
   - Restart dev server: `npm run dev`

   **Option B: Edit config file directly**
   - Open `src/config/emailjs.js`
   - Replace `'YOUR_PUBLIC_KEY'` on line 18 with your actual public key

## 🎉 Test It!

1. Go to your website's Contact page
2. Fill out the form
3. Submit it
4. Check `icchapurticoachingclasses.udgir@gmail.com` for the email!

## ❓ Troubleshooting

**Can't find API Keys section?**
- Make sure you're logged in
- Check that you're on "Account" → "General" tab
- Try refreshing the page

**Form not working after adding Public Key?**
- Make sure you restarted the dev server (`npm run dev`)
- Check browser console for errors
- Verify all three values are correct (no extra spaces)

**Need more help?**
- See full guide: `EMAILJS_SETUP.md`
- EmailJS docs: https://www.emailjs.com/docs/

