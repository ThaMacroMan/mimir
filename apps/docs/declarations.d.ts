import 'react';

declare module 'fumadocs-ui/components/card' {
  export interface CardProps {
    icon?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    href?: string;
    external?: boolean;
  }
}