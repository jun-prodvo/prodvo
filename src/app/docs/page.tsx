import { SiteShell } from "@/components/site-shell";
import { ComingSoonView } from "@/components/coming-soon-view";

export default function DocsPage() {
  return (
    <SiteShell>
      <ComingSoonView
        label="Docs"
        title="Documentation is coming soon"
        description="We are rebuilding the documentation experience. The new docs will be published soon."
      />
    </SiteShell>
  );
}
