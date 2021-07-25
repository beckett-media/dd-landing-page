function getOS() {
  var os = "unknown_os";
  if (navigator.userAgent.indexOf("Win") !== -1) os = "windows_os";
  if (navigator.userAgent.indexOf("Mac") !== -1) os = "mac_os";
  if (navigator.userAgent.indexOf("Linux") !== -1) os = "linux_os";

  return os;
}

export default getOS;
