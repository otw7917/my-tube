import { useLoaderData } from "react-router-dom";

interface ChannelInfo {
  [key: string]: any;
  snippet: {
    title: string;
  };
  statistics: {
    subscriberCount: string;
  };
}

export default function Channel() {
  const channel = useLoaderData() as ChannelInfo;
  console.log(channel.items[0]);
  const { snippet, statistics } = channel.items[0];
  return (
    <div className='w-full border-2 rounded-lg p-2 flex items-center'>
      <div className='m-2'>
        <div className='bg-white w-10 h-10 rounded-full ' />
      </div>
      <div className='flex-grow'>
        <span>{snippet.title}</span>
        <div className='flex justify-between'>
          <span className='text-sm'>
            {statistics ? statistics.subscriberCount : ""}
          </span>
          <span className='space-x-2 text-sm'>
            <button>구독하기</button>
            <button>메롱메롱</button>
            <button>저장</button>
            <button>플레이 리스트 저장히기</button>
          </span>
        </div>
      </div>
    </div>
  );
}
