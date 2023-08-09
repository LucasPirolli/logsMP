import "./topBar.scss";
import CustomIcon from "./CustomIcon";

export const TopBar = () => {
  return (
    <>
      <nav className="top-bar">
        <a href="#">
          <h1 className="title">Logs</h1>
        </a>
        <div className="container-icons">
          <div className="teste">
            <CustomIcon
              name="notification"
              width={"24px"}
              height={"100%"}
              fill="currentColor"
            />
          </div>
          <div className="teste">
            <CustomIcon
              name="preferences"
              width={"24px"}
              height={"100%"}
              fill="currentColor"
            />
          </div>
          <div className="teste">
            <CustomIcon
              name="user"
              width={"24px"}
              height={"100%"}
              fill="currentColor"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
