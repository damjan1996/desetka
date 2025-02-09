import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '../../../components/Card';
import { Input } from '../../../components/Input';
import { Textarea } from '../../../components/TextArea';
import { Label } from '../../../components/Label';
import { Button } from '../../../components/Button';
import { Alert, AlertDescription } from '../../../components/Alert';
import { Loader2, Send, CheckCircle2, Mail } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = t('pages.contact.contactForm.errors.nameRequired');
        }

        if (!formData.email.trim()) {
            newErrors.email = t('pages.contact.contactForm.errors.emailRequired');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('pages.contact.contactForm.errors.emailInvalid');
        }

        if (!formData.message.trim()) {
            newErrors.message = t('pages.contact.contactForm.errors.messageRequired');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simuliere einen API-Aufruf
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="h-full bg-zinc-800/30 border border-zinc-800">
            <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-zinc-400" />
                    <CardTitle className="text-xl font-semibold text-white">
                        {t('pages.contact.contactForm.title')}
                    </CardTitle>
                </div>
                <CardDescription className="text-zinc-400">
                    {t('pages.contact.contactForm.description')}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    aria-label={t('pages.contact.contactForm.aria.form')}
                >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-zinc-300">
                                {t('pages.contact.contactForm.name.label')}
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t('pages.contact.contactForm.name.placeholder')}
                                className="h-12 bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500"
                                aria-invalid={!!errors.name}
                                disabled={isSubmitting}
                            />
                            {errors.name && (
                                <p className="text-sm text-red-400 mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-zinc-300">
                                {t('pages.contact.contactForm.email.label')}
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('pages.contact.contactForm.email.placeholder')}
                                className="h-12 bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500"
                                aria-invalid={!!errors.email}
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-400 mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-zinc-300">
                                {t('pages.contact.contactForm.message.label')}
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('pages.contact.contactForm.message.placeholder')}
                                rows={6}
                                className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500"
                                aria-invalid={!!errors.message}
                                disabled={isSubmitting}
                            />
                            {errors.message && (
                                <p className="text-sm text-red-400 mt-1">{errors.message}</p>
                            )}
                        </div>
                    </div>

                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            role="alert"
                            aria-label={t('pages.contact.contactForm.aria.successAlert')}
                        >
                            <div className="bg-zinc-900/50 border-zinc-700 text-zinc-300 p-3 rounded">
                                <Alert>
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <AlertDescription>
                                        {t('pages.contact.contactForm.successMessage')}
                                    </AlertDescription>
                                </Alert>
                            </div>
                        </motion.div>
                    )}

                    {submitStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            role="alert"
                            aria-label={t('pages.contact.contactForm.aria.errorAlert')}
                        >
                            <div className="bg-red-900/20 border-red-900/50 text-red-400 p-3 rounded">
                                <Alert>
                                    <AlertDescription>
                                        {t('pages.contact.contactForm.errorMessage')}
                                    </AlertDescription>
                                </Alert>
                            </div>
                        </motion.div>
                    )}

                    <Button
                        type="submit"
                        className="w-full h-12 bg-zinc-100 hover:bg-white text-zinc-900 font-medium transition-colors duration-300"
                        disabled={isSubmitting}
                        aria-label={
                            isSubmitting
                                ? t('pages.contact.contactForm.aria.submitting')
                                : undefined
                        }
                    >
                        {isSubmitting ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <>
                                <Send className="h-5 w-5 mr-2" />
                                {t('pages.contact.contactForm.submit')}
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
