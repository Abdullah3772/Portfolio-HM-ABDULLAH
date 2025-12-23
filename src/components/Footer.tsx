import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-blue-400" />
            <p className="text-lg font-semibold">Hayaththu Mohammathu Abdullah</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React.js</span>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"></div>

          <p className="text-gray-400 text-sm">
            © 2025 Hayaththu Mohammathu Abdullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
