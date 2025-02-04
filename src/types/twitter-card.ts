export interface TwitterCardProps {
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
    likes: string | number;
    influenceScore: number;
  };
  textColor?: string;
}
