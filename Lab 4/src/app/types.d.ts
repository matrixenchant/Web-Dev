interface Product {
  id: number;
  name: string;
  type: 'all' | 'monitor' | 'mouse' | 'keyboard' | 'gpu' | 'cpu'
  images: string[];
  description: string;
  rating: number;
  url: string;
  likes: number;
}