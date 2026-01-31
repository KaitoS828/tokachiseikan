import { navItems } from '@/data/content'

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl tracking-wider mb-2">十勝製函</p>
            <p className="text-sm text-gray-500 font-sans">TOKACHI SEIKAN</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-sm text-gray-500 hover:text-deep-black transition-colors interactive font-sans"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 font-sans">
            &copy; {new Date().getFullYear()} Tokachi Seikan Co., Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
