import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
export default async function getServerSideProps(ctx) {
  let scribe_token = getCookie(ctx, "scribe_token");

  return {};
}
