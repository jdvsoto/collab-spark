import { Button } from "@/components/ui/button";
import { Search, Menu, Bell, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener usuario de localStorage si está logeado
    const storedUser = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    if (storedUser) setUserName(storedUser);
    if (storedEmail) setUserEmail(storedEmail);
  }, [location]);

  // Detectar si está en login o register
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              CollabSpark
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isAuthPage && (
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/proyectos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Proyectos
              </Link>
              <Link
                to="/recursos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Recursos
              </Link>
            </div>
          )}

          {/* Search Bar */}
          {!isAuthPage && (
            <div className="hidden lg:flex items-center gap-2 bg-muted rounded-lg px-4 py-2 w-80">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar proyectos, recursos..."
                className="bg-transparent border-none outline-none flex-1 text-sm placeholder:text-muted-foreground"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3">
            {!isAuthPage && (
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Search className="w-4 h-4" />
              </Button>
            )}

            {/* Botón de login/register o nombre de usuario */}
            {userName ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    {userName}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Perfil</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span className="font-medium mr-2">Nombre: </span>{" "}
                    {userName}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="font-medium mr-2">Correo: </span>{" "}
                    {userEmail}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      localStorage.removeItem("userName");
                      localStorage.removeItem("userEmail");
                      window.location.reload();
                    }}
                    className="text-red-500 cursor-pointer"
                  >
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : isAuthPage ? (
              location.pathname === "/login" ? (
                <Link to="/register">
                  <Button variant="ghost" size="lg">
                    <User className="w-4 h-4" />
                    Register
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" size="lg">
                    <User className="w-4 h-4" />
                    Log in
                  </Button>
                </Link>
              )
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="lg">
                  <User className="w-4 h-4" />
                  Log in
                </Button>
              </Link>
            )}

            {/* Mobile menu button */}
            {!isAuthPage && (
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {!isAuthPage && isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-up">
            <div className="flex flex-col gap-3">
              <Link
                to="/proyectos"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Proyectos
              </Link>
              <Link
                to="/recursos"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Recursos
              </Link>
              <Link
                to="/perfil"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Mi Perfil
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
