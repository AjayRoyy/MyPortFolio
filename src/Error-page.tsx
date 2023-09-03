import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container } from "./style-components/ErrorPageStyled";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Container id="error-page">
      {isRouteErrorResponse(error) ? (
        <div>
          <h1>Oops!</h1>
          <h2>{error.status}</h2>
          <p>Error: {error.statusText}</p>
          {error.data?.message && <p>{error.data.message}</p>}
        </div>
      ) : (
        <div>Oops something went wrong</div>
      )}
    </Container>
  );
}
