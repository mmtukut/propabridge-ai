import { cn } from '@/lib/utils';

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="160"
    height="36"
    viewBox="0 0 160 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('text-primary', className)}
    {...props}
  >
    <LogoIcon className="h-9 w-9" />
    <text
      x="44"
      y="26"
      fontFamily="'Space Grotesk', sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="hsl(var(--foreground))"
    >
      Propabridge
    </text>
  </svg>
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
        <path d="M10 26V10H18.5C20.9853 10 23 12.0147 23 14.5C23 16.9853 20.9853 19 18.5 19H10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 19L23 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
