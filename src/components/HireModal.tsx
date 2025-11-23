import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface HireModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  agentName: string;
  isCustomHire?: boolean;
}

export const HireModal = ({ open, onOpenChange, agentName, isCustomHire = false }: HireModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    email: "",
    phone: "",
    projectDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = isCustomHire 
      ? "Custom AI Agent Consultation Request"
      : `Hiring Request for ${agentName}`;
    
    const body = isCustomHire
      ? `Client Name: ${formData.clientName}
Company: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}

Project Description:
${formData.projectDescription}`
      : `Client Name: ${formData.clientName}
Company: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}
Selected Agent: ${agentName}`;

    // Create mailto link
    const mailtoLink = `mailto:abdallamajdi94@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Request Sent!",
      description: isCustomHire 
        ? "Our team will contact you shortly to discuss your custom AI agent needs."
        : `Our team will contact you shortly to onboard ${agentName}.`,
    });
    
    // Reset form and close modal
    setFormData({
      clientName: "",
      companyName: "",
      email: "",
      phone: "",
      projectDescription: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isCustomHire ? "Book a Consultation" : `Hire ${agentName}`}
          </DialogTitle>
          <DialogDescription>
            {isCustomHire 
              ? "Tell us about your needs and we'll create the perfect AI agent for you."
              : "Fill in your details and we'll get in touch to complete the onboarding process."}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="clientName">Your Name *</Label>
            <Input
              id="clientName"
              required
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Acme Inc."
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@acme.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
            />
          </div>
          
          {isCustomHire && (
            <div className="space-y-2">
              <Label htmlFor="projectDescription">Project Description *</Label>
              <textarea
                id="projectDescription"
                required
                className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder="Describe your workflow and what you need the AI agent to do..."
              />
            </div>
          )}
          
          <DialogFooter>
            <Button type="submit" size="lg" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Send Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
