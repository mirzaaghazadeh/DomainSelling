import { type Translation } from './types';

export const translations: Record<'en' | 'fa', Translation> = {
  en: {
    available: 'This domain is available for purchase',
    reveal: 'Click to reveal contact email',
    copied: 'Copied!',
    copy: 'Copy to clipboard',
    request: 'Please send me your request via email, I usually respond within an hour :)'
  },
  fa: {
    available: 'این دامنه برای فروش موجود است',
    reveal: 'برای مشاهده ایمیل کلیک کنید',
    copied: 'کپی شد!',
    copy: 'کپی در کلیپ بورد',
    request: 'لطفا درخواست خود را از طریق ایمیل ارسال کنید، معمولا در کمتر از یک ساعت پاسخ میدهم :)'
  }
};