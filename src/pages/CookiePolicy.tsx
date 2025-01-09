const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900  dark:text-white mb-8">
          Cookie Policy - AI Knowledge Platform
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              1. AI Platform Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our AI Knowledge Platform uses cookies to enhance your experience
              and improve our services. These cookies are essential for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• Maintaining secure authentication sessions</p>
              <p>• Optimizing AI-powered search performance</p>
              <p>• Personalizing knowledge retrieval patterns</p>
              <p>• Storing user preferences and settings</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              2. Types of Cookies Used
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Essential Platform Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Required for core platform functionality, including
                  authentication, security, and basic features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  AI Performance Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Help optimize AI algorithms, search patterns, and content
                  retrieval speed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track platform usage, feature adoption, and system performance
                  metrics.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              3. Cookie Management
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can manage cookies through:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• Platform settings panel</p>
              <p>• Browser cookie controls</p>
              <p>• API configuration options</p>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Note: Disabling essential cookies may limit platform
              functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              4. Data Collection
            </h2>
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              Our cookies collect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <p>• User preferences and settings</p>
              <p>• Search and retrieval patterns</p>
              <p>• System performance metrics</p>
              <p>• Session information</p>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              5. Updates and Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              For questions about our cookie usage:
              <br />
              Email: privacy@aiknowledge.com
              <br />
              Technical Support: support@aiknowledge.com
            </p>
          </section>

          <div className="text-sm text-gray-500 dark:text-gray-400 pt-8 border-t dark:border-gray-700">
            Last updated: January 8, 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
