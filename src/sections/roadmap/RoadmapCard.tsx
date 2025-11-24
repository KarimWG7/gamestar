import React from "react";
import type { Card } from "./cards";
import { cn } from "@/lib/utils";

const RoadmapCard = ({
  card,
  className,
}: {
  card: Card;
  className?: string;
}) => {
  return (
    <div
      className={cn(["card flex flex-col max-w-sm", className])}
      key={card.title}
    >
      <h4
        className="card-header text-background font-machina font-bold text-xl rounded-top px-3 py-2 w-fit"
        style={{ backgroundColor: card.color }}
      >
        {card.title}
      </h4>
      <div
        className="card-body border-2 rounded-all-tl p-4 pb-0 h-full"
        style={{
          borderColor: card.color,
          backgroundColor: card.color + "20",
        }}
      >
        {card.content.map((content) => (
          <div key={content.element} className="mb-6">
            <h5
              className="text-lg font-machina font-bold mb-1"
              style={{ color: card.color }}
            >
              {content.element}
            </h5>
            <p>{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapCard;
