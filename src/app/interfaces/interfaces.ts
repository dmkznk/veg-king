export interface ItemInfoInterface {
  title: string;
  url: string;
}

export interface ReviewInterface {
  text: string;
  imageUrl: string;
  name: string;
}

export interface VisitorInfoInterface {
  name: string;
  email: string;
  notes?: string;
}

export interface CityCoordsInterface {
  x: number;
  y: number;
}
