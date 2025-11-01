# Email Templates for Icchapurti Coaching Classes

This document contains all email templates you can use with EmailJS.

## Support Email
**Email:** icchapurticoachingclasses.udgir@gmail.com

---

## Template 1: Contact Form Inquiry (For You)

**When:** Sent to your email when someone submits the contact form

**Subject:** `New Inquiry from ICC Website - {{fullName}}`

**Body:**
```
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

---

## Template 2: Welcome Email (Auto-Reply to Student)

**When:** Sent automatically to students after they submit the contact form

**Subject:** `Welcome to Icchapurti Coaching Classes - Thank You for Your Interest!`

**Body:**
```
Dear {{fullName}},

Welcome to the Icchapurti Coaching Classes family! We're excited to have you on board.

Your inquiry has been successfully received, and our team will get back to you shortly to guide you through your educational journey.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

YOUR INQUIRY DETAILS:
Course Interested: {{course}}
Contact Number: {{studentPhone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT'S NEXT?

Our expert counselors will contact you within 24-48 hours to:
✓ Discuss your academic goals
✓ Explain the course structure
✓ Answer all your questions
✓ Help you enroll in the best program for you

If you have any questions or need immediate assistance, our support team is just an email away at:

icchapurticoachingclasses.udgir@gmail.com

We're here to assist you every step of the way!

Best regards,
The Icchapurti Coaching Classes Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Address: 94RF+67J, Ram Nagar, Khadkali, Udgir, Maharashtra 413517
📧 Email: icchapurticoachingclasses.udgir@gmail.com
🌐 Website: [Your Website URL]
```

---

## Template 3: Course Enquiry Confirmation

**Subject:** `Course Enquiry Received - {{course}}`

**Body:**
```
Dear {{fullName}},

Thank you for your interest in our {{course}} program!

We have received your enquiry and one of our expert counselors will reach out to you soon with detailed information about:
• Course curriculum and schedule
• Fee structure and payment options
• Admission process and requirements
• Batch timings and availability

We look forward to helping you achieve your academic goals!

For any immediate queries, please contact us at:
📧 Email: icchapurticoachingclasses.udgir@gmail.com
📱 Phone: [Your Phone Number]

Best regards,
Icchapurti Coaching Classes Team
```

---

## How to Use These Templates in EmailJS

1. **For Contact Form Inquiries:**
   - Go to EmailJS Dashboard → Email Templates
   - Create a new template
   - Copy Template 1 above
   - Set recipient to: `icchapurticoachingclasses.udgir@gmail.com`

2. **For Auto-Reply Welcome Email (Optional):**
   - Create a second template in EmailJS
   - Copy Template 2 above
   - In your code, you can send two emails: one to you and one to the student

3. **Template Variables:**
   Make sure your EmailJS template includes these variables:
   - `{{fullName}}`
   - `{{studentPhone}}`
   - `{{parentPhone}}`
   - `{{course}}`
   - `{{comment}}`

---

## Quick EmailJS Setup Reminder

1. **Service ID:** `service_qgm9sat` ✅ (Already added)
2. **Template ID:** [Get from EmailJS Dashboard]
3. **Public Key:** [Get from EmailJS Dashboard]

Add these to your `.env` file or `src/config/emailjs.js`

