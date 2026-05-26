import { SiteShell } from "@/components/site-shell";
import { ComingSoonView } from "@/components/coming-soon-view";

export default function ComingSoonPage() {
  return (
    <SiteShell>
      <ComingSoonView
        label="Resources"
        title="Coming Soon"
        description="This page is being prepared. We are finalizing content and will publish it soon."
      />
    </SiteShell>
  );
}
