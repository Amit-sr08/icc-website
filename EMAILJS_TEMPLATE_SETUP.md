# EmailJS Template Setup Guide - Step by Step

## 📧 How to Configure Your EmailJS Template

Follow these steps to set up your contact form email template:

---

## Step 1: Open EmailJS Dashboard

1. Go to: https://dashboard.emailjs.com/admin
2. Click on **"Email Templates"** in the left sidebar
3. Click on your template: **"template_m7qw428"** (or create a new one)

---

## Step 2: Configure Template Settings (Right Side)

### **To Email** (Required)
```
icchapurticoachingclasses.udgir@gmail.com
```
- **Don't use variables here** - use your actual email address
- This is where form submissions will be sent

### **From Name** (Optional)
```
ICC Website
```
or
```
Icchapurti Coaching Classes
```

### **From Email** (Required)
- ✅ Check: **"Use Default Email Address"**
- This uses the email connected to your EmailJS service

### **Reply To** (Important!)
```
icchapurticoachingclasses.udgir@gmail.com
```
- Set this to your support email
- When you reply, it will go to this address

### **Bcc & Cc** (Optional)
- Leave empty or add backup email addresses

---

## Step 3: Configure Email Content (Left Side)

### **Subject Line** (Required)
```
New Inquiry from ICC Website - {{fullName}}
```

### **Email Content/Body** (Required)

Use this template:

```html
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NEW INQUIRY FROM ICC WEBSITE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STUDENT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: {{fullName}}
Student Phone: {{studentPhone}}
Parent Phone: {{parentPhone}}
Course Interested: {{course}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{comment}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This inquiry was received from the ICC Contact Form.
Please respond at your earliest convenience.

Support Email: icchapurticoachingclasses.udgir@gmail.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### **Important Variables to Use:**

Make sure your template includes these exact variable names (they're case-sensitive):

- `{{fullName}}` - Student's full name
- `{{studentPhone}}` - Student's phone number
- `{{parentPhone}}` - Parent's phone number
- `{{course}}` - Selected course
- `{{comment}}` - Additional message/comment

**Note:** These variable names must match exactly what's in your code!

---

## Step 4: Save Your Template

1. Click the **blue "Save"** button (top right)
2. Wait for confirmation message
3. Your template is now ready!

---

## Step 5: Test Your Template

### Option 1: Use EmailJS "Test It" Button

1. Click **"Test It"** button (top right)
2. Fill in test values:
   - fullName: Test Student
   - studentPhone: 9876543210
   - parentPhone: 9876543211
   - course: NEET Coaching
   - comment: This is a test message
3. Click "Send Test"
4. Check your email inbox!

### Option 2: Test from Your Website

1. Go to your website's Contact page
2. Fill out the form
3. Submit it
4. Check: `icchapurticoachingclasses.udgir@gmail.com`

---

## ✅ Quick Checklist

Before testing, make sure:

- [ ] **To Email** is set to: `icchapurticoachingclasses.udgir@gmail.com`
- [ ] **Reply To** is set to: `icchapurticoachingclasses.udgir@gmail.com`
- [ ] **Subject** includes: `{{fullName}}`
- [ ] **Content** includes all 5 variables:
  - [ ] `{{fullName}}`
  - [ ] `{{studentPhone}}`
  - [ ] `{{parentPhone}}`
  - [ ] `{{course}}`
  - [ ] `{{comment}}`
- [ ] **Template is saved** (click Save button)

---

## 🔧 Troubleshooting

### Email not received?
1. Check **spam folder**
2. Verify **To Email** is correct (not a variable!)
3. Check EmailJS dashboard → **Email History** for logs
4. Verify email service is connected (Email Services section)

### Variables not showing?
- Make sure variable names match exactly: `{{fullName}}` not `{{full_name}}`
- Check spelling and capitalization
- Use curly braces: `{{variable}}` not `{variable}`

### Template not saving?
- Click **"Save"** button explicitly
- Wait for confirmation message
- Refresh and verify changes saved

---

## 📝 Need Help?

- Check EmailJS documentation: https://www.emailjs.com/docs/
- Review EmailJS dashboard → Email History for error logs
- Verify all credentials in `src/config/emailjs.js` are correct

---

## 🎉 You're Done!

Once saved, your contact form will automatically send emails to:
**icchapurticoachingclasses.udgir@gmail.com**

Every time someone submits the contact form, you'll receive an email with all their details!

