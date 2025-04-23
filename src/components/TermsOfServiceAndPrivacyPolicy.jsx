import React from 'react';
import './TermsOfServiceAndPrivacyPolic.css';

const TermsofServiceandPrivacyPolicy = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service and Privacy Policy</h1>

      <section className="terms-section">
        <h2 className="section-title">1. Payment Terms</h2>
        <p className="section-content">
          Customers are required to make payments in accordance with the payment schedule agreed upon during the contract signing. Late payments may incur additional fees or penalties as outlined in the agreement. All payments should be made via approved payment methods, and receipts will be issued upon confirmation of payment.
        </p>
        <p className="section-content">
          Refunds, if applicable, will be processed in accordance with our refund policy and may take up to 30 business days. Payments made in currencies other than the agreed currency may be subject to conversion fees.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">2. Quantity and Quality of Products</h2>
        <p className="section-content">
          Chidest Oil and Gas guarantees the delivery of products that meet the agreed-upon quality and quantity specifications. Any discrepancies in product quality or quantity should be reported within 7 days of delivery for resolution. Products are tested for quality compliance before dispatch.
        </p>
        <p className="section-content">
          Customers are advised to inspect products upon delivery. Tampering with products after delivery will void any claims related to quality or quantity.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">3. Delivery Schedules</h2>
        <p className="section-content">
          Delivery schedules will be mutually agreed upon during the contract negotiation phase. Chidest Oil and Gas will strive to meet delivery deadlines; however, delays caused by unforeseen circumstances such as natural disasters, strikes, or government regulations will not be our liability. Customers will be notified promptly in such cases.
        </p>
        <p className="section-content">
          Customers are required to provide accurate delivery details. Any additional costs incurred due to incorrect information will be borne by the customer.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">4. Dispute Resolution</h2>
        <p className="section-content">
          Any disputes arising from this agreement will be resolved through mutual negotiation and understanding. If an amicable resolution cannot be reached, the matter will be referred to arbitration in accordance with applicable laws. The arbitration decision will be final and binding on all parties.
        </p>
        <p className="section-content">
          Parties may also seek mediation services before proceeding to arbitration. Legal costs associated with resolving disputes will be borne by the party found at fault.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">5. Legal Compliance</h2>
        <p className="section-content">
          Both parties agree to comply with all applicable laws and regulations governing the oil and gas industry. Chidest Oil and Gas ensures that all operations, transactions, and services are conducted in compliance with local, national, and international legal standards.
        </p>
        <p className="section-content">
          Customers are responsible for obtaining any necessary permits or approvals required for the usage of the products purchased.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="section-title">6. Privacy Policy</h2>
        <p className="section-content">
          Chidest Oil and Gas is committed to protecting your privacy. Any personal or business information collected will only be used for purposes related to the services we provide. We do not share your information with third parties without your consent, except as required by law.
        </p>
        <p className="section-content">
          Our website may use cookies to enhance user experience. By using our services, you consent to the collection and use of your information as described in this policy.
        </p>
      </section>

      <footer className="terms-footer">
        <p>© {new Date().getFullYear()} Chidest Oil and Gas. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsofServiceandPrivacyPolicy;
