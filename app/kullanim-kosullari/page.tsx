import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal-document';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları | Askıda Oyuncak',
  description: 'Askıda Oyuncak web sitesi ve oyuncak bağışı kullanım koşulları.',
};

export default function TermsPage() {
  return <LegalDocument language="tr" type="terms" />;
}
