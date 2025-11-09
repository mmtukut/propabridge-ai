import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Logo = ({ className, ...props }: { className?: string }) => (
  <div className={cn("relative", className)} style={{ width: '140px', height: '38px' }} {...props}>
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/studio-2814112704-1b3d1.firebasestorage.app/o/propabridge_logo.png?alt=media&token=bf3cf9a2-ee26-48d3-a079-afe38775c4a7"
      alt="Propabridge Logo"
      fill
      priority
      sizes="(max-width: 768px) 140px, 140px"
      style={{ objectFit: 'contain' }}
    />
  </div>
);


export const LogoIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg 
        width="36" 
        height="36" 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn('text-primary', className)}
        {...props}
    >
        <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="currentColor"/>
        <path d="M10 26V10H18.5C20.9853 10 23 12.0147 23 14.5C23 16.9853 20.9853 19 18.5 19H10" stroke="hsl(var(--background))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 19L23 26" stroke="hsl(var(--background))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
