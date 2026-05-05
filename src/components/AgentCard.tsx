import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
}: AgentCardProps) => {
  return (
    <div className="group bg-white rounded-[20px] border border-black/[0.06] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
      {/* Avatar area */}
      <div className="relative bg-[#F5F5F7] px-8 pt-8 pb-6 flex items-center gap-5">
        <div className="relative shrink-0">
          <img
            src={avatar}
            alt={name}
            className="w-[68px] h-[68px] rounded-full object-cover ring-[3px] ring-white shadow-sm"
          />
          {/* Online indicator */}
          <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-[20px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-tight">
            {name}
          </h3>
          <p className="text-[13px] text-[#1D1D1F]/55 mt-0.5 leading-snug">{role}</p>
          <Badge
            variant="secondary"
            className="mt-2 text-[11px] font-medium rounded-full px-2.5 py-0.5"
          >
            {level}
          </Badge>
        </div>

        {/* Price */}
        <div className="shrink-0 text-right">
          <span className="text-[17px] font-bold text-primary">$150</span>
          <span className="text-[13px] text-[#1D1D1F]/40">/mo</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-6 flex-1 space-y-5 border-t border-black/[0.04]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1D1D1F]/35 mb-1.5">
            Industries
          </p>
          <p className="text-[14px] text-[#1D1D1F]/70 leading-snug">{industries}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1D1D1F]/35 mb-1.5">
            Core capability
          </p>
          <p className="text-[14px] leading-[1.57] text-[#1D1D1F]/60">{description}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="px-8 pb-8">
        <Button
          onClick={onHire}
          className="w-full rounded-full text-[15px] font-medium h-11"
        >
          Hire {name}
        </Button>
      </div>
    </div>
  );
};
