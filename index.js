(function () {
  const cookieContainer = document.querySelector(".my-cookie");
  const cookies = document.cookie.split(";");
  const myCookie = cookies.find((cookie) => cookie.indexOf("MY_COOKIE") != -1);
  if (myCookie) {
    const value = myCookie.split("=")[1];
    cookieContainer.innerHTML = value;
  }
})();
