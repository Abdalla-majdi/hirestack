export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
            <span className="text-xl font-bold text-foreground">HireStack</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#agents" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Talent Pool
            </a>
            <a href="#custom" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Custom Solutions
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
