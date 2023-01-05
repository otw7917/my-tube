import { LoaderFunctionArgs } from "react-router-dom";

export class YoutubeApi {
  baseUrl: string;
  key: string;
  regionCode: string;
  maxResult: string;

  constructor() {
    this.baseUrl = "https://www.googleapis.com/youtube";
    this.key = process.env.REACT_APP_YOUTUBE_API_KEY;
    this.regionCode = "US";
    this.maxResult = "20";
  }

  async getPopularVideoList() {
    const response = await fetch(
      `${this.baseUrl}/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=${this.maxResult}&regionCode=${this.regionCode}&key=${this.key}`,
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`net work Error ${response.status}`);
    }
  }

  async getSearchVideoList({ params }: LoaderFunctionArgs) {
    console.log(params);
    const { searchTitle } = params;
    const response = await fetch(
      `${this.baseUrl}/search?part=snippet&maxResults=${this.maxResult}&q=${searchTitle}&type=video&regionCode=${this.regionCode}&key=${this.key}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`net work Error ${response.status}`);
    }
  }
}
