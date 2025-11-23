import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import sampleWorkChat from "@/assets/sample-work-chat.png";

interface WorkSampleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  agentName: string;
}

export const WorkSampleModal = ({ open, onOpenChange, agentName }: WorkSampleModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {agentName} - Work Sample
          </DialogTitle>
          <DialogDescription>
            Example of how {agentName} handles real customer interactions
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-border overflow-hidden bg-muted/30">
            <img 
              src={sampleWorkChat} 
              alt={`${agentName} work sample - WhatsApp conversation`}
              className="w-full h-auto"
            />
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Note:</strong> This is a representative sample. 
              Your agent will be customized to match your brand voice, business rules, and specific workflows.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
