import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface AgentCardProps {
  name: string;
  role: string;
  level: string;
  industries: string;
  description: string;
  avatar: string;
  onHire: () => void;
  onViewSample: () => void;
}

export const AgentCard = ({ 
  name, 
  role, 
  level, 
  industries, 
  description, 
  avatar,
  onHire,
  onViewSample
}: AgentCardProps) => {
  return (
    <Card className="group h-full flex flex-col transition-all duration-300 hover:shadow-xl border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative pb-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img 
              src={avatar} 
              alt={name}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-background shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
          </div>
          
          <div className="flex-1 space-y-2">
            <CardTitle className="text-2xl mb-1">{name}</CardTitle>
            <CardDescription className="text-base font-medium">{role}</CardDescription>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                {level}
              </Badge>
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                $150/mo
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative flex-1 space-y-3">
        <div>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
            Industries
          </p>
          <p className="text-sm text-foreground/80">{industries}</p>
        </div>
        
        <div>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
            Key Skills
          </p>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
      
      <CardFooter className="relative flex-col gap-3">
        <Button 
          onClick={onHire}
          className="w-full transition-all duration-300 hover:scale-105"
          size="lg"
        >
          Hire {name}
        </Button>
        <Button 
          onClick={onViewSample}
          variant="outline"
          className="w-full"
          size="lg"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Work Sample
        </Button>
      </CardFooter>
    </Card>
  );
};
