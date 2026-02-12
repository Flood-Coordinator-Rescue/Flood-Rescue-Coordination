import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const getLinkClass = (path: string) => {
    const baseClass = "px-6 py-3 transition hover:text-blue-600";
    const activeClass = "font-bold underline text-blue-600 decoration-2 underline-offset-4"; 
    const inactiveClass = "text-gray-700 font-medium";
    return location.pathname === path ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  }
  //Cái nì cho mobile
  const getMobileLinkClass = (path: string) => {
    const baseClass = "block px-3 py-2 rounded-md transition hover:bg-gray-50 hover:text-blue-600";
    const activeClass = "font-bold underline text-blue-600 bg-blue-50"; 
    const inactiveClass = "text-gray-700 font-medium";
    return location.pathname === path ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  }

  return (
    <header className="bg-white shadow-md">
      <div className="w-full fixed top-0 left-0 bg-white shadow z-50 ">
        <div className="flex justify-between items-center h-20 px-4 py-4">
          {/* Logo */}
          <Link to="/">
            <img
              src="/Logo.png"
              alt="Flood Rescue Logo"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={getLinkClass('/')} 
                  >
                    Trang chủ
                  </Link>
                </NavigationMenuItem>

                {/* Map */}
                <NavigationMenuItem>
                  <Link
                    to="/map"
                    className={getLinkClass('/map')}
                  >
                    Bản đồ
                  </Link>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem>
                  <Link
                    to="/search"
                    className={getLinkClass('/search')}
                  >
                    Tra cứu
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={getLinkClass('/contact')}
                  >
                    Liên hệ
                  </Link>
                </NavigationMenuItem>

                {/* Usage Guide */}
                <NavigationMenuItem>
                  <Link
                    to="/guide"
                    className={getLinkClass('/guide')}
                  >
                    Hướng dẫn sử dụng
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Đăng nhập
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobile}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="md:hidden pb-4">
            <div className="space-y-2">
              <Link
                to="/"
                className={getMobileLinkClass('/')} 
                onClick={() => setMobileOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                to="/map"
                className={getMobileLinkClass('/map')}
                onClick={() => setMobileOpen(false)}
              >
                Bản đồ
              </Link>
              <Link
                to="/search"
                className={getMobileLinkClass('/search')}
                onClick={() => setMobileOpen(false)}
              >
                Tra cứu
              </Link>
              <Link
                to="/contact"
                className={getMobileLinkClass('/contact')}
                onClick={() => setMobileOpen(false)}
              >
                Liên hệ
              </Link>
              <Link
                to="/guide"
                className={getMobileLinkClass('/guide')}
                onClick={() => setMobileOpen(false)}
              >
                Hướng dẫn sử dụng
              </Link>
              <div className="px-3 py-2 pt-4 border-t">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Đăng nhập
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}