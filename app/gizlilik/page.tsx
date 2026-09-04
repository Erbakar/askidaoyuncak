import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal-document';

export const metadata: Metadata = {
  title: 'Gizlilik ve KVKK | Askıda Oyuncak',
  description: 'Askıda Oyuncak kişisel verilerin korunması ve KVKK aydınlatma metni.',
};

export default function PrivacyPage() {
  return <LegalDocument language="tr" type="privacy" />;
}
