# Contact Form Setup Guide

The contact form is already integrated with the code. You just need to choose one of the options below.

---

## ✅ OPTION 1: FormSpree (Recommended - Free & Easiest)

### Advantages:
- ✅ Completely free (50 submissions/month)
- ✅ No backend code needed
- ✅ Receive emails directly in your inbox
- ✅ Dashboard to manage submissions
- ✅ Automatic spam protection

### Setup Instructions:

1. **Create an account:**
   - Visit: https://formspree.io
   - Sign up with your email (free)

2. **Create a new form:**
   - Click "New Form"
   - Name your form (e.g., "Portfolio Contact")
   - Confirm the email where you want to receive messages

3. **Get your Form ID:**
   - After creation, you'll get a URL like: `https://formspree.io/f/xxxxxxxx`
   - Copy the `xxxxxxxx` part (that's your Form ID)

4. **Update the code:**
   - Open file: `pages/contact/index.tsx`
   - Find the line: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID',`
   - Replace `YOUR_FORM_ID` with your actual Form ID

   Example:
   ```javascript
   const response = await fetch('https://formspree.io/f/mwpejvqk', {
   ```

5. **Done!** Redeploy your website and test the form.

### When someone sends a message:
- You'll receive an email immediately
- View all submissions in the Formspree dashboard
- Export data to CSV

---

## 🎯 OPTION 2: Web3Forms (Completely Free)

### Advantages:
- ✅ Completely free, unlimited submissions
- ✅ No account registration needed
- ✅ Only requires an Access Key

### Setup Instructions:

1. **Get your Access Key:**
   - Visit: https://web3forms.com
   - Enter your email address
   - Receive the Access Key via email

2. **Update the code:**

Replace the entire `handleSubmit` function in `pages/contact/index.tsx` with:

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  try {
    const formDataWithKey = {
      ...formData,
      access_key: 'YOUR_ACCESS_KEY_HERE', // Replace with your Access Key
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithKey),
    });

    if (response.ok) {
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitMessage('Oops! There was a problem. Please try again.');
    }
  } catch (error) {
    setSubmitMessage('Oops! Please try emailing me directly.');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 📧 OPTION 3: EmailJS (Send emails directly from browser)

### Advantages:
- ✅ Free (200 emails/month)
- ✅ Send from multiple email providers (Gmail, Outlook, etc.)
- ✅ Customize email templates

### Setup Instructions:

1. **Register and configure:**
   - Visit: https://www.emailjs.com
   - Create an account
   - Add email service (Gmail, Outlook, etc.)
   - Create email template
   - Get: Service ID, Template ID, Public Key

2. **Install EmailJS:**
```bash
npm install @emailjs/browser
```

3. **Update the code:**

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );

    setSubmitMessage('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    setSubmitMessage('Oops! Please try emailing me directly.');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 🔗 OPTION 4: Mailto Link (Simplest, but less professional)

Replace the form with a button that opens the email client:

```javascript
<a
  href={`mailto:${config.email}?subject=Contact from Portfolio&body=Name:%0D%0AEmail:%0D%0AMessage:`}
  className="btn-primary"
>
  Send Email
</a>
```

**Disadvantage:** Users must have an email client installed.

---

## 🏆 COMPARISON OF OPTIONS

| Option | Free | Easy Setup | Receive Email | No Account | Recommended |
|--------|------|------------|---------------|------------|-------------|
| **FormSpree** | 50/month | ⭐⭐⭐⭐⭐ | ✅ | ❌ | ⭐⭐⭐⭐⭐ |
| **Web3Forms** | Unlimited | ⭐⭐⭐⭐⭐ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| **EmailJS** | 200/month | ⭐⭐⭐⭐ | ✅ | ❌ | ⭐⭐⭐⭐ |
| **Mailto** | Unlimited | ⭐⭐⭐⭐⭐ | ✅ | ✅ | ⭐⭐ |

---

## 💡 RECOMMENDATION

**For beginners:** Use **Web3Forms** or **FormSpree**

**Reasons:**
- Super fast setup (only 5 minutes)
- No backend code needed
- Receive emails directly
- Free

---

## 🔧 TESTING

After setup:

1. Rebuild the website: `npm run dev`
2. Visit the Contact page: http://localhost:3000/contact
3. Fill out the form and send a test message
4. Check your email

**If you don't receive the email:**
- Check your spam folder
- Confirm you replaced the API key/Form ID correctly
- Check browser console for errors (F12)

---

## ❓ FAQ

**Q: Will I be charged?**
A: No! All options above have free plans.

**Q: Where are emails sent?**
A: Emails will be sent to the email address you configured in the service (FormSpree/Web3Forms/EmailJS).

**Q: Are there submission limits?**
A:
- FormSpree: 50 submissions/month (free plan)
- Web3Forms: Unlimited
- EmailJS: 200 emails/month (free plan)

**Q: Do I need a backend?**
A: No! All options run from the frontend, no backend needed.

**Q: How do I prevent spam?**
A: FormSpree and Web3Forms have built-in spam protection. You can also add reCAPTCHA.

---

## 🎯 NEXT STEPS

1. Choose one of the options above (recommended: **Web3Forms** or **FormSpree**)
2. Follow the setup instructions
3. Test thoroughly before deploying
4. Deploy to GitHub Pages
5. Share your portfolio link! 🎉

---

**Need help?** Refer to the documentation for each service:
- FormSpree: https://help.formspree.io
- Web3Forms: https://docs.web3forms.com
- EmailJS: https://www.emailjs.com/docs
