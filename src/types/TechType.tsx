interface ITechnology {
  id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string | null;
}
export type { ITechnology };