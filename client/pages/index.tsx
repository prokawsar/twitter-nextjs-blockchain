import Sidebar from "../components/Sidebar";
import Feed from "../components/home/Feed";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
};

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar initialSelectedIcon="Home" />
        <Feed />
        <div>
          <h1>widgets</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
