import { Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy - BrainlyAI
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              1. Data Collection and Storage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              BrainlyAI Knowledge Platform collects and processes the following
              types of information to provide our knowledge storage and
              retrieval services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
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
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              2. AI Processing and Data Usage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We utilize artificial intelligence to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• Index and organize your uploaded knowledge base</p>
              <p>• Generate intelligent search results and recommendations</p>
              <p>• Optimize content retrieval based on user patterns</p>
              <p>• Enhance the platform's learning capabilities</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              3. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement enterprise-grade security measures including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• End-to-end encryption for data transmission</p>
              <p>• Secure cloud storage with regular backups</p>
              <p>• Access control and authentication protocols</p>
              <p>• Regular security audits and compliance checks</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              4. User Rights and Control
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Users maintain complete control over their data with rights to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• Export or delete uploaded content</p>
              <p>• Modify AI learning preferences</p>
              <p>• Access usage analytics and logs</p>
              <p>• Request data portability</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              5. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 flex gap-2">
              For privacy-related inquiries, contact
              <span className="flex gap-1 items-center">
                <Mail className="text-indigo-500 size-4 " />
                <div>support@brainlyai.com</div>
              </span>
            </p>
          </section>

          <div className="text-sm text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-300 dark:border-gray-700">
            Last updated: January 8, 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
