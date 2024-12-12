import emailjs from '@emailjs/browser';

// EmailJS credentials
const SERVICE_ID = 'service_4htscgs';
const TEMPLATE_ID = 'template_628t8wm';
const PUBLIC_KEY = 'Zl2zLIZLIFe69spuU';

// Initialize EmailJS with the correct method
emailjs.init({
  publicKey: PUBLIC_KEY,
  // Limited to a single service/template
  limitRate: {
    throttle: 2000, // 2 seconds
  },
});

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      to_name: 'Nadder Awad',
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      reply_to: data.email,
    };

    console.log('Attempting to send email with params:', templateParams);

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('EmailJS Response:', response);
  } catch (error) {
    console.error('Email sending failed with details:', error);
    throw error;
  }
};