import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { LargeSearchToggle } from 'fumadocs-ui/components/layout/search-toggle';
import { Sparkles } from 'lucide-react';
import { AISearchTrigger } from '@/components/ai';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      tree={source.pageTree}
      links={baseOptions.links?.filter(item => item.type === "icon")}
      searchToggle={{
        components: {
          lg: (
            <div className="flex gap-1.5 max-md:hidden">
              <LargeSearchToggle className="flex-1" />
              <AISearchTrigger
                aria-label="Ask AI"
                className={cn(
                  buttonVariants({
                    color: 'outline',
                    size: 'icon',
                    className: 'text-fd-muted-foreground',
                  }),
                )}
              >
                <Sparkles className="size-4 mr-2" />
                Mesh AI
              </AISearchTrigger>
            </div>
          ),
        },
      }}
      nav={{ ...baseOptions.nav, children: (
        <AISearchTrigger
          className={cn(
            buttonVariants({
              color: 'secondary',
              size: 'sm',
              className:
                'absolute left-1/2 top-1/2 -translate-1/2 text-fd-muted-foreground rounded-full gap-2 md:hidden',
            }),
          )}
        >
          <Sparkles className="size-4.5 fill-current" />
          Ask Mesh AI
        </AISearchTrigger>
      ),
    }}
    sidebar={{
        collapsible: false
      }}
    >
      {children}
    </DocsLayout>
  );
}
