# EmailJS Setup Guide

## Quick Setup

1. **Create a .env file** in your project root with:
```env
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

2. **Get your public key**:
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up/Login
   - Go to Account → API Keys
   - Copy your Public Key
   - Replace `your_actual_public_key_here` in the .env file

3. **Restart your development server**:
```bash
npm run dev
```

## Service Configuration

The portfolio is already configured with:
- **Service ID**: `service_qixofr6`
- **Template ID**: `template_m73d3jg`

## Template Variables

Your EmailJS template should use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_email}}` - Recipient email
- `{{time}}` - Timestamp when email was sent

## Email Template HTML

Use this HTML template in your EmailJS dashboard:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>
    A message by <strong>{{from_name}}</strong> has been received.
    Kindly respond at your earliest convenience.
  </div>

  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            &#x1F464;
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong> ({{from_email}})
          </div>
          <div style="color: #cccccc; font-size: 13px">
            Subject: {{subject}}
          </div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>

  <div style="margin-top: 10px; color: gray; font-size: 11px">
    Message sent to: {{to_email}} <br />
    Sent on: {{time}}
  </div>
</div>
```

## Testing

After setup, test the contact form on your website. You should see:
- ✅ EmailJS Status: Configured
- Form submissions should work
- You'll receive emails at your configured address

## Troubleshooting

- Make sure the .env file is in the project root
- Restart your dev server after creating .env
- Check that your public key is correct
- Verify your EmailJS service is active
- Ensure template variables match exactly

For detailed setup instructions, see `EMAILJS_SETUP.md` 