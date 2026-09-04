import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal-document';

export const metadata: Metadata = {
  title: 'Terms of Use | Preloved Toys',
  description: 'Terms for using the Preloved Toys website and toy donation services.',
};

export default function TermsPage() {
  return <LegalDocument language="en" type="terms" />;
}
