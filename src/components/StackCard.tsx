import type { ITechnology } from "../types/TechType";

interface IStackCardProps {
  selectedTechs: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackCard = ({ selectedTechs, onRemove, onRemoveAll }: IStackCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 w-full h-fit">
      <h3 className="font-bold text-lg">Your Stack</h3>

      {selectedTechs.length === 0 ? (
        <>
          <p className="text-sm text-gray-500 mt-1">No technologies selected yet.</p>
          <div className="border-2 border-dashed border-gray-200 rounded-lg py-10 text-center text-sm text-gray-400 mt-4">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-500 mt-1">{selectedTechs.length} Technology Selected</p>

          <div className="flex flex-col gap-3 mt-4">
            {selectedTechs.map((tech) => (
              <div key={tech.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
                  <div>
                    <p className="font-medium text-sm">{tech.name}</p>
                    <p className="text-xs text-gray-400">{tech.category}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(tech.id)} className="text-red-500 font-bold cursor-pointer">
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button onClick={onRemoveAll} className="btn btn-outline btn-error w-full mt-4">
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default StackCard;