import { use, useState } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../types/TechType";
import StackCard from "./StackCard";

interface ITechnologiesProps {
  techPromise: Promise<ITechnology[]>;
}

const Technologies = ({ techPromise }: ITechnologiesProps) => {
  const technologies = use(techPromise);
  const [selectedTechs, setSelectedTechs] = useState<ITechnology[]>([]);

  const handleAddToStack = (tech: ITechnology) => {
    const alreadyAdded = selectedTechs.some((t) => t.id === tech.id);
    if (alreadyAdded) return;
    setSelectedTechs([...selectedTechs, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (id: string) => {
    const removedTech = selectedTechs.find((t) => t.id === id);
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
    toast.info("All technologies removed from your stack");
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-[36px] font-bold text-black">
        Explore the{" "}
        <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-[36px] font-bold">
          Technologies
        </span>
      </h2>
      <p className="text-[#64748bFF] font-[16px]">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-4 gap-4 mt-8 items-start">
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {technologies.map((tech) => {
            const isSelected = selectedTechs.some((t) => t.id === tech.id);

            return (
              <div key={tech.id} className="border border-gray-200 rounded-lg p-4 w-64">
                <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-2" />
                <h2 className="font-bold text-lg">{tech.name}</h2>
                <p className="text-sm text-gray-600">{tech.description}</p>
                <button
                  onClick={() => handleAddToStack(tech)}
                  disabled={isSelected}
                  className="btn btn-outline btn-info mt-2"
                >
                  {isSelected ? "Added" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="col-span-1">
          <StackCard
            selectedTechs={selectedTechs}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;