export function getIdFromJWT() {
  const jwtData = JSON.parse(localStorage.getItem("jwtData") || "{}");
  return jwtData?.userData?.id || "1";
}

export function getUsernameFromJWT() {
  const jwtData = JSON.parse(localStorage.getItem("jwtData") || "{}");
  return jwtData?.userData?.name || "";
}
