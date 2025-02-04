export interface TwitterCardProps {
  id: string;  // Add this line
  profile: {
    name: string;
    handle: string;
    image: string;
    verified?: boolean;
    list?: string;
  };
  tweet: {
    content: string;
    image?: string;
    timestamp: string;
  };
  tags: Array<{
    name: string;
    time: string;
  }>;
  metrics: {
    comments: number;
    retweets: number;
    likes: string;
    influenceScore: number;
  };
  textColor?: string;
  onClick: (id:string) => void;
  isSelected?: boolean;
  selectedCardId:string;
}
