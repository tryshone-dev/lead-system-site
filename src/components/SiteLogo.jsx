export function SiteLogo({ href = "/", className = "" }) {
  return (
    <a href={href} className={`flex items-center text-slate-900 ${className}`}>
      <svg
        viewBox="0 0 1200 290"
        role="img"
        aria-labelledby="site-logo-title site-logo-desc"
        className="h-auto w-[210px] max-w-[68vw] sm:w-[260px] lg:w-[320px]"
      >
        <title id="site-logo-title">Revenue After Dark</title>
        <desc id="site-logo-desc">
          Revenue After Dark logo with a circular growth icon and the tagline Instant Website Lead
          Response for Med Spas.
        </desc>

        <circle cx="124" cy="136" r="108" fill="#be6d7b" stroke="#ffffff" strokeWidth="14" />

        <path
          d="M44 178L104 120L136 152L200 92"
          fill="none"
          stroke="#ffffff"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M188 77L226 87L204 118Z" fill="#ffffff" />

        <path
          d="M104 182C80 182 61 197 61 218C61 239 80 254 104 254H152L166 265L161 254C177 248 189 234 189 218C189 197 170 182 146 182H104Z"
          fill="#ffffff"
        />
        <circle cx="104" cy="218" r="8" fill="#be6d7b" />
        <circle cx="130" cy="218" r="8" fill="#be6d7b" />
        <circle cx="156" cy="218" r="8" fill="#be6d7b" />

        <text
          x="264"
          y="130"
          fill="#20242d"
          fontFamily="'Plus Jakarta Sans', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif"
          fontSize="100"
          fontWeight="500"
          letterSpacing="18"
        >
          REVENUE
        </text>

        <text
          x="274"
          y="204"
          fill="#c77b88"
          fontFamily="'Plus Jakarta Sans', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif"
          fontSize="62"
          fontWeight="500"
          letterSpacing="28"
        >
          AFTER DARK
        </text>

        <text
          x="274"
          y="258"
          fill="#2f353d"
          fontFamily="'Plus Jakarta Sans', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif"
          fontSize="31"
          fontWeight="600"
          letterSpacing="4.2"
        >
          INSTANT WEBSITE LEAD RESPONSE FOR MED SPAS
        </text>
      </svg>
    </a>
  );
}
