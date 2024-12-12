import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { sendEmail } from '../services/emailService';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';
import { Button } from './ui/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await sendEmail(formData);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

    return(
        <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#2B4B8C] mb-8 tracking-tight">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to ensure your project's success? Contact us today for a consultation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#244E8A] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">Toronto, Ontario</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#244E8A] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 416 825 5443</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#244E8A] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <a href="mailto:nadder.awad@naddex.com" className="text-gray-600 hover:text-[#244E8A]">
                      nadder.awad@naddex.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <Toaster position="top-right" />
              <form  onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='John Doe'
                    error={errors.name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#244E8A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john@example.com'
                    error={errors.email}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#244E8A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='How can we help?'
                    error={errors.subject}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#244E8A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder='Your message here...'
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#244E8A] focus:border-transparent"
                  ></TextArea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#244E8A] text-white px-6 py-3 rounded-lg hover:bg-[#1a3366] transition-colors"
                  isLoading={isLoading}
                >
                  {!isLoading && <Send className="w-4 h-4" />}
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

    );
};