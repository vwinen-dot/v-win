import React from 'react';

interface VWinLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const VWinLogo: React.FC<VWinLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  // Sizing definitions
  const iconDimensions = {
    sm: { width: 38, height: 38 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
    xl: { width: 84, height: 84 },
  }[size];

  const mainTextSize = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl',
  }[size];

  const subTextSize = {
    sm: 'text-[8.5px] tracking-[0.2em]',
    md: 'text-[9.5px] tracking-[0.22em]',
    lg: 'text-xs tracking-[0.25em]',
    xl: 'text-sm tracking-[0.3em]',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official V WIN Enterprises Logo Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/assets/aistudio/SHOP_LOGO_P_NG_2044a782.png"
          alt="V WIN Enterprises Logo"
          className="object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xs"
          style={{ width: iconDimensions.width, height: iconDimensions.height }}
          loading="eager"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display font-extrabold tracking-tight ${mainTextSize} ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            V WIN ENTERPRISES
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mb-0.5 inline-block" />
        </div>

        {showSubtitle && (
          <span
            className={`font-display font-semibold uppercase mt-1 ${subTextSize} ${
              isLight ? 'text-orange-400' : 'text-blue-900'
            }`}
          >
            HOME APPLIANCES
          </span>
        )}
      </div>
    </div>
  );
};
