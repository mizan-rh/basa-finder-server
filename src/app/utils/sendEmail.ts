import nodemailer from 'nodemailer';
import config from '../config';

// Interface for email options
interface ISendEmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Configuration for email service
const emailConfig = {
  host: config.email.host,
  port: config.email.port,
  secure: config.email.secure,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
};

/**
 * Sends an email using nodemailer
 * @param options - Email options including recipient, subject, and content
 * @returns Promise that resolves when email is sent
 */
export const sendEmail = async (options: ISendEmailOptions): Promise<void> => {
  try {
    // Create a transporter using nodemailer
    const transporter = nodemailer.createTransport(emailConfig);

    // Email message configuration
    const mailOptions = {
      from: `"BasaFinder" <${config.email.user}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to: ${options.to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};