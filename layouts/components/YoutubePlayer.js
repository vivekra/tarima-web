import dynamic from 'next/dynamic';
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), {
  ssr: false, // prevent import during server-side build
});

/* const YoutubePlayer = ({ id, title, ...others }) => {
//  return <LiteYouTubeEmbed id={id} title={title} {...others} />;
 };
*/
export default YoutubePlayer;
