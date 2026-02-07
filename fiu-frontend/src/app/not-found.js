'Use Client'

export default function NotFound() {
  return (
<>
   
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-yellow-50 to-blue-50 px-8">
      <div className="bg-white/85 border-2 border-blue-100 rounded-2xl shadow-xl py-12 px-10 flex flex-col items-center w-full max-w-lg">
        <div className="flex items-center justify-center mb-4">
          <svg width="60" height="60" viewBox="0 0 80 80" fill="none" className="mr-3">
            <circle cx="40" cy="40" r="36" fill="#FFE066" stroke="#FBBF24" strokeWidth="3"/>
            <ellipse cx="40" cy="62" rx="20" ry="5" fill="#A5B4FC" />
            <ellipse cx="31" cy="36" rx="4" ry="4" fill="#1E40AF"/>
            <ellipse cx="49" cy="36" rx="4" ry="4" fill="#1E40AF"/>
            <path d="M34 48 Q40 54 46 48" stroke="#1E40AF" strokeWidth="2" fill="none" />
          </svg>
          <span className="text-6xl font-extrabold text-blue-900 tracking-tight shadow-yellow-200/95 drop-shadow-lg">404</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 text-center">Page Not Found</h2>
        <p className="text-gray-700 text-center mb-7 max-w-md text-base md:text-lg">
          The page you’re looking for doesn’t exist within FIU’s GRAMMR Lab digital workspace.<br />
          But don’t worry—our research spirit never gets lost for long.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <a
            href="/"
            className="px-7 py-2.5 bg-blue-900 text-white rounded-full font-semibold shadow hover:bg-yellow-400 hover:text-blue-900 border-2 border-blue-900 hover:border-yellow-400 transition-colors duration-150 text-center"
          >
            Back to Home
          </a>
          <a
            href="mailto:example@mail.com"
            className="px-5 py-2.5 bg-transparent border-2 border-yellow-400 text-yellow-700 rounded-full font-semibold hover:bg-yellow-100 hover:text-yellow-800 transition-colors duration-150 text-center"
          >
            Report this issue
          </a>
        </div>
      </div>
      <p className="text-xs text-gray-400 text-center mt-8">
        If you need assistance, please contact the site administrator.
      </p>
    </div>
    
    </>
  )}