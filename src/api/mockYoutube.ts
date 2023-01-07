import { LoaderFunctionArgs } from "react-router-dom";

export class MockYoutubeApi {
  async getPopularVideoList() {
    const response = await fetch("data/popularVideo.json", {
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`net work Error ${response.status}`);
    }
  }

  async getSearchVideoList({ params }: LoaderFunctionArgs) {
    console.log(params);

    const response = await fetch("data/searchVideo.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`net work Error ${response.status}`);
    }
  }

  async getChannel({ params }: LoaderFunctionArgs) {
    const { channelId } = params;
    console.log(channelId);
    const response = await fetch("data/channel.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`net work Error ${response.status}`);
    }
  }
}
