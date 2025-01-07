const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Privacy Policy - AI Knowledge Platform
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Data Collection and Storage
            </h2>
            <p className="text-gray-600 mb-4">
              Our AI Knowledge Platform collects and processes the following
              types of information to provide our knowledge storage and
              retrieval services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <p>
                • Knowledge Base Content: Documents, queries, and structured
                data you upload
              </p>
              <p>
                • User Interaction Data: Search patterns, content organization
                preferences, and usage statistics
              </p>
              <p>
                • Technical Data: API requests, system logs, and performance
                metrics
              </p>
              <p>
                • Account Information: User profiles, authentication data, and
                access credentials
              </p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. AI Processing and Data Usage
            </h2>
            <p className="text-gray-600 mb-4">
              We utilize artificial intelligence to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <p>• Index and organize your uploaded knowledge base</p>
              <p>• Generate intelligent search results and recommendations</p>
              <p>• Optimize content retrieval based on user patterns</p>
              <p>• Enhance the platform's learning capabilities</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Data Security
            </h2>
            <p className="text-gray-600">
              We implement enterprise-grade security measures including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <p>• End-to-end encryption for data transmission</p>
              <p>• Secure cloud storage with regular backups</p>
              <p>• Access control and authentication protocols</p>
              <p>• Regular security audits and compliance checks</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. User Rights and Control
            </h2>
            <p className="text-gray-600 mb-4">
              Users maintain complete control over their data with rights to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <p>• Export or delete uploaded content</p>
              <p>• Modify AI learning preferences</p>
              <p>• Access usage analytics and logs</p>
              <p>• Request data portability</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Contact Information
            </h2>
            <p className="text-gray-600">
              For privacy-related inquiries, contact our Data Protection
              Officer:
              <br />
              Email: privacy@aiknowledge.com
              <br />
              Phone: (555) 123-4567
            </p>
          </section>

          <div className="text-sm text-gray-500 pt-8 border-t">
            Last updated: January 8, 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
