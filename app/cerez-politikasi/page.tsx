import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal-document';

export const metadata: Metadata = {
  title: 'Çerez Politikası | Askıda Oyuncak',
  description: 'Askıda Oyuncak çerez ve benzer teknolojiler politikası.',
};

export default function CookiePolicyPage() {
  return <LegalDocument language="tr" type="cookies" />;
}
