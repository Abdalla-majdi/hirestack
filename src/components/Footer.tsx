export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent" />
            <span className="text-lg font-bold text-foreground">HireStack</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 HireStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
