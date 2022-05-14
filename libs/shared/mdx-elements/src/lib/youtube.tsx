export interface YoutubeProps {
  title: string;
  uid: string;
}

export function Youtube({ title, uid }: YoutubeProps) {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${uid}`}
        height="500px"
        width="100%"
        title={title}
      ></iframe>
    </div>
  );
}

export default Youtube;
