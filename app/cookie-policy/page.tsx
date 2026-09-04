import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal-document';

export const metadata: Metadata = {
  title: 'Cookie Policy | Provisional Toys',
  description: 'How Provisional Toys uses cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return <LegalDocument language="en" type="cookies" />;
}
