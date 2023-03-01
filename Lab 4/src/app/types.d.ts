interface Product {
  name: string;
  type: 'monitor' | 'mouse' | 'keyboard' | 'gpu' | 'cpu'
  images: string[];
  description: string;
  rating: number;
  url: string;
}
