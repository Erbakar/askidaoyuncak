import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal-document';

export const metadata: Metadata = {
  title: 'Privacy Notice | Provisional Toys',
  description: 'How Provisional Toys handles personal information during the toy donation process.',
};

export default function PrivacyPage() {
  return <LegalDocument language="en" type="privacy" />;
}
