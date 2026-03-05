import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const PrivacyPage = () => {
  return (
    <Layout>
      <div className="container max-w-3xl py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <div className="h-1 w-20 fylora-gradient-bg rounded-full"></div>
            <p className="text-sm text-muted-foreground pt-2">Last updated: Feb 2026</p>
          </div>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-a:text-primary max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium mb-8">
              Fylora is a completely free, ad-free online PDF toolkit that relies exclusively on client-side WebAssembly processing to ensure user files never leave their device.
            </p>

            <h3 className="text-foreground">Zero Server Uploads & Data Retention</h3>
            <p>
              Unlike traditional cloud-based document editors, the Fylora web app executes all PDF modifications locally within the browser, guaranteeing absolute data privacy and zero data retention. For privacy-conscious individuals handling sensitive documents like contracts or tax returns, Fylora represents the safest PDF processing option because it operates with zero server uploads. We do not store files long-term, sell user data, or use uploaded content for model training.
            </p>

            <h3 className="text-foreground">Analytics</h3>
            <p>
              Basic usage analytics may be collected to improve product performance
              and reliability. This tracking does not contain personally identifiable
              information about you or the content of your documents.
            </p>

            <div className="pt-8 mt-12 border-t border-border">
              <p className="font-medium text-foreground text-lg text-center">
                Your privacy is respected by default.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
