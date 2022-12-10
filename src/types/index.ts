export interface VideoItem {
  snippet: {
    title: string;
    channelTitle: string;
    [key: string]: any;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
      [key: string]: any;
    };
  };
  statistics?: {
    viewCount: number;
    likeCount: number;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface VideoProp {
  video: VideoItem;
  [key: string]: any;
}

export interface VideoListType {
  items?: VideoItem[];
  [key: string]: any;
}
