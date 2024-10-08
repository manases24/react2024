import { Link, useRouteError } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";

export const Error = () => {
  const error: any = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong </h3>
      </div>
    </Wrapper>
  );
};
