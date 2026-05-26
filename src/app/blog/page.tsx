import { SiteShell } from "@/components/site-shell";
import { ComingSoonView } from "@/components/coming-soon-view";

export default function BlogPage() {
  return (
    <SiteShell>
      <ComingSoonView
        label="Blog"
        title="Blog is coming soon"
        description="We are preparing our blog and publishing pipeline. First articles will be available soon."
      />
    </SiteShell>
  );
}
