# EmailJS Setup Guide

## Overview
This portfolio uses EmailJS to handle contact form submissions. EmailJS allows you to send emails directly from your frontend without a backend server.

## Configuration Steps

### 1. EmailJS Account Setup
1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Verify your email address

### 2. Email Service Configuration
1. In your EmailJS dashboard, go to "Email Services"
2. Add a new email service (Gmail, Outlook, etc.)
3. Your Service ID is: `service_qixofr6`

### 3. Email Template Setup
   1. Go to "Email Templates" in your EmailJS dashboard
   2. Create a new template with ID: `template_contact`
   3. Use the following template variables:
      - `{{from_name}}` - Sender's name
      - `{{from_email}}` - Sender's email
      - `{{subject}}` - Email subject
      - `{{message}}` - Email message
      - `{{to_email}}` - Recipient email

### 4. Environment Variables
Create a `.env` file in your project root with:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_qixofr6
VITE_EMAILJS_TEMPLATE_ID=template_contact
```

### 5. Get Your Public Key
1. In EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your Public Key
3. Replace `your_public_key_here` in the `.env` file

## Email Template Example

Here's a sample email template you can use:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

## Testing
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email for the received message

## Troubleshooting

### Common Issues:
1. **"Failed to send message"** - Check your public key and service ID
2. **Template not found** - Verify your template ID matches exactly
3. **Service not working** - Ensure your email service is properly configured

### Debug Steps:
1. Check browser console for error messages
2. Verify all environment variables are set correctly
3. Test your EmailJS service in the dashboard
4. Check your email service settings (Gmail, etc.)

## Security Notes
- The public key is safe to expose in frontend code
- Never share your private keys
- Consider rate limiting for production use
- Monitor your EmailJS usage to stay within limits

## Production Deployment
1. Set environment variables in your hosting platform
2. Test the contact form in production
3. Monitor EmailJS dashboard for any issues
4. Consider upgrading to a paid plan for higher limits 