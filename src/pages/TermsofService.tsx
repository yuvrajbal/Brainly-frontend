const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service - AI Knowledge Platform
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              1. Platform Services
            </h2>
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              Our AI Knowledge Platform provides:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• Intelligent knowledge storage and organization</p>
              <p>• Advanced search and retrieval capabilities</p>
              <p>• AI-powered content analysis and indexing</p>
              <p>• Collaborative knowledge management tools</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              2. User Obligations
            </h2>
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              Users of the platform agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• Upload only legally owned or licensed content</p>
              <p>• Maintain confidentiality of access credentials</p>
              <p>• Use the AI capabilities responsibly and ethically</p>
              <p>• Respect intellectual property rights</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              3. Data Usage Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By using our platform, you grant us the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>
                • Process and analyze uploaded content for service improvement
              </p>
              <p>• Store and index knowledge base content</p>
              <p>• Generate AI models from anonymized usage patterns</p>
              <p>• Create backup copies for service reliability</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              4. Service Limitations
            </h2>
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              Please be aware of the following limitations:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• Maximum file sizes and storage quotas</p>
              <p>• API rate limits and usage restrictions</p>
              <p>• Supported file formats and content types</p>
              <p>• Processing time for large knowledge bases</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              5. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to terminate service for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• Violation of these terms</p>
              <p>• Unauthorized use of the platform</p>
              <p>• Non-payment of subscription fees</p>
              <p>• Suspected malicious activity</p>
            </ul>
          </section>

          <div className="text-sm text-gray-500 dark:text-gray-400 pt-8 border-t dark:border-gray-700">
            Last updated: January 8, 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
