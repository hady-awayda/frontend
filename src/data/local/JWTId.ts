export function getIdFromJWT() {
  const jwtData = JSON.parse(localStorage.getItem("jwtData"));
  return jwtData.userData.id;
}
