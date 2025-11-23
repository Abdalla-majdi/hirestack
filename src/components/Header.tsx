export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HireStack
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#agents" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Agents
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#custom" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Custom Solutions
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
